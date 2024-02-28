import React from 'react';
import Card from 'react-bootstrap/Card';
import Team_Img from '../images/Team_Img.jpeg';
import Facu_Img2 from '../images/Facu_Img2.jpeg';
import './Our_Journey_Page.css'; 

const Our_Journey_Page = () => {
    const journeys = [
        { 
            id: 1, 
            title: 'Team', 
            link: 'https://www.linkedin.com/in/nguyenv119/', 
            image: Team_Img,
            description: 'We started in the cold winter storm one January afternoon. The winds blowing across our face that led us to this fate of Programming prowess. We quickly bonded through our similar traits on success, leadership, and of course, charisma. Working together was swift and easy, the seamless workflow made possible through the finger-game, sarcastic jokes and silly pictures. Together, we will succeed.'
        },
        { 
            id: 2, 
            title: 'Facundo Conversing', 
            link: 'https://www.linkedin.com/in/jiahaoli0465/', 
            image: Facu_Img2,
            description: 'The Code Crusaders, a quartet of tenacious programmers, epitomize resilience and teamwork in the face of coding challenges. Each member brings a unique skill set: Long, the algorithm wizard; Jiahao, with a knack for innovative solutions; Facundo, the debugging guru; and Ethan, who excels in user experience design. Together, they tackle complex projects, turning daunting code into manageable tasks. Their strength lies in their ability to collaborate efficiently, brainstorming and problem-solving with a rare synergy. This unity not only enables them to overcome obstacles but also to produce software solutions that are both functional and user-friendly'
        }
    ];

    return (
        <div className="our-journey-page">
            <h1 className='journey-title'>Our Journey</h1>
            {journeys.map((journey) => (
                <Card key={journey.id} className="journey-card">
                    <Card.Img variant="top" src={journey.image} className="journey-image" />
                    <Card.Body className="journey-text">
                        <Card.Title>{journey.title}</Card.Title>
                        <Card.Text>
                            {journey.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );   
};

export default Our_Journey_Page;