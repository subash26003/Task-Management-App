import { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content'
import Footer from './Footer';
import AddTask from './AddTask';
import SearchTask from './SearchTask';

function App() {


    const [newTask,setNewTask] = useState('');
    const [search,setSearch] =useState('');
    const [items,setItems] = useState(
       JSON.parse(localStorage.getItem('todoList'))
    );  

    const addTask = (TaskName) =>{
        const newTaskId = items.length ? items[items.length - 1].id + 1 : 1;
        const newTask = {
            name : TaskName,
            id:newTaskId,
            checked: false, 
        }
        const updatedList = [...items,newTask]
        setItems(updatedList)
        localStorage.setItem('todoList',JSON.stringify(updatedList));
    }

    const handleSubmitBtn = (e) =>{
        e.preventDefault();
        if(newTask === "") alert("Enter the Task") ;
        else addTask(newTask)
        setNewTask('')
    }
    function handleCheckboxChange(id){
        const listItem = items.map((item) => 
            item.id === id ?
                {...item , checked:!item.checked} : item
            
        )
        setItems(listItem);
        localStorage.setItem('todoList',JSON.stringify(listItem));

    }
    function handleDelete(id){
        const updatedList = items.filter(item => item.id !== id);
        setItems(updatedList);
        localStorage.setItem('todoList',JSON.stringify(updatedList));
    }
     

  return (
    <div className="App">
       <Header title="To do Application"/>
       <AddTask 
       newTask = {newTask}
       setnewTask = {setNewTask}
       handleSubmitBtn = {handleSubmitBtn}/>
       <SearchTask 
       search ={search}
        setSearch = {setSearch}
       />
       <Content 
       items={search !== '' ?(items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))) : items}
       handleCheckboxChange = {handleCheckboxChange}
       handleDelete = {handleDelete}
       
       />
       <Footer items={items}/>
    </div>
  );
}

export default App;
