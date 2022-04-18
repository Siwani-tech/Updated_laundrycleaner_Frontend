
import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: "Invoice",
        path: '/invoice',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

    },
    {
        title: "Search",
        path: '/search',
        icons: <AiIcons.AiOutlineSearch />,

    },
    {
        title: "Customer",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Addcustomer",
                path: '/userinformation',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "Addarticle",
                path: '/addarticle',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "Addpricelist",
                path: '/addpricelist',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Addservices",
                path: '/addservices',
                icons: <AiIcons.AiOutlineCustomerService />,
            }
        ]
    },
    {
        title: "PrintInvoice",
        path: '/printinvoice',
        icons: <AiIcons.AiFillCustomerService />,
    },
    {
        title: "Seetings",
        path: '/seetings',
        icons: <AiIcons.AiFillSetting />,
    }
]

