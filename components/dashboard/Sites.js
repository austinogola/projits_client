import { FiPlus } from "react-icons/fi";

const Sites=()=>{
    return(
        <div className="Sites">
            <div className="sitesWrapper">
                <h3>Your Sites</h3>
                <div className="card">
                    <div className="create">
                        {/* <FiPlus style={{color:'#282C34',fontSize:'40px'}}/><br/> */}
                        <button>Add New Site</button>
                    </div>
                    <div className="siteList">
                        <h4>Deployed Sites</h4>
                        <div className="site">
                            <div className="image">
                                {/* <img src='/images/fireshot_002.png' alt="Site Pic" /> */}
                            </div>
                            <div className="details">
                                <p>Subdomain name</p>
                                <p>Live Site</p>
                            </div>
                        </div>

                        <div className="site">
                            <div className="image">
                                {/* <img src="" alt="Site Pic" /> */}
                            </div>
                            <div className="details">
                                <p>Subdomain name</p>
                                <p>Live Site</p>
                            </div>
                        </div>

                        <div className="site">
                            <div className="image">
                                {/* <img src="" alt="Site Pic" /> */}
                            </div>
                            <div className="details">
                                <p>Subdomain name</p>
                                <p>Live Site</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="create">
                        <div></div>
                        <div className="createBox">
                            <div>
                                
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <style jsx>{`
                .card{
                    height:500px;
                    width:80%;
                    border:#E8EBED solid 1px;
                    border-radius:5px;
                    padding:10px;
                    
                }
                .card span{
                    font-weight:bold;
                }
                .siteList{
                    padding:5px;
                }
                .site{
                    border-bottom:#E8EBED 1px solid;
                    height:100px;
                    padding:5px;
                    display:grid;
                    grid-template-columns:30% 70%;
                    transition:.3s;
                    cursor:pointer;
                    border-radius:2px;
                }
                .site:hover{
                    background:#B1B2B3;
                }
                .create{
                    padding:5px;
                    display:grid;
                    grid-template-rows:repeat(4,25%)
                }
                .createBox{
                    display:flex;
                    justify-content:center;
                }
                .create{
                    display:flex;
                    height:80px;
                    justify-content:center;
                    align-items:center;
                    border-bottom:#E8EBED 1px solid;
                }
                .create button{
                    height:35px;
                    cursor:pointer;
                }
                .details{
                    padding:5px;
                }
            `}</style>
        </div>
    )
}


export default Sites