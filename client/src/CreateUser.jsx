import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateUsers() {
 
 
    const [name , setname] = useState();   // initialized with empty string
  const [email , setemail] = useState(); // initialized with empty string
  const [age , setage] = useState();     // initialized with empty string
  const navigate = useNavigate();
  
  const Submit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/createUser", {name, email, age})
      .then(result =>{
          console.log(result)
          navigate('/')
      })
      .catch(err => console.log(err));
  }
 
  return(
      <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
          <div className='w-80 bg-white rounded p-3'>
              <form onSubmit={Submit}>
                  <div className='p-3'>
                      <h1 className='justify-content-center align-items-center d-flex p-3'>Create</h1>
                      <label htmlFor="name" >Name:</label>
                      <input 
                          type="text" id="name" name="name"  // bind input value to state
                          required  
                          onChange={(e) => setname(e.target.value)} 
                      />
                  </div>

                  <div className='p-3'>
                      <label htmlFor="email">Email:</label>
                      <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={email}  // bind input value to state
                          required  
                          onChange={(e) => setemail(e.target.value)} 
                      />
                  </div>

                  <div className='p-3'>
                      <label htmlFor="age">Age:</label>
                      <input 
                          type="number" 
                          id="age" 
                          name="age" 
                          value={age}  // bind input value to state
                          required  
                          onChange={(e) => setage(e.target.value)} 
                      />
                  </div>
                  
                  <div className='justify-content-center align-items-center d-flex'>
                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default CreateUsers;
