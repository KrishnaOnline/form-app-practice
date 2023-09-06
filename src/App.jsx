import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")

  const fNameHandler = (ev) => {
    console.log(ev.target.value);
    setFName(ev.target.value)
  }
  const lNameHandler = (ev) => {
    console.log(ev.target.value);
    setLName(ev.target.value)
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-7 p-5 font-bold text-3xl shadow-2xl'>React Forms</h1>
      <form className='flex flex-col gap-3'>
        <input className='border border-black' type='text' placeholder='First Name' value={fName} onChange={fNameHandler} />
        <input className='border border-black' type='text' placeholder='Last Name' value={lName} onChange={lNameHandler}/>
      </form>
    </div>
  )
}

export default App
