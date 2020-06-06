import React from 'react';

import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component.jsx';

const Homepage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default Homepage;