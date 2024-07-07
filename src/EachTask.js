import React from 'react';

const EachTask =({item ,handleCheckboxChange  , handleDelete}) =>{
    return(
        <li>
                        <input 
                        className="inputElement" 
                         type = "checkbox"  
                         onChange={() => handleCheckboxChange(item.id)}
                         checked={item.checked} 
                        />
                        <label style={(item.checked) ? {textDecoration:'line-through',color:'black'}:null}  onDoubleClick={() => handleCheckboxChange(item.id) } 
                        className="labelElement" htmlFor={"item" + item.id}>{item.name}</label>
                        <button className="buttonElement"
                         onClick={() => handleDelete(item.id)}
                        >Delete</button>
                    </li>
    )
}

export default EachTask