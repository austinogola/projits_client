

const Step=(props)=>{
    return(
        <div className="Step">
            <p className="title">{props.title}</p>
            <p className="expl">
                
            </p>
            
            <style jsx>
                {`
                    .Step{
                        border:#DDDDDD 1px solid;
                        padding-top:3px;
                        padding-left:5px;
                        padding-right:5px;
                        height:300px;
                        
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