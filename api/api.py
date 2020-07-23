from flask import Flask, request, jsonify, render_template
import os
import dialogflow
import requests
import json
import nltk
import re
from nltk.corpus import stopwords

nltk.download('wordnet')
nltk.download('stopwords')
os.environ['DIALOGFLOW_PROJECT_ID'] = ' '
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = ' '


replace_by_space_re = re.compile('[/(){}\[\]\|@,;]')
bad_symbols_re = re.compile('[^0-9a-z #+_]')
stopwords = set(stopwords.words('english'))

f = open('./Tags.txt', 'r')
li = f.read().split()
set_words = set(li)


def text_prepare(text):
    text = text.lower()
    text = re.sub(replace_by_space_re, ' ', text)
    text = re.sub(bad_symbols_re, '', text)
    text = ' '.join([word for word in text.split() if word not in stopwords])
    return text


def tag_finder(text):
    ret_li = []
    text = text_prepare(text)
    tokenizer = nltk.tokenize.WhitespaceTokenizer()
    tokens = tokenizer.tokenize(text)
    lemmatizer = nltk.stem.WordNetLemmatizer()
    li = [lemmatizer.lemmatize(token) for token in tokens]
    for i in li:
        if i in set_words:
            ret_li.append(i)
    return '%20'.join(ret_li)


def detect_intent_texts(project_id, session_id, text, language_code):
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(project_id, session_id)

    if text:
        text_input = dialogflow.types.TextInput(
            text=text, language_code=language_code)
        query_input = dialogflow.types.QueryInput(text=text_input)
        response = session_client.detect_intent(
            session=session, query_input=query_input)
        return response.query_result.fulfillment_text


app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/send_message', methods=['POST'])
def send_message():
    message = request.form['message']
    print(os.getenv('DIALOGFLOW_PROJECT_ID'))
    ans = tag_finder(message)
    if len(ans) != 0:
        print(ans)
        link = 'https://stackoverflow.com/questions/tagged/' + ans
        final_ans = 'Following link might help :- ' + '\n'+'<a href=\"' + \
            link+'\" target=\"_blank\">Stackoverflow Link</a>'
        response_text = {"message":  final_ans}
        return jsonify(response_text)

    else:
        project_id = os.getenv('DIALOGFLOW_PROJECT_ID')
        fulfillment_text = detect_intent_texts(
            project_id, "unique", message, 'en')
        response_text = {"message":  fulfillment_text}
        return jsonify(response_text)
