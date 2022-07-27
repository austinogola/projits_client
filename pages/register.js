import Navbar from "../components/Navbar";
import { useState } from 'react'
import { useRouter } from "next/router"


const Register=()=>{

  const[user,setUser]=useState({
    email:'',
    username:'',
    password:'',
    confirmPassword:''

 })

  const [err,setErr]=useState('')

  const router=useRouter()

  const pwdSame=(first,second)=>{
    return first===second
}


  const handleChange=async(e)=>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})

  }

const handleSubmit=async(e)=>{
  e.preventDefault()
  setErr('')
  if(pwdSame(user.password,user.confirmPassword)){

      fetch('http://localhost:5000/auth/register',{
          method:'POST',
          headers:{
              'Content-Type':"application/json"
          },
          body:JSON.stringify({
              username:user.username,
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
                  setErr('User with Email or Phone already exists.Please login instead')
              }
          }else{
              setErr('Server Error.Please try again later')
          }
      }).catch(error=>{
          setErr('Server Error.Please try again later')
      })

      

  }else{

      setErr('Please ensure passwords fields are matching')
  }
}




  return(
    <div className="Register">
      <Navbar/>
      <div className="formWrapper">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register your account</h2>
          {err?<div className="errorMessage">
                        <p>{err}</p>
                    </div>:null}
          <div>
            <label htmlFor="username">Username</label><br />
            <input onChange={handleChange} type="text" name="username" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input onChange={handleChange} type="email" name="email" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input onChange={handleChange} type="text" name="password" required/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label><br />
            <input onChange={handleChange} type="text" name="confirmPassword" required/>
          </div>
          <div className="signUpBtn">
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <h5>Already have an account? <a href="/login">Login</a></h5>
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
          .signUpBtn{
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


export default Register