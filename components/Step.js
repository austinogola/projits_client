

const Step=()=>{
    return(
        <div className="Step">
            <p className="title">Upload Github Repository</p>
            <p className="expl">
                Head over to GitHub and create a new public repository named username.github.io, 
                where username is your username (or organization name) on GitHub.
            </p>
            
            <style jsx>
                {`
                    .Step{
                        border:#DDDDDD 1px solid;
                        padding-top:3px;
                        padding-left:5px;
                        padding-right:5px;
                        
                        /* font-family:'Roboto', sans-serif; */
                    }
                    .title{
                        font-size:1.5em;
                        text-align:center;
                    }
                    .expl{
                        font-size:0.8em;
                    }
                `}
            </style>
        </div>
    )
}


export default Step