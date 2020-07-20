import React from 'react';
import { Media } from 'reactstrap';
import { Fade } from 'react-animation-components';
import mathbot from '../shared/mathbot';
import datah from '../shared/datah';
import graph from '../shared/graph';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className='container-fluid' style={{ backgroundColor: 'white', minHeight: '700px' }}>
            <div className='row' style={{ backgroundColor: '#170420', color: 'white' }}>
                <div className="col-12">
                    <p />
                    <h3>Home</h3>
                    <hr />
                </div>
            </div>
            <div className='container' >
                <div className="row row-content align-items-center" style={{ backgroundColor: 'white' }}>
                    <div className="col-12 col-md">
                        <Fade in>
                            <Link to='/graph'>
                                <Media className="mb-5">

                                    <Media top right>
                                        <Media object style={{ width: '200px', height: '150px' }} src={graph.image} alt={graph.name} />
                                    </Media>

                                    <Media body className="mr-5" style={{ color: 'black' }}>
                                        <Media heading>{graph.name}</Media>
                                        <p>{graph.description}</p>
                                    </Media>

                                </Media>
                            </Link>
                        </Fade>
                    </div>
                </div>
                <div className="row row-content align-items-center" style={{ backgroundColor: '#170420', color: 'white' }}>
                    <div className="col-12 col-md m-1">

                        <Fade in>
                            <Link to='/chatbot'>
                                <Media className="mb-5">
                                    <Media body className="ml-5" style={{ color: 'white' }}>
                                        <Media heading>{mathbot.name}</Media>
                                        <p>{mathbot.description}</p>
                                    </Media>

                                    <Media bottom right>
                                        <Media object style={{ width: '200px', height: '180px' }} src={mathbot.image} alt={mathbot.name} />
                                    </Media>

                                </Media>
                            </Link>
                        </Fade>

                    </div>
                </div>

                <div className="row row-content align-items-center" style={{ backgroundColor: 'white' }}>
                    <div className="col-12 col-md m-1">

                        <Fade in>
                            <Link to='/data'>
                                <Media className="mb-5">

                                    <Media bottom right>
                                        <Media object style={{ width: '250px', height: '150px' }} src={datah.image} alt={datah.name} />
                                    </Media>

                                    <Media body className="mr-5" style={{ color: 'black' }}>
                                        <Media heading>{datah.name}</Media>
                                        <p>{datah.description}</p>
                                    </Media>
                                </Media>
                            </Link>
                        </Fade>

                    </div>
                </div>

            </div>

        </div >
    );
}

export default Home;