import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Long_Img from '../images/Long_Img.jpeg';
import Jiahao_Img from '../images/Jiahao_Img.jpeg';
import Facu_Img from '../images/Facu_Img.jpeg';
import Ethan_Img from '../images/Ethan_Img.jpeg';

const Our_Journey_Page = () => {
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
            <h1 className='m-3'>All Recipes</h1>
            {profiles.map((profile) => (
                <Card key={profile.id} style={{ width: '50rem' }} className="flex-row m-4">
                    <Card.Img variant="left" src={profile.image} style={{ width: '15rem', height: '12rem' }} />
                    <Card.Body>
                        <Card.Title>{profile.title}</Card.Title>
                        <Card.Text>
                            {profile.description}
                        </Card.Text>
                        <Button as={Link} to={profile.link} variant="primary">Connect with Us</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Our_Journey_Page;