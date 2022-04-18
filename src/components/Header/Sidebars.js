import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import  Submenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import Navbar from './Navbar';
const Sidebars=()=>{
    const[sidebar,setsidebar]=useState(false);

    const showsidebar=()=>setsidebar(!sidebar);
    return(
        <>
        <IconContext.Provider value={{color:"purple"}}></IconContext.Provider>
        <Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showsidebar}/>
                
            </NavIcon>
            <Navbar/>
            
        </Nav>
        <SidebarNav sidebar={sidebar} >
            <SidebarWrap>
            <NavIcon to="#">
               <AiIcons.AiOutlineClose onClick={showsidebar}/>

            </NavIcon>
                {SidebarData.map((item,index)=>{
                    return <Submenu item={item} key={index}/>
                }

                )}
            </SidebarWrap>
        </SidebarNav>
        </>
    )
}

const Nav=styled.div`
background:#000C66;
box-shadow:10px 10px 15px lightblue;
height:80px;
display:flex;
justify-content:flex-starts;
align-item:center;
`;

const NavIcon=styled(Link)`
margin-left:2rem;
font-size:2rem;
margin-top:35px;
height:80px;
display:flex;
justify-content:flex-starts;
align-item:center;
`;
const SidebarNav=styled.nav`
background:#15171c;
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({sidebar})=>
    (sidebar ? '0': "-100%")};
transition:350ms;
z-index:10;

`;
const SidebarWrap=styled.div`
width:100%;
`;
export default Sidebars
