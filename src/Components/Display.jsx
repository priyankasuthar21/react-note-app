import Note from "./Note";

function  Display  ( {items, event} ) {
    let noteBoxes;
    if(items.length > 0){
         noteBoxes = items.map(
            (d, i) =>{
                return <Note key = {i} index ={i} remove = {()=> event(i)}/>
            }
        )
    } else{
        noteBoxes = <h1 className="text-3xl mx-auto ">Click on add notes</h1>
    }
   

return(
    <div className=" flex p-5 gap-4 flex-wrap">
        {noteBoxes}
    </div>
)
}

export default Display;