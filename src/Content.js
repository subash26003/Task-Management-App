
import ItemList from "./ItemList";


function Content({items  ,handleCheckboxChange  , handleDelete}){
    
    return(
        <div>
            {(items.length) ? 
                <ItemList 
                items = {items} 
                handleCheckboxChange = {handleCheckboxChange} 
                handleDelete = {handleDelete} 
                
                 />
            : <p  className="emptyList" >List is Empty</p>}

        </div>
    );
}

export default Content;