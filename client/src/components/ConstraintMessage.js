import React from 'react';

function ConstraintMessage({message, value})
{
    if (value === true)
    {
    return (
        <div class="alert alert-success" role="alert">
            {message}
        </div>
    );
    }
    else 
    {
        return (
            <div class="alert alert-danger" role="alert">
                {message}
            </div>
        );
    }
}

export default ConstraintMessage;