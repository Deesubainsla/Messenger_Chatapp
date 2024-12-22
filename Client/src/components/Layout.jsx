import React from 'react'
import HelmetTittle from './HelmetTittle.jsx'
import Header from './Header.jsx'
import Chatlist from './App Layout/Chatlist.jsx'
import Profileblock from './App Layout/Profileblock.jsx'


function Layout(Component) {
  return (props) => {
    return <>
      <div className='max-h-screen overflow-hidden m-0 p-0'>
        <HelmetTittle />
        <Header />
        <div style={{ height: 'calc(100vh - 4rem)' }} className='flex'>
          <div className='hidden sm:block  w-1/4 border-2'>
            <Chatlist />
          </div>
          <div className='w-full h-full'>
            <Component {...props} />
          </div>
          {/* <div className='w-1/4 border-2'>
            <Profileblock/>
          </div> */}
        </div>
      </div>
    </>
  }
}


export default Layout