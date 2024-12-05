import React,{useState,useEffect} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';

function UpdateUsers() {
    const {id} = useParams()
    const [name , setname] = useState()  // initialized with empty string
    const [email , setemail] = useState() // initialized with empty string
    const [age , setage] = useState()     // initialized with empty string
    const navigate = useNavigate()

    useEffect(()=>{
      axios.get('http://localhost:3001/getUser/'+id)
      .then(result => {console.log(result)
         setname(result.data.name)
         setemail(result.data.email)
         setage(result.data.age)
      })
      .catch(err =>console.log(err))
   },[])
   
   const Update = (e) =>{
    e.preventDefault();
      axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
      .then(result =>{
          console.log(result)
          navigate('/')
      })
      .catch(err => console.log(err));
   }


    return(
        <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
          <div className='w-80 bg-white rounded p-3'>
           
    <form onSubmit={Update}>
     <div className='p-3'>
        <h1 className='justify-content-center align-items-center d-flex p-3'>Update</h1>
      <label htmlFor="name" >Name:</label>
      <input type="text"  name="name" required value={name}   onChange={(e) => setname(e.target.value)} />
     </div>

    <div className='p-3'>
      <label htmlFor="email">Email:</label>
      <input type="email"  name="email" required value={email}   onChange={(e) => setemail(e.target.value)} />
    </div>

    <div className='p-3'>
      <label htmlFor="age">Age:</label>
      <input type="number"  name="age" required value={age}   onChange={(e) => setage(e.target.value)} />
    </div>
     <div className='justify-content-center align-items-center d-flex '>
    <button className='btn btn-success' >Update</button>
    </div>
  </form>
            
          </div>
        </div>
    )
}

export default UpdateUsers;