import React from 'react'
import DashboardIcon from '../images/dashboard icon_d.svg';
import MenuIcon from '../images/menu_icon_d.svg';
import StatementIcon from '../images/statement_icon_d.svg';
import ReservationsIcon from '../images/reservations_icon_d.svg';
import OrdersIcon from '../images/orders_icon.svg';
import NotificationsIcon from '../images/notifications_icon.svg';
import ChatIcon from '../images/chat_icon.svg';
import DashboardIconActive from '../images/dashboard_icon_active.svg';
import MenuIconActive from '../images/menu_icon_active.svg';
import StatementIconActive from '../images/statement_active.svg';
import ReservationIconActive from '../images/reservations_icon_active.svg';
// import OrderIconActive from '../images/orders _icon_active.svg';
import NotificationIconActive from '../images/notifications_icon_active.svg';
import ChatIconActive from '../images/chat_icon_active.svg';
// import {FaBeer} from '  react-icons/fa';



export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link:"/Dashboard",
        active_icon : <DashboardIconActive />
    },
    {
        title: "Menu",
        icon: <MenuIcon/>,
        link:"/Menu",
        active_icon : <MenuIconActive />
    },
    {
        title: "Statement",
        icon: <StatementIcon/>,
        link:"/Statement",
        active_icon : <StatementIconActive />
    },
    {
        title: "Reservations",
        icon: <ReservationsIcon/>,
        link:"/Reservations",
        active_icon : <ReservationIconActive />
    },
    
    {
        title: "Orders",
        icon: <OrdersIcon/>,
        link:"/Orders",
        // active_icon : <OrderIconActive />
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon/>,
        link:"/Notifications",
        active_icon : <NotificationIconActive />
    },

    {
        title: "Chat",
        icon: <ChatIcon/>,
        link:"/Chat",
        active_icon : <ChatIconActive />
    }
    
]

 
