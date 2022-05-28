import React from 'react'
import Sidebar from './Sidebar'
import '../App.css';
import '../Statement.css';
import StatementTable from './StatementTable';
import Navbar from './Navbar';
import LogoImage2 from '../images/button-more.svg';
import iconmore from '../images/icon_more.svg';
import statementschart from '../images/statementschart.png';



function Statement() {
    return (
        <>
            <div className="container-fluid d-flex flex-wrap g-0" >
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <div className="row g-0">
                        <Navbar />
                    </div>
                    <div className="row g-0 border">
                        <div className="earning-report col-md-9 border">
                          <img className='mt-1' src={statementschart} alt="logo-img" />

                        </div>
                        <div className=" col-md-3 border update-your-rprt">
                        <div className='d-flex justify-content-center   '>
                                <div className="card chat-Satisfaction update-your-rprt-card">
                                    <div className='circle-chart'>
                                        <img className='mt-1' src={LogoImage2} alt="logo-img" />
                                        <img className='icon-more' src={iconmore} alt="logo-img" />
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <div className="txt">
                                            <h3>85%</h3>
                                            <h5>Satisfaction</h5>
                                        </div>
                                        <div className="clip1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 p-3">
                    <StatementTable/>
                    </div>


                </div>
                <div className="col-md-3 border border-primary ">
                    
                </div>
            </div>

        </>
    )
}

export default Statement
