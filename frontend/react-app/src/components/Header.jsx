import './Header.css'
import IconButton from '../ui/IconButton.jsx'

function Header()
{
    return(
        <div>
            <div className='header-body'>
                <div className='header-items'>
                    <div className='header-leftSection'>
                        <IconButton img="/src/assets/svg/russpass.svg" height={32}/>

                        {/* разделитель */}
                        <div className='header-separator'/>
                        
                        <button className='button-doubleElement'>
                            <img src="/src/assets/svg/service.svg" alt="" />
                            <img src="/src/assets/svg/other.svg" alt="" />
                        </button>

                        <button className='button-doubleElement'>
                            <img src="/src/assets/svg/menu.svg" alt="" />
                            <span>Меню</span>
                        </button>
                            
                        <button className='button-doubleElement'>
                            <img src="/src/assets/svg/bonus.svg" alt="" />
                            <span>Бонус</span>
                        </button>
                        
                    </div>
                    <div className='header-rightSection'>
                        <IconButton img="/src/assets/svg/search.svg"/>
                        <IconButton img="/src/assets/svg/favorites.svg"/>
                        <IconButton img="/src/assets/svg/profile.svg"/>
                        <IconButton img="/src/assets/svg/language.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header