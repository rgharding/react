import siriPic from './images/siri.png';

function Card(props) {

  const { name, handle, theme, pic} = props;

  console.log(pic);
  return (
    
    <div>
      <div>
        <img src={pic} />
      </div>
      {name}
   <div>
        {handle}
      </div>
      
      <div>
        {theme}
      </div>

    </div>
  );
}



export default Card;