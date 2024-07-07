import React from "react";
import './SearchTask.css'

const SearchTask = ({search , setSearch}) =>{
  return (
    <div className="searchCard">
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
             type = "search" 
             placeholder="Search Task" 
             value={search} 
             onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchTask;