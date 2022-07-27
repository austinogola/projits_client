import Navbar from "../../components/Navbar"
import Home from "../../components/dashboard/Home"
import Sites from "../../components/dashboard/Sites"
import Settings from "../../components/dashboard/Settings"
import {useState} from 'react'

const Dashboard=()=>{

    const [showPage,setShowPage]=useState('Home')

    const changePage=(e)=>{
        setShowPage(e.target.textContent)
        const sideNavItems=document.querySelectorAll('.sideNavItem')

        sideNavItems.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    return(
        <div>
            <Navbar/>
            <div className="wrapper">
                <div>
                    <div className="sideNav">
                        <div className="sideNavWrapper">
                            <div className="sideNavItem" onClick={changePage}>Home</div>
                            <div className="sideNavItem" onClick={changePage}>Your Sites</div>
                            <div className="sideNavItem" onClick={changePage}>Settings</div>
                        </div>
                    </div>
                    <div className="mainContent">
                    {
                        showPage=='Home'?<Home/>
                        :showPage=='Your Sites'?<Sites/>
                        :showPage=='Settings'?<Settings/>
                        :null
                    }
                    </div>
                </div>
                <footer>
                    footer here
                </footer>
            </div>

            <style jsx>{`
                    .wrapper{

                    }
                    .sideNavWrapper{
                        background-color:#282C34;
                        min-height:600px;

                    }
                    .sideNavItem{
                        padding:20px;
                        /* margin-bottom:10px; */
                        color:white;
                        transition:.3s;
                        cursor:pointer;
                    }
                    .sideNavItem:hover{
                        background:grey;
                    }
                    .sideNavItem.active{
                        background:grey;
                    }

                    .wrapper > div{
                        display:grid;
                        grid-template-columns:20% 80%;
                    }
                    .mainContent{
                        padding-left:40px;
                        height:600px;
                    }
                    .card{
                        
                    }
                    footer{
                        border-top:1px solid #282C34;
                        height:120px;
                    }
                `}</style>
        </div>
    )
}


export default Dashboard