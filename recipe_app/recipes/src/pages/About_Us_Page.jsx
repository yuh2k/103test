import React from 'react';
import ProfileImageRight from '../components/ProfileComponentRight'; 
import ProfileImageLeft from '../components/ProfileComponentLeft'; 
import Long_Img from '../images/Long_Img.jpeg';
import Jiahao_Img from '../images/Jiahao_Img.jpeg';
import Facu_Img from '../images/Facu_Img.jpeg';
import Ethan_Img from '../images/Ethan_Img.jpeg';

function AboutUs() {
    const profiles = [
        { 
            id: 1, 
            title: 'Long', 
            link: 'https://www.linkedin.com/in/nguyenv119/', 
            image: Long_Img,
            description: 'A hard worker who loves learning and teaching. Also loves sushi!'
        },
        { 
            id: 2, 
            title: 'Jiahao', 
            link: 'https://www.linkedin.com/in/jiahaoli0465/', 
            image: Jiahao_Img,
            description: '"Peanut Butter and Jelly Sandwich" when asked to describe himself...'
        },
        { 
            id: 3, 
            title: 'Facundo', 
            link: 'https://www.linkedin.com/in/facundo-roitman/', 
            image: Facu_Img,
            description: 'Gym god and Data Structures and Algos enthusiast!'
        },
        { 
            id: 4, 
            title: 'Ethan', 
            link: 'https://www.linkedin.com/in/ethan-kondev-ab7b58203/', 
            image: Ethan_Img,
            description: 'A guy with the hair of a God on his head -- was robbed of 1st place in IQuHack...'
        }
    ];

    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1 className='m-3'>About Us</h1>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <ProfileImageRight imgurl={profiles[0].image} name={profiles[0].title} description={profiles[0].description} link={profiles[0].link}/>
                <ProfileImageRight imgurl={profiles[1].image} name={profiles[1].title} description={profiles[1].description} link={profiles[1].link}/>
                <ProfileImageRight imgurl={profiles[2].image} name={profiles[2].title} description={profiles[2].description} link={profiles[2].link}/>
                <ProfileImageRight imgurl={profiles[3].image} name={profiles[3].title} description={profiles[3].description} link={profiles[3].link}/>
            </div>
            
        </div>
    );
}

export default AboutUs;
