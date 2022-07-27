import styles from '../styles/Navbar.module.css'

const Navbar=()=>{
    return(
        <div>
            <nav className='nav'>
                <div className="Logo">
                   <h2>LogoHere</h2>
                </div>
                <div className='navItems'>
                    <ul>
                        <li className='navLink'><a href="/help">Help</a></li>
                        <li className='navLink'><a href="/login">Login</a></li>
                        <li className='navLink'><a href="register">Sign up</a></li>
                        
                    </ul>
                </div>
            </nav>

            <style jsx>
                {`
                    .nav{
                        display: flex;
                        background-color: white;
                        align-items: center;
                        justify-content: space-between;
                        border:1px solid #79589F;
                        padding-left:10px;
                        padding-right:10px;
                    }
                    .navItems>ul{
                        display:flex;
                    }
                    li.navLink{
                        list-style: none;
                        margin:10px;
                    }
                `}

            </style>
        </div>
    )
}

export default Navbar