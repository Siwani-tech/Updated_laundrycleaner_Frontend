
import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const MenuList = [
    {
        title: "Custumers",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Home",
                path: '/Home',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "CustomerPreferences",
                path: '/customerPreferences',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "Addnew",
                path: '/Addnew',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "CustomerPreferences",
                path: '/customerPreferences',
                icons: <AiIcons.AiOutlineCustomerService />,
            }
        ]

    },
    {
        title: "Drop",
        path: '',
        icons: <AiIcons.AiOutlineSearch />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "EditOrder",
                path: '/editorder',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "CancelOrder",
                path: '/cancelorder',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "DeleteOrder",
                path: '/deleteorder',
                icons: <AiIcons.AiFillDollarCircle />,
            }
           
        ]

    },
    {
        title: "Process",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Print QR Code",
                path: '/printqrcode',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "Pending For Finishing",
                path: '/pendingforfinishing',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "Packing Stickers",
                path: '/packing',
                icons: <AiIcons.AiFillDollarCircle />,
            }
        ]
    },
    {
        title: "Account",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Cash/Day Book",
                path: '/cash',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "Detail Cash",
                path: '/detailcash',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "Payment Type",
                path: '/paymenttype',
                icons: <AiIcons.AiFillDollarCircle />,
            }
        ]
    },
    {
        title: "Reports",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Orders",
                path: '/orders',
                icons: <AiIcons.AiFillCustomerService />,
            },
            {
                title: "Service wise Order",
                path: '/servicewiseorder',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Garment status",
                path: '/garmentstatus',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Garment details",
                path: '/garmentdetails',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Order by locality",
                path: '/orderbylocality',
                icons: <AiIcons.AiFillDollarCircle />,
            }

        ]
    },
    {
        title: "Master Data",
        path: '',
        icons: <AiIcons.AiFillCustomerService />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            
            {
                title: "Price List",
                path: '/pricelist',
                icons: <AiIcons.AiFillPieChart />,
            },
            {
                title: "Category wise report",
                path: '/categorywisereport',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Garment return case",
                path: '/garmentreturncase',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Payment adjustment type",
                path: '/paymentadjustmenttype',
                icons: <AiIcons.AiFillDollarCircle />,
            },
            {
                title: "Payment Mode type",
                path: '/paymentmodetype',
                icons: <AiIcons.AiFillDollarCircle />,
            }
         
        ]
    }
]

