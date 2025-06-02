import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';



const App = () => {
  

  return (
    // bg white by default for dark have to enable dark mode in tailwind.config
    <div className='flex h-screen bg-slate-900 dark:bg-slate-900'>
      <section className='w-[10%] sm:w-[15%]'>
          <Sidebar/>
      </section>
      <section className='flex flex-col w-[90%] sm:w-[85%] overflow-auto'>
          <Main/>
      </section>
    </div>
  );
}

export default App
