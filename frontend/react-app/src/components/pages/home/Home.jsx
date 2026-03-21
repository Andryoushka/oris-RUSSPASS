import './Home.css';
// import { TOUR_FEATURES, HOTEL_STARS, DURATIONS } from '../../../enum/tour-enums.js';
import YellowButton from '../../../ui/YellowButton.jsx';
import TourCard from '../../tour-card/TourCard.jsx';
import { useSearchParams } from 'react-router';
import { useEffect, useState, useMemo } from 'react';
// import { useTours } from '../../../../src/context/TourContext.jsx'
import FilterSection from '../../filter-section/FilterSection.jsx';
import CheckboxFilter from '../../filter-section/checkbox-filter/CheckboxFilter.jsx';

import filter_tags from '../../../filters/filter-tags.json'
import filter_config from '../../../filters/filter-config.json'

// http://localhost:5296/tours/all
// http://localhost:5296/tours/{id}
// http://localhost:5296/tours/filtered

function Home(){
    // const { tours, loading } = useTours();

    const [loadedTours, setLoadedTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Создаём асинхронную функцию внутри useEffect
        const fetchTours = async () => {
        try {
            const url = `http://localhost:5296/tours/all`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }
            
            const data = await response.json();
            setLoadedTours(data);
            console.log(data)
        } catch (err) {
            setError(err.message);
            console.error('Ошибка при загрузке туров:', err);
        } finally {
            setIsLoading(false);
        }
        };

        fetchTours();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    // 🔹 Обработчик ввода
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const [tourFilters, setTourFilters] = useState(
        () => 
            {
                const params = {
                    duration : [],
                    stars : [],
                    features : [],
                    price : {
                        min: 0,
                        max: 350000
                    }
                }

                return params;
            }
    );

    const buildQueryParams = (filters) => {
        const params = new URLSearchParams();
        
        // Обрабатываем массивы: duration, stars, features
        ['duration', 'stars', 'features'].forEach(key => {
            if (filters[key] && filters[key].length > 0) {
                // Конкатенируем значения через запятую
                params.append(key, filters[key].join(','));
            }
        });
        
        // // Обрабатываем объект price
        // if (filters.price) {
        //     if (filters.price.min !== undefined && filters.price.min !== 0) {
        //         params.append('price_min', filters.price.min);
        //     }
        //     if (filters.price.max !== undefined && filters.price.max !== 350000) {
        //         params.append('price_max', filters.price.max);
        //     }
        // }
        
        // // Добавляем поисковый запрос, если есть
        // if (searchQuery?.trim()) {
        //     params.append('search', searchQuery.trim());
        // }
        
        return params.toString();
    };

    const handleFiltersChange = (option, value) => (e) => {
        const { checked } = e.target;
        
        setTourFilters(prev => {
            const currentValues = prev[option] || [];
            
            if (checked) {
                // 🔹 Добавляем только если значения ещё нет в массиве
                if (currentValues.includes(value)) {
                    return prev; // Ничего не меняем, если уже есть
                }
                return {
                    ...prev,
                    [option]: [...currentValues, value]
                };
            } else {
                // Убираем значение из массива
                return {
                    ...prev,
                    [option]: currentValues.filter(item => item !== value)
                };
            }
        });
    };

    // Обработчик применения фильтров
    const applyFilters = async () => {
        try {
            const queryString = buildQueryParams(tourFilters);
            const url = `http://localhost:5296/tours/filtered?${queryString}`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }
            
            const data = await response.json();

            setLoadedTours(data);
            
        } catch (error) {
            console.error('Ошибка при загрузке туров:', error);
        }
    };

    return(
        <div className='home-body'>

            <div className='catalog-path'>
                <ul className='catalog-list'>
                    <li className='catalog-item'>
                        <a href="">Главная</a>
                    </li>
                    <li className='catalog-item'>
                        <a href="">Туры</a>
                    </li>
                </ul>
            </div>

            <div className='catalog-title'>
                Туры
            </div>

            <div className='search-body'>
                <div className='search-section'>

                    <input className='searchInput'
                        type="text" 
                        placeholder='Найти тур или город...'
                        value={searchQuery}           // ← контролируемый инпут
                        onChange={handleSearchChange}  // ← обновление стейта
                    />

                    <div className='date-picker'>
                        <img src="/src/assets/svg/calendar.svg" alt="" />
                        <span>Дата</span>
                    </div>

                    <YellowButton text={"Найти"}/>

                </div>
            </div>

            <div className='tour-wrapper'>
                <div className='tour-filter'>
                    <div className='filter-title'>
                        Фильтры
                    </div>

                    {
                        filter_config.map((item) => {
                            if (item.input_type === 'checkbox')
                            {
                                return (
                                    <FilterSection
                                        key={item.section_id}
                                        title={item.title}
                                        icon={item.icon}
                                    >
                                        {
                                            item.options.map((option) =>{
                                                const cf = filter_tags[option];

                                                // Пропускаем, если конфиг не найден или категория не массив
                                                if (!cf || !Array.isArray(tourFilters[cf.tour_prop])) {
                                                    return null;
                                                }
                                                
                                                return (
                                                <CheckboxFilter
                                                    key={cf.name}
                                                    name={cf.name}
                                                    label={cf.label}
                                                    checked={tourFilters[cf.tour_prop].includes(cf.name)}
                                                    onChange={handleFiltersChange(cf.tour_prop, cf.name)}
                                                />
                                                )
                                            }
                                        )
                                        }
                                    </FilterSection>
                                )
                            }
                        })
                    }

                    <YellowButton 
                        text="Применить фильтры" 
                        action={applyFilters} 
                    />

                </div>

                <div className='tour-events'>

                    <div className='tour-category'>
                        <img src="/src/assets/svg/category.svg" alt="" />
                        <span>Популярные</span>
                        <img src="/src/assets/svg/other.svg" alt="" />
                    </div>

                    <div className='tour-grid'>
                        {
                            isLoading ? (
                            <div>Загрузка туров...</div>
                        ) : loadedTours.length > 0 ? (
                            loadedTours.map((item, index) => (
                                <TourCard 
                                    data={item} 
                                    index={index}
                                    key={item.id || index}
                                />
                            ))
                        ) : (
                            <div className='no-results'>
                                😕 Туры не найдены по запросу "{searchQuery}"
                            </div>
                        )
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home