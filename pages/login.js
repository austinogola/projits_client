import Navbar from "../components/Navbar";
import { useState } from 'react'
import { useRouter } from "next/router"
import Footer from "../components/Footer";


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
          <h2>Login</h2>
          {err?<div className="errorMessage">
                        <p>{err}</p>
                    </div>:null}
          <div>
            <label htmlFor="email">Email</label><br />
            <input onChange={handleChange} type="email" name="email" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input onChange={handleChange} type="password" name="password" required/>
          </div>
          <div className="loginBtn">
            <button type="submit">Login</button>
          </div>
          <div className="no">
            <h5>No account? <a href="/register">Signup</a></h5>
          </div>
        </form>
      </div>
      <Footer/>

      <style jsx>
        {`
          .formWrapper{
            display:flex;
            padding-top:40px;
            padding-bottom:100px;
            justify-content:center;
            background-color:#282C34;
            min-height:400px;
          }
          form{
            background-color:white;
            width:40%;
            text-align:left;
            border-radius:5px;
            padding:24px;
            padding-left:40px;
            padding-right:40px;
          }
          input{
            height:30px;
            outline:none;
            border:none;
            border-bottom:#282C34 2px solid;
            border-radius:1px;
            width:100%;
            margin-bottom:10px;
            font-size:16px;
            letter-spacing:2px;
          }
          input[type=password]{
            letter-spacing:3px;
          }
          .loginBtn{
            margin-top:15px;
            display:flex;
            justify-content:center;
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
          button[type=submit]{
            height:40px;
          }
          .no{
            display:flex;
            justify-content:center;
            align-items:start;
          }
          label{
            font-size:12px;
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