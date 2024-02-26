import Display from "./Components/Display";
import {AiOutlinePlus} from "react-icons/ai";
import './App.css';
import { useState } from "react";

function App() {
 
  const [notes, setNotes] = useState([]);

  const addNote = () =>{
    setNotes(
      [
        ...notes,
        ""
      ]

    )   
  }

  const removeHandler = (index) =>{
    const newData = notes.filter(
      (d, i) =>{
        if(i===index){
          return false  // this data is not allow to go forward
        }else{
          return true // this data is  allow to go forward
        }
      }
    )
    setNotes(newData)
  }

  return (
    <div>
      <button className=" bg-slate-800 text-white flex justify-center  rounded-md items-center p-3 ml-auto mr-10 mt-10 " onClick={addNote}>
       <AiOutlinePlus /> <span className='ml-[5px]'>Add Note </span>       
      </button>

      <Display items ={notes} event = {removeHandler}/>
    </div>
  );
}

export default App;
