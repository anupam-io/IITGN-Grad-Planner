import React from 'react';

function ConstraintMessage({message, value})
{
    if (value === true)
    {
    return (
        <div class="alert alert-success p-1 m-0" role="alert">
            {message}
        </div>
    );
    }
    else 
    {
        return (
            <div class="alert alert-danger p-1 m-0" role="alert">
                {message}
            </div>
        );
    }
}

export default ConstraintMessage;