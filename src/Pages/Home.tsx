import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import Countries from '../Components/Countries';
import { UserContext } from '../Components/UserContext';
import { logicalExpression } from '@babel/types';
import { login } from './utils/login';
import { Button } from 'antd';
import "antd/dist/antd.css";


const Home = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>

            <Logo />
            <Navigation />
            <Countries />
            <p>{JSON.stringify(user, null, 2)}</p>
            {user ? (
                <Button type="primary" onClick={() => setUser(null)}>logout</Button>
            )
                : (
                    <Button type="primary" onClick={async () => {
                        const user = await login();
                        setUser(user)
                    }}>  login </Button>
                )}

        </div>
    );
};

export default Home;