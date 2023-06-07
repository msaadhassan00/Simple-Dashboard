import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Page/Home'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App