import Navbar from "../../../components/Navbar"
import { useState } from "react"


const Sub=()=>{
    const [sub,setSub]=useState('example')
    const [subdomain,setSubdomain]=useState('')

    const updateSub=(e)=>{
        e.preventDefault()
        setSub(e.target.value)
    }

    const checkSub=(e)=>{
        e.preventDefault()

    }

    const available=true

    return(
        <div className="Create">
            <div className="createWrapper">
                <Navbar/>
                <div className="main">
                    <div className="mainWrapper">
                        <div className="text">
                        </div>
                        <div className="searchDom">
                            <label htmlFor="subdomain">Pick another name for your site</label><br />
                            <input type="text" name="subdomain" onChange={updateSub} /><br />

                        </div>

                        <div className="domResults">
                            {available?<h4>'Example.com' is available'</h4>:
                            <h4>'Example.com' is not available'</h4>}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .main{
                    display:flex;
                    justify-content:center;
                    padding-top:50px;
                }
                .mainWrapper{
                    width:75%;
                    border:#79589F 1px solid;
                    min-height:500px;
                    padding-left:30px;

                }
                .mainWrapper>div{

                }
                .text{

                }
                .searchDom{

                }
                .searchDom > input{
                    height:60px;
                    margin-bottom:30px;

                }
                .searchDom > button{
                    cursor:pointer;
                }
            `}</style>
        </div>
    )
}


export default Sub