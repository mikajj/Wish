import React, { useEffect,useState } from 'react';
import Style from './style.module.scss'
import Logo from '../../images/logo.svg'


const UiHeader = () => {
    const [isTop, setIsTop] = React.useState(true);

    const [menu,setMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);
    return (
        <header className={`${Style.header} ${isTop ? Style.active : ''}`} style={(menu)? {height: "calc(100vh - 80px)",flexDirection: 'column',padding: '0 12%',justifyContent: 'flex-start'} : {}}>
            <div className={Style.content} style={(menu)? {alignItems: 'flex-start',height: "auto"} : {}}>
                <div className={`${Style.logo} ${isTop ? Style.active : ''}`}>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className={Style.mobile} onClick={() => setMenu(!menu)}>
                    <a className={Style.icon} >
                        <div className={[Style.line, (menu)? Style.menuActive : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.menuActive : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.menuActive : ""].join(" ")}></div>
                    </a>
                </div>
                <ul className={Style.menu}>
                    <a href="#info">Инфо</a>
                    <a href="#faculties">Факультеты</a>
                    <a href="#raiting">О рейтинге</a>
                    <a href="#price">Стоимость</a>
                    <a href="#contacts">Контакты</a>
                </ul>
            </div>
            
            <ul className={Style.mobileMenu} style={(menu)? {display: 'flex'} : {}}>
                    <a href="#info" >Инфо</a>
                    <a href="#faculties" >Факультеты</a>
                    <a href="#raiting" >О рейтинге</a>
                    <a href="#price">Стоимость</a>
                    <a href="#contacts" >Контакты</a>
                </ul>
        </header>
    );
};

export default UiHeader;