import React, { useState } from 'react'
import Search from './components/search'

function App(){
  const [searchTerm , setSearchTerm] = useState()

  return (
    <main>

      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="/src/images/image1.png" alt="heros img" />
          <h1>We bring <span className='text-gradient'> Great Movies</span> to watch!</h1>
        </header>
        <Search  name="zombies"/>
     </div>
    </main>

  )
}

export default App