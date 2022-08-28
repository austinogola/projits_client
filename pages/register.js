import Navbar from "../components/Navbar";
import { useState } from 'react'
import { useRouter } from "next/router"
import Footer from "../components/Footer";


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
          <h2>Sign Up</h2>
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
            <input onChange={handleChange} type="password" name="password" required/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label><br />
            <input onChange={handleChange} type="password" name="confirmPassword" required/>
          </div>
          <div className="signUpBtn">
            <button type="submit">Sign Up</button>
          </div>
          <div className="already">
            <h5>Already have an account? <a href="/login">Login</a></h5>
          </div>
        </form>
      </div>
      <Footer/>

      <style jsx>
        {`
          .formWrapper{
            display:flex;
            padding-top:40px;
            padding-bottom:20px;
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
          .signUpBtn{
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
          a{
            color:#61DAFB;
          }
          .already{
            display:flex;
            justify-content:center;
            align-items:start;
          }
          label{
            font-size:12px;
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