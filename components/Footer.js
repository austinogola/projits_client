
const Footer=()=>{
    return(
        <div className="Footer">
            <div className="footerWrapper">
                <div className="list">
                    <div className="projitsCC">
                        <p>&copy; 2022 Projits</p>
                    </div>
                    <a href="/contact">Contact</a>
                    <a href="/help">Help</a>
                </div>
                <div className="list list2">
                    <a href="/API">API</a>
                    <a href="/privacy">Privacy</a>
                </div>
            </div>



            <style jsx>
                {`
                    .Footer{
                        height:200px;
                        background-color:#FFFFFF;
                        display:flex;
                        justify-content:center
                    }
                    .footerWrapper{
                        width:80%;
                        border-top:#CCCCCC solid 1px;
                        display:grid;
                        grid-template-columns:1fr 1fr;
                    }
                    .list{
                        display:flex;
                        padding:10px;
                    }
                    .list>a{
                        margin:20px;
                        color:#4183C4;
                    }
                    .list2{
                        flex-direction:row-reverse;
                    }
                    .projitsCC{
                        position:relative;
                        top:5px;
                        margin-right:50px;
                    }
                `}
            </style>
        </div>
    )
}



export default Footer