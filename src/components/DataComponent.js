import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CSVReader } from 'react-papaparse';
import { Chart } from 'react-google-charts';


const buttonRef = React.createRef()

class Data extends Component {
    constructor() {
        super();
        this.test = [];
        this.renderCard = this.renderCard.bind(this);
    }

    renderCard(data) {
        var name = data.name, li = data.li, type = data.type, count = li.length, uni_count = data.uni, null_count = data.null, sum = 0;
        for (var i = 0; i < count; i++) {
            if (li[i] !== undefined)
                sum += parseFloat(li[i]);
        }
        var mean = sum / count;
        var end1 = <>
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={
                    data.uni_array
                }
                options={{
                    // Material design options
                    chart: {
                        title: 'name',
                    },
                }}
            />
        </>;
        var end2 = <></>
        if (type === 'Numerical Data') {
            end2 = <>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={
                        data.val_array
                    }
                    options={{
                        // Material design options
                        chart: {
                            title: 'name',
                        },
                    }}
                />
            </>
        }
        return (
            <>
                <div className='row row-content align-items-center'>
                    <div className='col col-12 col-lg-4 col-md-6'>
                        < Card >
                            <CardHeader className="bg-primary text-white">{name}</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Type</dt>
                                    <dd className="col-6">{type}</dd>
                                    <dt className="col-6">Total Values</dt>
                                    <dd className="col-6">{count}</dd>
                                    <dt className="col-6">Unique Values</dt>
                                    <dd className="col-6">{uni_count}</dd>
                                    <dt className="col-6">Null Values</dt>
                                    <dd className="col-6">{null_count}</dd>
                                    <dt className="col-6">Mean</dt>
                                    <dd className="col-6">{mean}</dd>
                                </dl>
                            </CardBody>
                        </Card >
                    </div>
                    <div className='col col-12 col-lg-8 col-md-6'>
                        <div className='row'>
                            <div className='col col-12 col-lg-6'>
                                {end1}
                            </div>
                            <div className='col col-12 col-lg-6'>
                                {end2}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    handleOnFileLoad = (dataFile) => {
        var d = [];
        var cols = dataFile[0].data;
        for (var j = 0; j < cols.length; j++) {
            var li = [], c = 0, fl = 0, type = '', val_array = [['id', 'value']];
            for (var i = 1; i < dataFile.length - 1; i++) {
                var data = dataFile[i].data;
                if (data[j] === '' || data[j] === undefined || data[j] === null) {
                    li.push(undefined);
                    c++;
                    val_array.push([i, 0]);
                }
                else {
                    val_array.push([i, parseFloat(data[j])]);
                    li.push(data[j]);
                    if (isNaN(data[j]))
                        fl = 1;
                }
            }
            if (fl === 0)
                type = 'Numerical Data';
            else
                type = 'Categorical Data'

            var uni_dict = {}, uni_array = [['unique_value', 'count']];
            for (i = 0; i < li.length; i++) {
                uni_dict[li[i]] = 1 + (uni_dict[li[i]] || 0);
            }
            var uni_keys = Object.keys(uni_dict);
            for (i = 0; i < uni_keys.length; i++)
                uni_array.push([uni_keys[i], uni_dict[uni_keys[i]]]);

            var dat = { name: cols[j], li: li, type: type, null: c, uni: (new Set(li)).size, uni_array: uni_array, val_array: val_array };
            d.push(this.renderCard(dat));
        }
        this.test = d;
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'white', minHeight: '700px' }}>
                <div className='row' style={{ backgroundColor: '#170420', color: 'white' }}>
                    <Breadcrumb style={{ marginTop: '20px' }}>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Data Helper</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Data Helper</h3>
                        <hr />
                    </div>
                </div>
                <div className='container-fluid'>
                    <CSVReader ref={buttonRef} onFileLoad={this.handleOnFileLoad} onError={this.handleOnError} noDrag noClick >
                        {() => (
                            <aside >
                                <div className='container'>
                                    <div className='row row-content align-items-center'>
                                        <div className='col col-12 col-md-6'>
                                            <h2>Import CSV File:- </h2>
                                        </div>
                                        <div className='col col-12 col-md-6'>
                                            <Input type="file" name="file" id="exampleFile" onClick={this.handleOpenDialog} />
                                            <FormText color="muted">
                                                Select a '.csv' file for data exploration
                                            </FormText>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {this.test}
                                </div>
                            </aside>
                        )}
                    </CSVReader>
                </div>
            </div >
        );
    }
}

export default Data;





