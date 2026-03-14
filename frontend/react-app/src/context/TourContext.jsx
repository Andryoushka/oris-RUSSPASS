import { createContext, useContext, useState, useEffect } from 'react';

// 1. Создаем контекст
const TourContext = createContext();

// 2. Создаем провайдер (поставщик данных)
export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Загружаем данные один раз при старте приложения
    fetch('/tours-data.json') 
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => console.error("Ошибка загрузки туров:", error));
  }, []);

  return (
    // 3. Передаем данные всем дочерним компонентам
    <TourContext.Provider value={{ tours, loading }}>
      {children}
    </TourContext.Provider>
  );
};

// 4. Создаем хук для удобного использования
export const useTours = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTours должен использоваться внутри TourProvider");
  }
  return context;
};