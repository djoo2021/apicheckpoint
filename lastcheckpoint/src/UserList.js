import React,{useEffect,useState} from 'react'
import axios from 'axios'


function UserList() {

    const [listOfUser,setlistOfUser]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((resp)=>{setlistOfUser(resp.data);
        }).catch((err)=>{
            console.log(err);
        })

    },[])
  return (
    <div>
    {listOfUser.map(user=>(<div key={user.id}>
        <h2 style={{backgroundColor:"yellowgreen"}}>{user.name}</h2>
        </div>))}
    
    </div>
  )
}

export default UserList