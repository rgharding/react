import './ImageList.css'
import ImageShow from "./ImageShow";

function ImageList(props) {

  const { images } = props;

  let renderedImages = images.map((image) => {
    return  <ImageShow key={image.id} image={image} />
  });


  return (
    <div className='image-list'>
      {renderedImages}
    </div>
  );
}

export default ImageList;