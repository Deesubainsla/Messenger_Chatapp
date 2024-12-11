import React from 'react'
import Layout from '../components/Layout.jsx'


function Home() {
  return <>
    <div className='h-full flex justify-center items-center'>
        <h1 className='font-bold text-4xl'>Select a friend to Chat:</h1>
    </div>
  </>
}

const HomeScreen = Layout(Home);



export default HomeScreen