import Navbar from "../components/Navbar";
import { useState } from 'react'
import { useRouter } from "next/router"


const Login=()=>{

  const[user,setUser]=useState({
    email:'',
    password:'',
})

const router=useRouter()


  const handleChange=async(e)=>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})

  }

  const [err,setErr]=useState('')



const handleSubmit=async(e)=>{
  e.preventDefault()
  setErr('')

  fetch('http://localhost:5000/auth/login',{
      method:'POST',
      headers:{
          'Content-Type':"application/json"
      },
      body:JSON.stringify({
          phone:user.phone,
          email:user.email,
          password:user.password
      })
  }).then(async response=>{
      const res=await response.json()
      if(res){
          if(res.token){
              localStorage.setItem('token',res.token)
              router.push('/dashboard')
          }else{
              setErr('Invalid credentials.Please check details and retry')
          }
      }else{
          setErr('Server Error.Please try again later')
      }
  }).catch(error=>{
      setErr('Server Error.Please try again later')
  })
}




  return(
    <div className="Login">
      <Navbar/>
      <div className="formWrapper">
        <form action="" onSubmit={handleSubmit}>
          <h2>Login to account</h2>
          {err?<div className="errorMessage">
                        <p>{err}</p>
                    </div>:null}
          <div>
            <label htmlFor="email">Email</label><br />
            <input onChange={handleChange} type="email" name="email" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input onChange={handleChange} type="text" name="password" required/>
          </div>
          <div className="loginBtn">
            <button type="submit">Login</button>
          </div>
          <div>
            <h5>No account? <a href="/register">Signup</a></h5>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          .formWrapper{
            display:flex;
            padding-top:50px;
            padding-bottom:50px;
            justify-content:center;
            background-color:#282C34;
            min-height:400px;
          }
          form{
            background-color:white;
            width:320px;
            text-align:center;
            border-radius:5px;

          }
          input{
            height:30px;
            outline:none;
            border:#282C34 2px solid;
            border-radius:5px;
            width:80%;
          }
          .loginBtn{
            margin:20px;

          }
          button{
            width:40%;
            height:30px;
            border:#282C34 solid 1px;
            color:#61DAFB;
            background-color:#282C34;
            border-radius:5px;
            cursor:pointer;

          }
          a{
            color:#61DAFB;
          }
          .errorMessage{
                    background-color: #F2DFDF;
                    border-radius: 5px;
                    color: #B65E5C;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    padding-top:10px;
                    padding-bottom:10px;
                    margin-left:15px;
                    margin-right:15px;
                }
        `}
      </style>
    </div>
  )
}


export default Login