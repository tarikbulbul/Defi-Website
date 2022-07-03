import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/b62c6846-bb1e-4d33-98a1-599a267f60fa" method='POST'>
                <div className='form-container display-col'>
                    <input required type="email" name='email' placeholder='Enter your email' />
                    <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <label htmlFor="checkbox" className='checkbox' >
                        <input required id='checkbox'  type="checkbox"/> <p>Yes, I agree to receive email communications from Defi</p>
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe