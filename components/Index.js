


const Index=()=>{
    return(
        <div className="Index container">
            <div className="first border">
                <div className="intro">
                    <h1>ProJits.com</h1>
                    <h3>Generate a site for your project</h3>
                    <h4>You get five subdomains per account.Completely free</h4>
                    <div className="buttons">
                        <button className="register"><a href="/register">Get Started</a></button>
                        <button><a href="/tutorials">Tutorials</a></button>
                    </div>

                </div>
            </div>


            <style jsx>
                {`
                     .first{
                       display:grid;
                       grid-template-columns:50% 50%;
                       padding:50px; 
                       background-color:#282C34;
                       color:white;
                    }
                   .intro{
                        
                    }
                    .intro h1{
                        font-size:3em;
                        color:#61DAFB;
                        letter-spacing:5px;
                    }
                    .intro h3{
                        font-size:2em;
                    }
                    .intro h4{
                        font-size:1.5em;
                    }
                    .buttons{
                        display:flex;
                        justify-content:flex-start;
                    }
                    button{
                        border:none;
                        outline:none;
                        border-radius:5px;
                        height:50px;
                        width:30%;
                        margin:10px;
                        cursor:pointer;
                    }
                    .register{
                        color:#61DAFB;
                        border:1px #61DAFB solid;
                        background:#282C34;
                        transition:.3s;
                    }
                    .register:hover{
                        background:#61DAFB;
                        color:#282C34;
                    }
                    button>a{
                        text-decoration:none
                        font-size:18px;
                        font-weight:bold;
                    }

                    
                `}
            </style>
        </div>
    )
}



export default Index