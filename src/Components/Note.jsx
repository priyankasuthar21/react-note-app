import {BsFillTrashFill} from 'react-icons/bs';
function Note ({remove}) {
    return(
        <div className="lg:w-[24%] w-[48%] h-[400px] shadow-lg bg-white ">
            <div className="h-[35px] bg-slate-800 flex justify-end items-center" >
            <BsFillTrashFill fill="white"  className="me-[5px] w-[23px] h-[23px]" onClick={remove} />
            </div>
            <textarea className='w-[100%] h-[80%] p-3 focus:outline-none resize-none'></textarea>
        </div>
    )
}
export default Note;