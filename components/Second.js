import {DiGithubBadge} from 'react-icons/di'
import Step from './Step';

const Second=()=>{
  return (
    <div className='Second'>
      <div className='secondTitle'>
        <div className='title'>
          <p>From Source to Live.In 3 Steps</p>
        </div>
      </div>
      <div className="secondWrapper">
        <div>
          <div className="Logo">
            <Step/>
          </div>
        </div>
        
        <div>
          <div className="Logo">
            <Step/>
          </div>
        </div>

        <div>
          <div className="Logo">
            <Step/>
          </div>
        </div>

      </div>

      <style jsx>{`
        .secondTitle{
          display:flex;
          justify-content:center;
        }
        .title{
          text-align:center;
          font-family:'Roboto', sans-serif;
          font-size:2.5em;
          font-weight:lighter;
          letter-spacing:3px;
        }
        .secondWrapper{
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          grid-gap:10px;
          height:300px;
          padding-left:50px;
          padding-right:50px;
        }
        .secondWrapper>div{
          
        }

        `}</style>
    </div>
  );
}


export default Second
