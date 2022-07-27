

const Settings=()=>{
    return(
        <div className="Settings">
            <div className="settingsWrapper">
                <h3>Settings</h3>
                <div className="card">
                    <p>Welcome back, <span>Johhny</span></p>
                </div>
            </div>

            <style jsx>{`
                .card{
                    height:240px;
                    width:80%;
                    border:#E8EBED solid 1px;
                    border-radius:5px;
                    padding:10px;
                }
                .card span{
                    font-weight:bold;
                }
            `}</style>
        </div>
    )
}


export default Settings