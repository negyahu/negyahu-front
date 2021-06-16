import React from 'react';
import { Route } from 'react-router-dom';
import Category from './Category';
import AgencyList from './AgencyList';

import '../../scss/admin/Landing.scss';


function Landing() {
    return (
        <div className="adminContainer">
            <Category />
            <Route path="/admin/agency" component={AgencyList}/>
        </div>
    );
}

export default Landing;