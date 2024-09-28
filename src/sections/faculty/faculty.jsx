import React from 'react';
import Style from './style.module.scss';
import UiFacultyItem from '../../components/faculty/faculty';
import Griffindor from '../../images/faculties/Gryffindor.webp';
import Hufflepuff from '../../images/faculties/Hufflepuff.webp';
import Ravenclaw from '../../images/faculties/Ravenclaw.webp';
import Slytherin from '../../images/faculties/Slytherin.webp';

const UiFaculty = () => {
    let GSubjects = ["Лингвистика","Филология","Философия"]
    let KSubjects = ["Прикладная математика","Физика","Астрономия"]
    let SSubjects = ["Социология","Экономика","Менеджмент"]
    let PSubjects = ["Когнитивная нейробиология","Химия","Биоинформатика (базовый уровень)"]
    return (
        <section className={Style.section} id='faculties'>
            <div className={Style.content}>
                <div className={Style.title}> 
                    <h1>Наши факультеты</h1>
                    <p>И их программы</p>
                </div>
                <div className={Style.items}>
                    <UiFacultyItem
                        image={Griffindor}
                        name="Гриффиндор"
                        description="(гуманитарное направление)"
                        subjects={GSubjects}
                        color="#CC2026"
                    />
                    <UiFacultyItem
                        image={Ravenclaw}
                        name="Когтевран"
                        description="(физико-техническое направление)"
                        subjects={KSubjects}
                        color="#06658C"
                    />
                    <UiFacultyItem
                        image={Slytherin}
                        name="Слизерин"
                        description="(социально-экономическое направление)"
                        subjects={SSubjects}
                        color="#239023"
                    />
                    <UiFacultyItem
                        image={Hufflepuff}
                        name="Пуффендуй"
                        description="(химико-биологическое направление)"
                        subjects={PSubjects}
                        color="#E1B427"
                    />

                </div>
                <div className={Style.post}>
                    <p>*В конце курса факультет, набравший больше всего баллов получает набор самого крутого мерча от Вышки</p>
                </div>
            </div>
        </section>
    );
};

export default UiFaculty;