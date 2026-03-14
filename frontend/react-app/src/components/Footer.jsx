import './Footer.css'

function Footer()
{
    return(
        <footer>
            <div className='info-body'>
                <div className='info-help'>

                    <div className='info-section'>
                        <span className='section-name'>Поддержка</span>
                        <a href="">Оставить обращение</a>
                        <span className='section-name'>Контакты</span>
                        <a href="">support@russpass.ru</a>
                        <a href="">8 (495) 122-01-11</a>
                        <a href="">8 (800) 300-61-22 <br />(бесплатно по России)</a>
                    </div>

                    <div className='info-section'>
                        <span className='section-name'>Пользователям</span>
                        <a href="">О проекте</a>
                        <a href="">Частые вопросы</a>
                        <a href="">Войти в профиль</a>
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Пользовательское соглашение</a>
                    </div>

                    <div className='info-section'>
                        <span className='section-name'>Партнерам</span>
                        <a href="">Стать партнером</a>
                        <a href="">Войти в личный кабинет</a>
                        <a href="">Инструкции</a>
                        <a href="">Оферта</a>
                    </div>

                    <div className='info-section'>
                        <span className='section-name'>Регионам</span>
                        <a href="">Взаимодействие с РОИВ</a>
                    </div>

                </div>

                <div className='info-social'>
                    <img src="/src/assets/svg/vk.svg" alt="" />
                    <img src="/src/assets/svg/tg.svg" alt="" />
                    <img src="/src/assets/svg/ok.svg" alt="" />
                </div>


                <div className='copyright'>
                    <img src="/src/assets/svg/copyright-tour.svg" alt="" />

                    <div className='copyright-sections'>
                        <div className='section-separate'>
                            <span className='section-name'>Контакты пресс-службы</span>
                            <a href="">8 (495) 957-96-77, доб. 1042</a>
                            <a href="">presstourism@mos.ru</a>
                        </div>

                        <div className='section-separate'>
                            <span className='section-name'>Скачать мобильное приложение</span>
                            <img src="/src/assets/svg/app-store.svg" alt="" />
                            <img src="/src/assets/svg/google-play.svg" alt="" />
                            <img src="/src/assets/svg/rustore.svg" alt="" />
                            <img src="/src/assets/svg/nash-store.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer