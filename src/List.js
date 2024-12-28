import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import axios from 'axios';
import './List.css';
// import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { Link } from "react-router-dom";


const List = () => {
// const[state,setState]=useState([]);
const [list,setList]=useState([]);


const handleDelete = async (currentId) => {
    try {
        console.log(currentId);
      const response = await axios.delete(`http://localhost:4000/users/${currentId}`);
      console.log( response.data);
      setList(list.filter(user => user.id !== currentId));
    } catch (error) {
      console.error( error);
    }
  };


  return (
    <div>
        <h1>List</h1>
        <Link to="/list">
        <button>Go to List</button>
        </Link>

        <br/>
       <table>
      <  thead>
           <tr>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Age</th>
         <th>Standard</th>
     </tr>
     </thead>
        
          <tbody>
            {list.map((state,index)=>(
            <tr key={index}>
              <td>{state.firstname}</td>
              <td>{state.lastname}</td>
              <td>{state.age}</td>
              <td>{state.standard}</td>
              <td>
                <FaTrash role="button" onClick={()=>handleDelete(state.id)} /> 
                
              </td>
             </tr>



            ))}
          </tbody>
        
      </table>
    </div>
  )
}

export default List