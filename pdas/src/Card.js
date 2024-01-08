

function Card(props) {
  
  const { title, handle, theme, image, alt} = props;
  


  return (
    
    
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt={alt} />
        </figure>
      </div>
      
      <div className="media-content">
        <p className='title is-4'>
          Title is: {title}
        </p>

        <p className="subtitle is-6">
          Handle is: {handle}
        </p>
      </div>
      <div className='content'>
        {theme}
      </div>
    </div>
  );
}



export default Card;