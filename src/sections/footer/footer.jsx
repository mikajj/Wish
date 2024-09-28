import React from 'react';
import Style from './style.module.scss';

const UiFooter = () => {
    return (
        <footer id='contacts'>
            <div className={Style.content}>
                <div className={Style.title}>
                    <h1>Контакты</h1>
                </div>
                <div className={Style.info}>
                    <p>+7 (999) 999-99-99, +7 (999) 999-99-99</p>
                </div>
            </div>
        </footer>
    );
};

export default UiFooter;