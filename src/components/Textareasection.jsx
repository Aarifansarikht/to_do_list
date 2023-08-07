import React, { useState } from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { addtodo,deletetodo } from '../redux/actions/todotask';

function Textareasection(props) {
    const [ text, setText] = useState('');

    const dispatch = useDispatch();
    const handlesubmit = (e)=>{
          e.preventDefault();
          dispatch(addtodo(text));
          setText('')
    }
    return (
        <>
        <div className='teat_area_container h-[100%]'>
            <form className='w-[50%]  h-full m-auto flex justify-center items-center flex-col gap-3 bg-sky-500 rounded-md' onSubmit={handlesubmit}>
                <textarea name="" id="" className='h-24 resize-none outline-none font-semibold text-2xl' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                <button className='pt-2 pl-20 pr-20 pb-2 bg-black rounded-md text-white'>Add</button>
            </form>
        </div>
        </>
    );
}

export default Textareasection;