import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound()
{
    return (
            <div className="content container" > 
                <img src="/images/404.svg" alt="Not Found" style={{ height:500, width:500}}/>
            </div>
    );
}

export default NotFound;