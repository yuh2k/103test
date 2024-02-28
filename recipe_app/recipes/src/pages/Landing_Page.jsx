import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from '../images/food.jpeg';
import RecipePage from '../pages/Recipe_Page';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Landing_Page.css'; 

function LandingPage() {
  return (
    <>
        <div className="container-fluid g-0">
            <img 
                style={{ maxHeight: "600px", objectFit: "cover" }} 
                className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7" 
                src= {hero} 
                alt="Photo by Irene Dávila"
            />
        </div>

        <div className="container p-5 bg-body mt-md-n6 position-relative rounded" style={{ width: '85vw', transform: 'translateY(-40px)', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Row>
                <Col md={4} className="text-center align-self-center">
                    <div className="lc-block border-lg-end border-2">
                        <p className="display-4 text-secondary">WHY US?</p>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="lc-block">
                        {/* <p className="display-4">Think different and create a wonderful dining experience from our recipes.</p> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={9} offset={{ md: 1 }}>
                    <div className="lc-block mt-5" style={{marginLeft: '70px'}}>
                        <p className="lead text-secondary"> Explore our best recipes expertly designed by your amazing team</p>
                        <p className="lead text-secondary"> No more ordering deliveries </p>

                        <Button id="reciBtn" as={Link} to={'/recipe'}>Recipe</Button>

                    </div>
                </Col>
            </Row>
        </div>

        
    </>
  );
}

export default LandingPage;
