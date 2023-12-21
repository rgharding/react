

function Card(props) {

  const { title, handle, theme, pic, color } = props;

 
  return (
    
    <div >
      <div >
        <img src={pic} />
      </div>
      {title}
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