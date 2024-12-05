import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
     const [users ,setusers]= useState([])
     
     useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setusers(result.data))
        .catch(err =>console.log(err))
     },[])
    

     const handleDelete = (id)=>{
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res =>{ console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
     }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-70 bg-white rounded-5
           + p-3'>
             <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Changes</th>
                   
                </tr>
              </thead>
              <tbody>
               
                    
                        {users.map((user)=>{
                         return   <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                               
                                <Link to={`/update/${user._id}`} className='btn btn-success mr-5'>
  Update
</Link>
                                <button  className='btn btn-danger  ms-3' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                    </td>
                            </tr>
                        })}
                        
                    
              </tbody>
            </table>
            </div> 
        </div>
    )
}

export default Users;