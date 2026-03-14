import "./TourGallery.css"

function TourGallery({gallery})
{
    return(
        <div className='tour-gallery'>
            {
                gallery.map((picture) => 
                (
                    <div className='image-item'>
                        <img src={picture} alt="изображение тура" />
                    </div>
                ))
            }
        </div>
    );
}

export default TourGallery;