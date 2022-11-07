import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

const DefaultPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default DefaultPage;