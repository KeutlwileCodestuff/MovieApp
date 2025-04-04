import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Movies({movie}){
  const [liked , setLiked] = useState(false)
  const [count , setCount] = useState(0)

  return (
    <div onClick={() => {setCount(count + 1)}}> Movie named { movie}
      <button onClick={
        () => {setLiked(true)}
      }
      >{ liked? 'liked' : 'like'}</button>
      <p>{count>0 ? count : ""}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Movies movie= "one"/>
      <Movies movie= "2"/>
      <Movies movie= "3"/>

    </div>
  )
}

export default App
