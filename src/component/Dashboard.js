import React from 'react'
import LogoImage2 from '../images/button-more.svg';
import iconmore from '../images/icon_more.svg';
import YourImageHere from '../images/your_image_here.png';
import revenuechart from '../images/revenuechart.png';
import scans from '../images/scans.png';
import ordersinprog from '../images/ordersinprog.png';
// import satisfactionbg from '../images/satisfaction_bg.svg';
import Sidebar from './Sidebar'


function Dashboard() {
    return (
        <> 
            <div className="container-fluid d-flex flex-wrap" >
                <div className="col-md-2">
                          <Sidebar/>
                </div>
                <div className="col-md-7">
                <div className="row mt-3 mb-3">
                <h1 className='font-weight-bold'>Dashboard</h1>
                </div>
                <div className="row d-flex flex-wrap mt-5">
                <div className="col-md-8 flex-wrap text-center">
                <img className='RevenueChart' src={revenuechart} alt="logo-img" />
                </div>
                <div className="col-md-4 d-flex flex-column flex-wrap mt-3">
                <div>
                    <div className="card chat-Satisfaction">
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

                <div>
                    <div className="card chat-replied">
                        <div className='circle-chart'>
                        <img className='mt-1' src={LogoImage2} alt="logo-img" />
                        <img className='icon-more' src={iconmore} alt="logo-img" />
                        </div>
                        <div className='d-flex flex-wrap'>
                        <div className="txt">
                            <h3>85%</h3>
                            <h5>Chat-replied</h5>
                        </div>  
                        <div className="clip2">
                        <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                        <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                        <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                        <img className='mt-2 w-25 h-12' src={YourImageHere} alt="logo-img" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row d-flex flex-wrap">
                <div className='col-md-6 text-center mt-5'><img  src={scans} alt="logo-img" /></div>
               
                <div className='col-md-6 text-center mt-5'><img  src={ordersinprog} alt="logo-img" /></div> 
                </div>
                </div>
                {/* <div className="col-md-3 mt-3 border border-primary ">
                    <h1>Right SideBar</h1>
                </div> */}
            </div>
        </>
  )
}

export default Dashboard
