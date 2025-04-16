

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookMark,setBookMark]= useState([]);
  const [readingCount,setReadingCount]=useState(0);
  const handleBookMark=(blog)=>{
    setBookMark([...bookMark,blog])
  }

  const handleMarkAsRead=(time)=>{
    setReadingCount(readingCount+time);
  }

  return (
    <>
      <Navbar></Navbar>
      
      <div className='main-container flex text-center'>
        <div className='left-container w-[70%]'> <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs></div>
        <div className='right-container w-[30%]'>
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmark count: {bookMark.length}</h1>
          {
            bookMark.map(mark=><p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
