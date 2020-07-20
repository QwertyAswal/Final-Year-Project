import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import leaders from '../shared/leaders';

function RenderLeader({ leaders }) {
    const leads = leaders.map((leader) => {
        return (
            <Fade in>
                <div className='row row-content align-items-center'>
                    <div className='col col-12 col-lg-2'>
                        <img style={{ maxWidth: '300px', maxHeight: '300px', width: '100%', height: '100%', borderRadius: '50%' }} src={leader.image} alt={leader.name} />
                    </div>
                    <div className='col col-12 col-lg-8 mt-3'>
                        <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </div>
                </div>
            </Fade>
        );
    });

    return (
        <>
            <Media list>
                <Stagger in>
                    {leads}
                </Stagger>
            </Media>
        </>
    );
}

function About(props) {


    return (
        <div className='container-fluid' style={{ backgroundColor: 'white', minHeight: '700px' }}>
            <div className="row" style={{ backgroundColor: '#170420', color: 'white' }}>
                <Breadcrumb style={{ marginTop: '20px' }}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2019 this group was bound to achieve gratness.</p>
                    <p>The group traces its humble beginnings to <em>year 2016</em>, a successful chain of frienship started by our CMO, Ms. Mamta Mehta, that featured for the first time the world's best minds in a stupid project.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-5">Started</dt>
                                <dd className="col-7">3 Feb. 2013</dd>
                                <dt className="col-5">Major Stake Holder</dt>
                                <dd className="col-7">GB pant Institute of Engineering and Technology</dd>
                                <dt className="col-5">Last Year's Turnover</dt>
                                <dd className="col-7">$0.00000000</dd>
                                <dt className="col-5">Employees</dt>
                                <dd className="col-7">3 workers + 1 leader</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12" style={{ paddingTop: '30px' }}>
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">It’s not a bug – it’s an undocumented feature.</p>
                                <footer className="blockquote-footer">Anonymous,
                                <cite title="Source Title">The Wit and Wisdom of Byteland,
                                    Dead Programmer, Linux Books, 1998</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row" style={{ paddingLeft: '30px', paddingTop: '30px' }}>
                <h2>Our Leaders</h2>
            </div>
            <hr></hr>
            <RenderLeader leaders={leaders} />
        </div>
    );

}

export default About;    