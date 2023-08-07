import React, { useState } from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { addtodo,deletetodo } from '../redux/actions/todotask';

function Textareasection(props) {
    const [ text, setText] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const handlesubmit = (e)=>{
          e.preventDefault();
          if (e.target[0].value.length !==0) {
              dispatch(addtodo(text));
              setText('')
              setError(false)
          }
          else{
            setError(true)
          }

    }
    return (
        <>
        <div className='teat_area_container h-[100%]'>
            <form className='w-[50%]  h-full m-auto flex justify-center items-center flex-col gap-3 bg-sky-500 rounded-md' onSubmit={handlesubmit}>
                <textarea name="" id="" className='h-24 resize-none outline-none font-semibold text-2xl' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                {error==true?<h2 className='text-red-600 font-semibold'>please add some task !</h2>:""}
                <button className='pt-2 pl-20 pr-20 pb-2 bg-black rounded-md text-white'>Add</button>
            </form>
        </div>
        </>
    );
}

export default Textareasection;