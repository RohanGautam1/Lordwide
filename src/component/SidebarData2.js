import React from 'react'
import OrdersIcon from '../images/orders_icon.svg';
import NotificationsIcon from '../images/notifications_icon.svg';
import ChatIcon from '../images/chat_icon.svg';
import OrderIconActive from '../images/xyz.svg';
import NotificationIconActive from '../images/notifications_icon_active.svg';
import ChatIconActive from '../images/chat_icon_active.svg';

export const SidebarData2 = [
    
    {
        title: "Orders",
        icon: <OrdersIcon/>,
        link:"/Orders",
        active_icon : <OrderIconActive />
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