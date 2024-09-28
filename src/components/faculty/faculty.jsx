import React from 'react';
import Style from './style.module.scss';

const UiFacultyItem = ({
    image,
    name,
    description,
    subjects,
    color
}) => {
    return (
        <div className={Style.item}>
            <img src={image} alt="Faculty image" />
            <div className={Style.info}>
                <h1 style={{color: color}}>{name}</h1>
                <p style={{color: color}}>{description}</p>
                <ul>
                    {subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UiFacultyItem;