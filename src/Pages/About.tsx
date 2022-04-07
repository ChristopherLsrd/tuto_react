import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import { UserContext } from '../Components/UserContext';

const About = () => {
    const [user] = useContext(UserContext);
    return (
        <div>
            <Logo />

            <Navigation />
            <h1>About</h1>
            <p>about</p>
            <p>{JSON.stringify(user, null, 2)}</p>
        </div>
    );
};

export default About;