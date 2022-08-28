import styles from '../styles/Navbar.module.css'
import {BsCodeSlash} from 'react-icons/bs'
import { useEffect } from 'react'
import { useRouter } from 'next/router'



const Navbar=()=>{
    // useEffect(()=>{
    //     const logo=document.querySelector(".Logo")
    //     const router=useRouter()


    // })
    const router=useRouter()
    
    const goHome=()=>{
        
        router.push('/')
    }
    return(
        <div className='Navbar'>
            <nav className='nav'>
                <div className="Logo" onClick={goHome}>
                    <div className='icon'>
                        {/* <BsCodeSlash style={{fontSize:'2.2em',color:'#61DAFB'}}/> */}
                    </div>
                    <img src="/P(white).png" alt="" className='P-icon'/>
                    <h4>rojits</h4>
                </div>
                <div className='navItems'>
                    <ul>
                        <li className='navLink'><a className='nonButtoned' href="/help">Help</a></li>
                        <li className='navLink'><a className='buttoned' href="register">Sign up</a></li>
                        <li className='navLink'><a className='buttoned' href="/login">Login</a></li>
                        
                    </ul>
                </div>
            </nav>

            <style jsx>
                {`  
                    .nav{
                        display: flex;
                        background-color: white;
                        align-items: center;
                        height:75px;
                        justify-content: space-between;
                        padding-left:10px;
                        padding-right:10px;
                        background:#20232A;
                        
                    }
                    .Logo{
                        display:flex;
                        /* align-items:center; */
                        cursor:pointer;
                    }
                    .icon{
                        position:relative;
                        top:28px;
                    }
                    .P-icon{
                        width:32px;
                        height:32px;
                        position:relative;
                        top:38px;
                        left:4px;
                    }
                    .Logo h4{
                        font-size:28px;
                        margin-left:5px;
                        font-family: 'Nunito Sans', sans-serif;
                        font-weight:bold;
                        color:white;
                        letter-spacing:5px;
                    }
                    .navItems>ul{
                        display:flex;
                    }
                    li.navLink{
                        list-style: none;
                        margin:10px;
                    }
                    .navLink a{
                        font-size:14px;
                        font-weight:bold;
                        
                    }
                    .buttoned{
                        background-color:#F0F0F0;
                        color:black;
                        font-size:10px;
                        font-weight:normal;
                        padding:5px;
                        border-radius:2px;
                        transition:.3s;
                        /* border:1px solid #61DAFB; */
                    }
                    .buttoned:hover{
                       background-color:#9A9C8C;
                    }
                    .nonButtoned{
                        color:#9A9C8C;
                    }

                `}

            </style>
        </div>
    )
}

export default Navbar