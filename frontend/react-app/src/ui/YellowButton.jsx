function YellowButton({text, action})
{
    return(
        <button style={
            {
                backgroundColor: '#ffcf08',
                height : '48px',
                borderRadius: '12px',
                justifyContent : 'center',
                padding: '4px 16px'
            }
        }
        onClick={action}
        >
            {text}
        </button>
    );
}

export default YellowButton