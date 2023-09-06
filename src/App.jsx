import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formData, setFormData] = useState({fName:"", mail:"", country:"India", chkbx1:false, chkbx2:false, chkbx3:false, radios:""})
  console.log(formData)

  function formHandler(e) {
    // e.preventDefault();
    const {name, type, value, checked} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  return (
    <div>
      <form className='flex flex-col items-center gap-3' onSubmit={formHandler}>
        <h1 className='m-5 mb-9 font-bold text-2xl'>React Froms Practice</h1>
        <label htmlFor='fName'>First Name</label>
        <input
          type='text'
          id='fName'
          name='fName'
          placeholder='fName'
          onChange={formHandler}
          value={formData.fName}
        />

        <label htmlFor='mail'>Email</label>
        <input
          type='email'
          id='mail'
          name='mail'
          placeholder='mail'
          onChange={formHandler}
          value={formData.mail}
        />

        <label htmlFor='country'>Country</label>
        <select
          name='country'
          id='country'
          onChange={formHandler}
          value={formData.country}  
        >
          <option value='India'>India</option>
          <option value='USA'>USA</option>
          <option value='Australia'>Australia</option>
          <option value='Canada'>Canada</option>
        </select>

        <label htmlFor='chkbx1'>CheckBox 1</label>
        <input
          type='checkbox'
          name='chkbx1'
          id='chkbx1'
          checked={formData.chkbx1}
          value={formData.chkbx1}
          onChange={formHandler}
        />
        <label htmlFor='chkbx2'>CheckBox 2</label>
        <input
          type='checkbox'
          name='chkbx2'
          id='chkbx2'
          checked={formData.chkbx2}
          value={formData.chkbx2}
          onChange={formHandler}
        />
        <label htmlFor='chkbx3'>CheckBox 3</label>
        <input
          type='checkbox'
          name='chkbx3'
          id='chkbx3'
          checked={formData.chkbx3}
          value={formData.chkbx3}
          onChange={formHandler}
        />

        <label htmlFor='radios'>Radio Button 1</label>
        <input
          type='radio'
          name='radios'
          id='radios'
          value='radio1'
          onChange={formHandler}
        />
        <label htmlFor='radios'>Radio Button 2</label>
        <input
          type='radio'
          name='radios'
          id='radios'
          value='radio2'
          onChange={formHandler}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;