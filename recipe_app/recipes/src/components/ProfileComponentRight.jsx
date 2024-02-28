import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ProfileImageRight = ({ imgurl, name, description, link }) => {
    return (
        <div className="d-flex justify-content-between align-items-center " style={{ width: '100%', height: '50%'}}>
            <div className="p-2" style = {{margin: '5%'}}>
                <h3>{name}</h3>
                <p>{description} </p>
                <Button as={Link} to={link} variant="primary">Connect with Us</Button>

            </div>
            <div className="d-flex justify-content-center">
                <img 
                    src={imgurl} 
                    alt="Profile"
                    className="rounded-circle" 
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                />
            </div>
        </div>
    );
};

export default ProfileImageRight; 
