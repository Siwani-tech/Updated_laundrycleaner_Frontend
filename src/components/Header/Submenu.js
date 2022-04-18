
// import { iteratorSymbol } from 'immer/dist/internal';
import { useState } from 'react';

import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Submenu=({item})=>{

    const[subNav,setsubNav]=useState(false);

    const showSubnav=()=>setsubNav(!subNav);
    return(
        <>
        
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>

        <div>
            {item.icons}
            <SidebarLabel>
                {item.title}

            </SidebarLabel>

        </div>
        <div>
            {item.subNav && subNav ? item.iconOpened: item.subNav ? item.iconClosed: null}
        </div>
        </SidebarLink>
        {subNav && item.subNav.map((item,index)=>{
            return(
                <DropdownLink to={item.path} key={index}>
                    {item.icons}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
        </>
    )
}

const SidebarLink=styled(Link)`
display:flex;
color:white;
justify-content:space-between;
align-item:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:10px;


&:hover{
    background:purple;
    border-left:4px solid #632ce4;
    cursor:pointer;

}

`;

const SidebarLabel=styled.span`
margin-left:16px;

`;

const DropdownLink=styled(Link)`
background:black;
height:60px;
padding-left:3rem;
display:flex;
align-item:center;
text-decoration:none;
color:#f5f5f5;
font-size:12px;

&:hover{
    background:#632ce4;
    border-left:4px solid #632ce4;
    cursor:pointer;
}
`;

export default Submenu