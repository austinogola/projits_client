


const Index=()=>{
    return(
        <div className="Index">
            <div className="first border">
                <div className="intro">
                    <h1>ProJits.com</h1>
                    <h3>Create Websites for Your Projects</h3>
                    <h4>You get 5 sites per account.Completely free</h4>
                    <div className="buttons">
                        <button className="register"><a href="/register">Get Started</a></button>
                    </div>

                </div>
            </div>


            <style jsx>
                {`
                     .first{
                       padding:50px;
                       background-color:#282C34;
                       color:white;
                       height:480px;
                    }
                   .intro{
                        text-align:center;
                    }
                    .intro h1{
                        font-size:2.4em;
                        color:#61DAFB;
                        letter-spacing:5px;
                    }
                    .intro h3{
                        font-size:1.8em;
                        letter-spacing:2px;
                    }
                    .intro h4{
                        font-size:1.2em;
                        letter-spacing:3px;
                    }
                    .buttons{
                        display:flex;
                        justify-content:center;
                    }
                    button{
                        border:none;
                        outline:none;
                        border-radius:5px;
                        height:50px;
                        width:20%;
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

                    @media only screen and (max-width: 800px) {
                        .first{
                            
                        }
                    }


                `}
            </style>
        </div>
    )
}



export default Index
