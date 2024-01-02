

function Card(props) {
  
  const { title, handle, theme, image, alt} = props;
  


  return (
    
    
    <div>
      <img src={image} alt={alt} />
     
      <div>Title is: {title}</div>     
      
      <div>Handle is: {handle}</div>
      
      <div>{theme}</div>

    </div>
  );
}



export default Card;