import React from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { handleCreate } from '../redux/actions/todotask';

function Listoftodo(props) {
    const dispatch = useDispatch();
    const listdata = useSelector((state)=>state.reducer)
    return (
        <div className=' h-[100%] overflow-scroll flex flex-wrap gap-5 justify-center text-white pt-3'>
          {
           listdata.map((v)=>{
            return <>
            <div className="task_items h-[180px] w-[300px] bg-blue-400">
              {
               v
              }
            </div>
            </>
           })
          }
          <h1>hello</h1>
        </div>
    );
}

export default Listoftodo;