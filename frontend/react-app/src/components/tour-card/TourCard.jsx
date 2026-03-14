import { useNavigate } from 'react-router-dom'; // ✅ импортируем хук
import YellowButton from '../../ui/YellowButton.jsx';
import './TourCard.css'

function TourCard({ data, index })
{
    const navigate = useNavigate(); // ✅ хук для навигации
    const handleBookClick = () => {
            // ✅ Переход на страницу тура по индексу
            navigate(`/tours?id=${index}`);
        };
    let tour_features = data.features.join(", ");

    return(
        <div className='tour-card'>
            <div className='card-image'>
                <img className='tour-image'
                    src={data.card_image} alt="" />
            </div>
            <div className='card-content'>
                <div className='card-description'>
                    <div className='card-name'>
                        {data.name}
                    </div>
                    <div className='card-info'>
                        <div>
                            <img src="/src/assets/svg/location.svg" alt="" />
                            <span>{data.location}</span>
                        </div>
                        <div>
                            <img src="/src/assets/svg/night.svg" alt="" />
                            <span>{data.duration}</span>
                        </div>
                        <div>
                            <img src="/src/assets/svg/tour.svg" alt="" />
                            <span>{data.type}</span>
                        </div>
                        <div>
                            <img src="/src/assets/svg/theme.svg" alt="" />
                            <span>{tour_features}</span>
                        </div>
                    </div>
                </div>
                <div className='card-button'>
                    <YellowButton 
                        text={`от ${data.price} р`}
                        action={handleBookClick}/>
                </div>
            </div>
        </div>
    );
}

export default TourCard