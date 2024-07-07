import React from 'react';

const Footer = ({items}) =>{ 
    return(
        <div className='footerCard'>
            {(items.length !== 0) ? <p>Remaining Task  {items.length}</p> : <p>All task Completed</p>}
            
        </div>
    )
}

export default Footer