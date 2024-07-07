import React from 'react';
import EachTask from './EachTask';

const ItemList = ({items , handleCheckboxChange , handleDelete}) =>{
    return (
        <div>
             <ul className="ContentComponentList">
                {items.map(item => (
                    <EachTask 
                        item = {item}
                        key={item.id} 
                        handleCheckboxChange = {handleCheckboxChange} 
                        handleDelete = {handleDelete} 

                    />
                    ))}
            </ul>
             
        </div>
    );
}

export default ItemList