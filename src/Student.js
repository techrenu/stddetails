import React, { useState,useEffect } from 'react'
import './Student.css';
import axios from "axios";
import { FaTrash } from 'react-icons/fa';
// import { UserContext1, UserProvider } from './context/UserContext1';



const Student = () => {
  const initialData={
    firstname:'',
    lastname:'',
    age:'',
    standard:''
 }

const [state,setState]=useState(initialData);
 const [users,setUsers]=useState([]);
 const [list,setList]=useState([]);
   

//  const {stddetails,setStddetails}=useContext(UserContext1);
//  const [stdList]=useContext(UserContext1);
 useEffect(() => {
  fetchUser();
   //fetchUsers();
  
}, []);


const handleChange=(e)=>{
  // console.log(e.target)
  const{name,value}=e.target;
    setState({
      ...state,
      [name]:value
    })
}

const fetchUser = async () => {
  try {
      const response = await axios.get('http://localhost:4000/users');
      setUsers(response.data); // Set the list state with the fetched data
  } catch (error) {
      
  }
}

const handleClick=async()=>{
  try{
    const response=await axios.post('http://localhost:4000/users',state);
     console.log (response.data);
    setState(initialData);
  }
  catch( error){
    // console.log(error)
  }
}

// const handleDelete = async (currentId) => {
//   try {
//       console.log(currentId);
//     const response = await axios.delete(http//localhost:4000/users/${currentId});
//     console.log( response.data)
//     setList(list.filter(user => user.id !== currentId));
//   } catch (error) {
//     console.error( error);
//   }
// };


const handleDelete = async (currentId) => {
  try {
      //console.log(currentId);
    const response = await axios.delete(`http://localhost:4000/users/${currentId}`);
    console.log( response.data);
    setList(list.filter(user => user.id !== currentId));
  } catch (error) {
    //console.error( error);
  }
};


const fetchUsers = async () => {
  try {
      const response = await axios.get('http://localhost:4000/users');
      setList(response.data); // Set the list state with the fetched data
  } catch (error) {
      
  }
}








  return (
    <div>
        <h1>Student Details</h1>

        {/* { <h1>{stddetails.header}-{stddetails.footer}</h1> }  */}

        <br/>
    <form>
        <label>First Name:</label>
        <input
         name='firstname'
         type='text'
         value={state.firstname}
         onChange={handleChange}
        />
        <br/>

        <label>Last Name:</label>
        <input
         name='lastname'
         type='text'
         value={state.lastname}
        onChange={handleChange}
        />
        <br/> 

        <label>Age:</label>
        <input
         name='age'
         type='text'
          value={state.age}
         onChange={handleChange}
        />
        <br/>

        <label>Standard:</label>
        <input
         name='standard'
         type='text'
         value={state.standard}
         onChange={handleChange}
        />
        <br/>

        <button type='button' onClick={handleClick}> Submit  </button>
        <br/>
        <br/>
        <button type='button' onClick={fetchUsers}> Display </button>
        <br/>
      <h2>Students List </h2>
      <br/>


       <table>
        <thead>
           <tr>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Age</th>
         <th>Standard</th>
     </tr>
     </thead>
        
          <tbody>
            {list.map((list,index)=>(
            <tr key={index}>
              <td>{list.firstname}</td>
              <td>{list.lastname}</td>
              <td>{list.age}</td>
              <td>{list.standard}</td>
              
              <td>
                <FaTrash role="button" onClick={()=>handleDelete(list.id)} /> 
              </td>
             </tr>
            ))}
          </tbody>
        </table>


        

    </form>

    </div>
  )
}

export default Student