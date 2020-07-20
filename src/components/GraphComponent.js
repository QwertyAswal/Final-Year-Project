import React from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';



function Graph() {
    return (
        <div className='container-fluid' style={{ backgroundColor: 'white', minHeight: '700px' }}>
            <div className="row" style={{ backgroundColor: '#170420', color: 'white' }}>
                <Breadcrumb style={{ marginTop: '20px' }}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Graph Plotter</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Graph Plotter</h3>
                    <hr />
                </div>
            </div>
            <div className="row align-items-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
                <div className='col-12 text-center center-block'>
                    <h1>Sorry for the inconviniece :( </h1>
                </div>
            </div>
            <div>
                <p><br /></p>
                <p><br /></p>
            </div>
            <div className="row center-block text-center">
                <div className='col-12 d-flex justify-content-center'>
                    <Media top middle>
                        <Media object src='/assets/images/sorry.png' alt='Sorry' />
                    </Media>
                </div>
            </div>
            <div>
                <p><br /></p>
                <p><br /></p>
            </div>
            <div className="rowalign-items-center" style={{ paddingBottom: '50px' }}>
                <div className='col-12 text-center center-block' >
                    <h3>This page is under development.</h3>
                </div>
            </div>
        </div>
    );

}

export default Graph;    