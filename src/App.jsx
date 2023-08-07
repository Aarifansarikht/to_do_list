import React from 'react';
import Topheader from './components/Topheader';
import Textareasection from './components/Textareasection';
import Listoftodo from './components/Listoftodo';

function App(props) {
    return (
        <div className="main_container h-[100vh] w-full bg-black ">
            <header className='h-[10%]'>
                    <Topheader/>
            </header>
            <section className='h-[50%] '>
                <article className='h-[100%] w-full'>
                    <Textareasection/>
                </article>
            </section>
            <section className='h-[40%]'>
            <Listoftodo/>
            </section>
        </div>

    );
}

export default App;