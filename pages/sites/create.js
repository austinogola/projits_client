import Navbar from "../../components/Navbar"
import { useState } from "react"


const Create=()=>{
    const [sub,setSub]=useState('example')
    const [subdomain,setSubdomain]=useState('')
    const [available,setAvailable]=useState('')

    const handleChange=(e)=>{
        e.preventDefault()
        const value=e.target.value
        setSub(value)

         if(value.length==0){
            setAvailable('no')
        }else{
            checkSub(value)
        }


    }


    const checkSub=async(val)=>{
        setAvailable('loading')
        setTimeout(function(){
            fetch("http://localhost:5000/subdomains/check",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                subdomain:val,
                
            })
        }).then(async res=>{
            const response=await res.json()
            console.log();
            if (response.available=='true') {
                setAvailable('true')
                
            }else{
                setAvailable("false")
            }
        })},1000)
        

    }

    return(
        <div className="Create">
            <div className="createWrapper">
                <Navbar/>
                <div className="main">
                    <div className="mainWrapper">
                        <div className="text">
                            <h3>Start a site</h3>
                            <p>From code to live, in three easy steps</p>
                        </div>
                        <div className="searchDom">
                            <label htmlFor="subdomain">Pick your site name</label><br />
                            <input type="text" name="subdomain" onChange={handleChange} placeholder='example'/><br />
                            <input type="text"  disabled placeholder={`${sub}.projits.com`} />
                            {available==='true'? <span>&#10003; Name is available</span>:
                            available==='false'?<span>✖ Name is unavailable</span>:
                            available==='loading'?<span>Loading...</span>:
                            <span></span>}
                            <br />
                            <button onClick={checkSub} disabled>Proceed</button>
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


export default Create