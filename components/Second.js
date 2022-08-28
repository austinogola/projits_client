import {DiGithubBadge} from 'react-icons/di'
import Step from './Step';

const Second=()=>{
  return (
    <div className='Second'>
      <div className='secondTitle'>
        <div className='title'>
          <p>From Code to Live.In 3 Steps</p>
        </div>
      </div>
      <div className="secondWrapper">
        <div className='steps'>
          <div>
            <div className="Logo">
              <Step 
                title='Select Site Name'
              />
            </div>
          </div>
          
          <div>
            <div className="Logo">
              <Step title="Provide Code"/>
            </div>
          </div>

          <div>
            <div className="Logo">
              <Step title='Launch'/>
            </div>
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
          height:600px;
          padding-left:50px;
          padding-right:50px;
          display:flex;
          justify-content:center;
        }
        .secondWrapper>div{
          
        }
        .steps{
          width:80%;
          display:flex;
          justify-content:center;
        }
        .steps>div{
          
          padding:20px;
          width:33%;
        }

        `}</style>
    </div>
  );
}


export default Second
