import React, { useEffect, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom';
import './ViewPage.css';
// import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import { NavLink } from 'react-router-dom';

function ViewPage() {

  // const[searchone,setsearchone]=useState('');
  // const[tabledata,settabledata]=useState(data);
  // const[tablefilter,settablefilter]=useState([]);


 

  // const filtersearch=(e)=>{
  //   if(e.target.value!==""){
  //     setsearchone(e.target.value);
  //     const filtertable=tabledata.filter((o)=>Object.keys(o).some(k=>String(o[k]).toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())));
  //     settablefilter([...filtertable]);
  //   }
  //   else{
  //     setsearchone(e.target.value);
  //     settabledata([...tabledata]);
  //   }

  // }

  const [datauser, setuserdata] = useState([]);
  console.log(datauser);
  const { id } = useParams("");
  console.log(id);
  const getdata = async (e) => {
    // e.preventDefault();


    const res = await fetch('http://localhost:3007/getdatabyuser', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });


    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setuserdata(data)
      console.log("get data");

    }
  

  }

  useEffect(() => {
    getdata();
  }, []);

  
  const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:3007/deleteusers/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        // setDLTdata(deletedata)
        getdata();
    }

}


  return (


    <div className="container tbl-header">
     
      <table class="table" cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">fname</th>
            <th scope="col">email</th>
            <th scope="col">preferences</th>
            <th scope="col">discount</th>
            <th scope="col">address</th>
            <th scope="col">phone</th>
            <th scope="col">sms</th>
            <th scope="col">price</th>
            <th scope="col">nopackageselected</th>
            <th scope="col">Edit</th>
            <th scope="col">delete</th>
            <th scope="col">Book now</th>

          </tr>
        </thead>
        <tbody className="tbl-content">
          {
            datauser.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.fname}</td>
                    <td>{element.email}</td>
                    <td>{element.preferences}</td>
                    <td>{element.discount}</td>
                    <td>{element.address}</td>
                    <td>{element.phone}</td>
                    <td>{element.sms}</td>
                    <td>{element.price}</td>
                    <td>{element.nopackageselected}</td>
                    <td >
                      {/* <Link to={`edit/${element._id}`}> <button className="btn btn-danger" ><CreateIcon /></button> </Link> */}
                      {/* <button className="btn btn-danger" ><DeleteOutlineIcon /></button>
                        onClick={() => deleteuser(element._id)} */}
                      <NavLink to={`/${element._id}`}>
                        <button className="btn btn-danger"><CreateIcon className="btn btn-danger" /></button>
                      </NavLink>
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon className="btn btn-delete"/></button>
                     

                      </td>
                      <td>
                      <button className="button2">Book now</button>
                        </td>

                  </tr>

                </>
              )
            })
          }




        </tbody>
      </table>

    </div>

  )
}

export default ViewPage
