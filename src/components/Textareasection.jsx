import React from 'react';

function Textareasection(props) {
    return (
        <>
        <div className='teat_area_container h-[100%]'>
            <form className='w-[50%]  h-full m-auto flex justify-center items-center flex-col gap-3 bg-sky-500 rounded-md' >
                <textarea name="" id="" className='h-24 resize-none outline-none font-semibold text-2xl'></textarea>
                <button className='pt-2 pl-20 pr-20 pb-2 bg-black rounded-md text-white'>Add</button>
            </form>
        </div>
        </>
    );
}

export default Textareasection;