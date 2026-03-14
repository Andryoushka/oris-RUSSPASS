function GrayActionButton(){
    return(
        <button style={
            {
                backgroundColor: '#f5f5f5',
                minWidth: '48px',
                height: '48px',
                padding: '12px',
                borderRadius: '12px'
            }
        }>
            <div>
                <img src="/src/assets/svg/favorites.svg" alt="" />
            </div>
        </button>
    );
}

export default GrayActionButton;