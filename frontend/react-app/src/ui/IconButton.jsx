function IconButton({img, height})
{
    return(
        <button className='header-button'>
            <img src={img} alt="" height={height}/>
        </button>
    );
}

export default IconButton