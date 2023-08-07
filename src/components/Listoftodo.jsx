import React from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { deletetodo } from '../redux/actions/todotask';
import {MdOutlineDelete} from 'react-icons/md'
function Listoftodo(props) {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoreducer.list)
    return (
        <div className=' h-[100%] overflow-scroll flex flex-wrap gap-5 justify-center text-white pt-3'>
          {
           list.map((v)=>{
            return <>
            <div key={v.id} className="task_items h-[180px] w-[300px] bg-white rounded-md relative text-[2rem] text-black">
              {
               v.text
              }
              <div className="delete text-red-700  inline p-2 absolute bottom-0 right-0" onClick={()=>{dispatch(deletetodo(v.id))}}>
              <MdOutlineDelete/>
              </div>
            </div>
            </>
           })
          }
          
        </div>
    );
}

export default Listoftodo;