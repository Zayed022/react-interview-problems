import React, { useState } from 'react'

const Thirteen = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('')
    const [isRegistered,setIsRegistered] = useState(false)
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [users,setUsers]= useState([])
    const handleAuthentication=()=>{
        if(isRegistered){
            const user = users.find((u)=>u.email===email && u.password===password);
            if(user){
                setIsLoggedIn(true)
            }
            else{
                alert("login failed")
            }
        }
        else{
            const newUsers = {email ,password};
            setUsers([...users,newUsers]);
            localStorage.setItem('users',JSON.stringify([...users,newUsers]));
            setIsLoggedIn(true);
        }
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
        setEmail('');
        setPassword('');
    }





  return (
    <div>
        {
            isLoggedIn?(
                <div>
                    <h2>Welcome, {email}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <div>
                    <h2>{isRegistered ? 'Login' :'Register'}</h2>
                    <form action="">
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleAuthentication}>{isRegistered?"Login":"Register"}</button>
      </form>
      <p>
        {isRegistered?"Dont have an account? Register now":"Already have an account?Log in!"}
      </p>
      <button onClick={()=> setIsRegistered(!isRegistered)}>
        {isRegistered?"Register":"Login"}
      </button>
    </div>
    
            )
        }
        </div>
      
  )
}

export default Thirteen
