import React, { useState } from 'react';
import Style from './style.module.scss';

const UiPrices = () => {
    const [isBlured, setIsBlured] = useState(true);
    return (
        <section className={Style.section} id='price'>
            <div className={Style.content}>
                <div className={Style.title}>
                    <h1>Стоимость обучения</h1>
                </div>
                <div className={`${Style.price} ${isBlured ? Style.blurred : ''}`} >
                    <h1>БЕСПЛАТНО</h1>
                    <br />
                    <p>
                        ТыБОСс — первый абсолютно бесплатный проект для школьников по всей России
                    </p>
                </div>
                <div className={Style.spell}>
                    {(isBlured) ? 
                        <>
                        Похоже тут использованны невидимые чернила, давай попробуем развеять магию?
                        <button onClick={() => setIsBlured(false)}>Апарекиум</button>
                        </>
                        :
                        <>Шалость удалась!</>
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default UiPrices;