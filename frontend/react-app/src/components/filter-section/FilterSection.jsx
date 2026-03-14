import "./FilterSection.css";
import {useState} from 'react';

function FilterSection({ title, icon, children, defaultOpen = true }) 
{
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className='filter-section'>
            <div 
                className='fs-title' 
                onClick={() => setIsOpen(!isOpen)}
            >
                {icon && <img src={icon} alt="" />}
                <span>{title}</span>
                <img 
                    src="/src/assets/svg/other.svg" 
                    alt="" 
                    className={`arrow ${isOpen ? 'open' : ''}`}
                />
            </div>
            
            {isOpen && (
                <div className='fs-options'>
                    {children}
                </div>
            )}
        </div>
    );
}

export default FilterSection;