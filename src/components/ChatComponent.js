import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Media, Form, Input, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import mathbot from '../shared/mathbot'


class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    submit_message(message) {
        $.post("/api/send_message", { message: message }, handle_response);

        function handle_response(data) {
            // append the bot repsonse to the div
            $('#chat-container').append(`
                <div class="text-right col-sm-6 offset-sm-6 offset-2 col-10" 
                style=
                "padding: 6px;
                background:white;
                border-radius: 3px;
                margin-bottom: 3px;" 
                >
                    ${data.message}
                </div>
                <hr></hr>
            `)
            // remove the loading indicator
            $("#loading").remove();

            var objDiv = document.getElementById("chat-container");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const input_message = this.state.value;
        if (!input_message) {
            return;
        }

        $('#chat-container').append(`
            <div class="col-10 col-sm-6 text-left" 
            style=
            'margin: 13px 1px;
            padding: 6px;
            background:white;
            border-radius: 3px;
            margin-bottom: 3px;'>
                ${input_message}
            </div>
            <p></p>
        `)

        $('#chat-container').append(`
            <div class="text-right col-sm-6 offset-sm-6 offset-2 col-10 " 
            style=
            "padding: 6px;
            background:white;
            border-radius: 3px;
            margin-bottom: 3px;" 
            id="loading">
                <b>...</b>
            </div>
        `)

        this.setState({
            value: ''
        });

        var objDiv = document.getElementById("chat-container");
        objDiv.scrollTop = objDiv.scrollHeight;

        this.submit_message(input_message);
    }


    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'white', minHeight: '700px' }}>
                <div className='row' style={{ backgroundColor: '#170420', color: 'white' }}>
                    <Breadcrumb style={{ marginTop: '20px' }}>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Math Bot</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Chat Bot</h3>
                        <hr />
                    </div>
                </div>
                <div className='container'  >
                    <div className='row' style={{paddingTop:'30px'}}>
                        <div className='col-6 d-none d-md-block'>
                            <div className='row align-items-center'>
                                <div className='col-12'>
                                    <Media >
                                        <Media className='ml-auto' style={{ width: '100%', height: '400px', marginTop: '37px' ,borderRadius:'10px'}} object src="assets/images/scientist.png" alt={mathbot.name} />
                                    </Media>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h4>Chat Area :-)</h4>
                            <div id='chat-container' style={{ overflow: 'auto', height: "400px", backgroundColor: '#170420', borderRadius: '10px', padding: '10px' }}>
                            </div>
                            <div style={{ padding: '10px' }}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Input
                                            onChange={this.handleChange}
                                            type="text"
                                            value={this.state.value}
                                            placeholder='Enter text . . . . . .'
                                            id="input_message"
                                        />
                                        <Input type="submit" hidden value='Submit' />
                                    </FormGroup>
                                </Form>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBot;