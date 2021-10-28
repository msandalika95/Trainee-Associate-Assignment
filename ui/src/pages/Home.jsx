import React from 'react';

import { useHistory } from 'react-router-dom';




const Home = (props) => {
    const history = useHistory();

    return (
        <body>
            <div>
            <h1>Welcome!!</h1>
            </div>
        </body>
    ) 
}

export default Home;