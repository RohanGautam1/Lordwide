import React, { useState } from 'react';
import "../App.css";
import { SidebarData } from './SidebarData';
import LogoImageDark from '../images/logo_main.svg';
import settingicon from '../images/setting_icon.svg';
import YourImageHere from '../images/your_image_here-1.png';


// console.log(SidebarData);


function Sidebar() {
    const [activeIcons , setActiveIcons] = useState();

    function changeIcon(e,val) {
        e.preventDefault();
        // console.log('ssss'+active);
        setActiveIcons(val.active_icon.type)
        // window.location.pathname = val.link
        
    }    



    return (
        <>
            <div className="Sidebar">
                <img className='logo-image-dark m-3 mb-4' src={LogoImageDark} alt="logo-img" />
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={(e) => {
                                    changeIcon(e,val);
                                }}

                            >
                                <div id='icon'><img src={(activeIcons == val.active_icon.type ? activeIcons : val.icon.type )} alt="" /> {val.title}</div>
                                {/* <div>{val.icon}</div> */}
                                {/* <div>{val.title}</div> */}
                            </li>
                        );
                    })

                    }
                </ul>
                
                <div className="row">
                <div className='SDashboardIconActiveidebarEnd'>
                    <div> 
                        <img src={YourImageHere} alt="" />
                    </div>
                    <div>
                        <img src={settingicon} alt="" />
                    </div>
                </div>

                </div>

                


            </div>

        </>
    )
}

export default Sidebar;
