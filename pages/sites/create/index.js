
import Navbar from "../../../components/Navbar";
import { useState , useEffect} from "react"
import { DiGithubBadge} from "react-icons/di";
import { FiGitlab} from "react-icons/fi";
import {useRouter} from 'next/router'

const Create=()=>{
    const [sub,setSub]=useState('example')
    const [subdomain,setSubdomain]=useState('')
    const [available,setAvailable]=useState('')

    const [repos,setRepos]=useState('')
    const [username,setUsername]=useState('')

    const router=useRouter()

    const code=router.query.code

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

    const saveToFlie=()=>{
        
    }



    const handleGitHub= async(e)=>{
        e.preventDefault()
        let params=`client_id=c1cea1f86311cb776671&redirect_uri=http://localhost:3000/sites/create/&login&scope=repo&allow_signup=true`
        // fetch(`https://github.com/login/oauth/authorize?${params}`,{ http://localhost:3000/sites/create
        //     method:'GET'

        // }).then(async res=>{
        //     const response=await res.text()
        //     // const body=response.getReader()
        //     // console.log(body);
        //     // const body=await res.body.getReader()
        //     // console.log(body);
        // })
        const fulUrl=`https://github.com/login/oauth/authorize?${params}`
        window.open(fulUrl,'_blank')
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
            if (response.available=='true') {
                setAvailable('true')
                
            }else{
                setAvailable("false")
            }
        })},1000)
        

    }

    if(code){
        let params={
            'client_id':'c1cea1f86311cb776671',
            'client_secret':'a1ba64f46e315a20c2bc6379db354a3e190325d8',
            'code':code
        }

        let query=Object.keys(params)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                    .join('&')

        let url=`https://github.com/login/oauth/access_token?${query}`
        
        fetch(url,{
            method:"POST",
            headers:{
                'Accept': 'application/json'
            }

        }).then(async res=>{
            
            const response=await res.json()
            const access_token=response['access_token']
            console.log(access_token);
            getRepos(access_token)
        })
    }

    const getRepos=(access_token)=>{
        console.log(access_token);
        fetch(`https://api.github.com/user`,{
            method:'GET',
            headers:{
                'Authorization':`token ${access_token}`
            }
        }).then(async res=>{
            const response=await res.json()

            if(response.url){
                let temp=response.url.split('/')
                let username=temp[temp.length-1]
                console.log(`https://api.github.com/users${username}/repos`);

                fetch(`https://api.github.com/users/${username}/repos`,{
                    method:'GET',
                    headers:{
                        'Authorization':`token ${access_token}`
                    }
                }).then(async res=>{
                    const response=await res.json()
                    setRepos(response)
                    setUsername(username)
                    console.log(repos);
                })

            }
            
        })
    }


    useEffect(() => {
        
    });

    return(
        <div className="Create">
            <div className="createWrapper">
                <Navbar/>
                <div className="main">
                    <div className="mainWrapper">
                        <div>
                            <h3 className="createS">Create Site</h3>
                            <p className="fromC">From code to live, in three easy steps</p>
                        </div>
                        <div className="text">
            
                            <h5 className="selectG">1.Pick a Git repository</h5>
                            <p className="chooseT">
                                Choose the repository you want to link to your site on Projits.When you 
                                push changes to Git, we run automatically them on our servers and deploy the result.
                            </p>
                        </div>
                        {/* <div className="searchDom">
                            <label htmlFor="subdomain">Pick your site name</label><br />
                            <input type="text" name="subdomain" onChange={handleChange} placeholder='example'/><br />
                            <input type="text"  disabled placeholder={`${sub}.projits.com`} />
                            {available==='true'? <span>&#10003; Name is available</span>:
                            available==='false'?<span>✖ Name is unavailable</span>:
                            available==='loading'?<span>Loading...</span>:
                            <span></span>}
                            <br />
                            <button onClick=''>Create</button>
                        </div> */}
                        {
                        repos?
                        <div className="allRepos">
                            <h4>{username}</h4>
                            {repos.map(repo=>{
                            return(
                                <div key={repo.id} className='repos'>
                                    <div className="repoDiv">
                                        <p className="repoName">
                                            <span className="username">{username}/</span>
                                            {repo.name}</p>
                                    </div>
                                    
                                </div>
                            )
                        })}
                        </div>
                        
                        :<div className="gits">
                            <button className="githubBtn" onClick={handleGitHub}>
                                <span className="hubBadge"><DiGithubBadge/></span>
                                 GitHub
                            </button>
                            <button className="gitlabBtn">
                                <span className="labBadge"><FiGitlab/></span>
                                GitLab
                            </button>
                        </div>
                        }
                        
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
                    width:50%;
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
                .createS{
                    font-size:1.8em;
                    margin-bottom:0px;
                    text-align:center;
                }
                .fromC{
                    text-align:center;
                }
                .selectG{
                    font-size:1.2em;
                }
                .gits{
                    padding:10px;
                }
                .gits>button{
                    margin-left:10px;
                    height:40px;
                    width:120px;
                    border-radius:5px;
                    color:white;
                    font-weight:bolder;
                    border:none;
                    cursor:pointer;
                    
                }
                .githubBtn{
                    background-color:#1B1F23;
                }
                .gitlabBtn{
                    background-color:#DB3B21;
                }
                .chooseT{
                    position:relative;
                    bottom:10px;
                    left:5px;
                }
                .hubBadge{
                    position:relative;
                    top:3px;
                    font-size:20px;
                    margin-right:5px;
                }
                .labBadge{
                    position:relative;
                    top:3px;
                    font-size:20px;
                    margin-right:5px;
                }
                .repos{
                    padding-left:20px;
                    height:50px;
                    cursor:pointer;
                    display:flex;
                    align-items:center;
                    transition:.3s;
                }
                .repos:hover{
                    background-color:#AFAFAF;
                }
                .allRepos{
                    padding-left:20px;
                    font-size:24px;
                }
                
                .allRepos:nth-child(even){
                    background-color:red;
                }
                .repoName{
                    font-size:18px;
                    font-weight:bold;
                }
                .username{
                    color:#969696;
                }
            `}</style>
        </div>
    )
}


export default Create