import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formData, setFormData] = useState({fName:"", lName:"", email:"", country:"", });

  const formHandler = (e) => {
    const {name, type, value, checked} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='m-5 mb-9 font-bold text-2xl'>React Froms Practice</h1>
      <form className='flex flex-col gap-5'>
        <input 
          className='border border-black' 
          placeholder='first name' 
          type='text' 
          name='fName'
        />

        <input
         className='border border-black' 
         placeholder='last name' 
         type='text' 
         name='lName'
        />

        <input
         className='border border-black' 
         placeholder='your-mail@mail.com' 
         type='email' 
         name='email'
        />

        <select
         className='border border-black' 
         name='country' 
         value={formData.country}
        >
          <option value='India'>India</option>
          <option value='United States of America'>United States of America</option>
          <option value='China'>China</option>
          <option value='Bangladesh'>Bangladesh</option>
          <option value='Pakistan'>Pakistan</option>
        </select>

        <label htmlFor='chkbx1'>CheckBox 1 <input type='checkbox' id='chkbx1'/></label>
        <label htmlFor='chkbx1'>CheckBox 2 <input type='checkbox' id='chkbx1'/></label>
        <label htmlFor='chkbx1'>CheckBox 3 <input type='checkbox' id='chkbx1'/></label>
      </form>    
    </div>
  )
}

export default App;