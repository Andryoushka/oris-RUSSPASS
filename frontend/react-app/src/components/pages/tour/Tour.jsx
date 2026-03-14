import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
// import { tours_data } from '../../../assets/data/tours-data.js';
import GrayActionButton from '../../../ui/GrayActionButton';
import YellowButton from '../../../ui/YellowButton';
import './Tour.css'

import { useTours } from '../../../../src/context/TourContext.jsx'
import TourProgram from '../../tour-program/TourProgram.jsx';
import TourGallery from '../../tour-gallery/TourGallery.jsx';


function Tour(){

    const [searchParams] = useSearchParams();  // ← setSearchParams не нужен
    const { tours, loading } = useTours();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        // Если tours ещё не загрузились — выходим
        if (!tours || loading) return;

        const idParam = searchParams.get("id");
        
        // Преобразуем id в число, если tours — массив
        // Или оставляем строкой, если tours — объект
        const id = Number(idParam);
        
        const foundTour = tours[id];
        setTour(foundTour || null);
        
    }, [searchParams, tours, loading]);  // ← стабильные зависимости

    // Показываем заглушку пока грузимся или тур не найден
    if (loading) return <div>Загрузка...</div>;
    if (!tour) return <div className="tour-not-found">Тур не найден</div>;

    return(
        <div className='tour-page'>

            <div className='tour-header'>
                <div className='activity'>
                    <div className='title'>
                        {tour.name}
                    </div>
                    <div className='actions'>
                        <GrayActionButton />
                        <GrayActionButton />
                        <YellowButton text="click"/>
                    </div>
                </div>
                <div className='details'>
                    <img src="/src/assets/svg/tour.svg" alt="" />
                    foreache features
                </div>
            </div>

            <TourGallery gallery={tour.gallery}/>

            <div className='tour-description'>
                {tour.description}
            </div>

            <TourProgram tour_program={tour.tour_program}/>
            
        </div>
    );
}

export default Tour;