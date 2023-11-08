import React from 'react'

export default function page() {
  return (
    <>
      <section>
        <form action="">
          <label htmlFor="">First Name:</label>
          <input type="text" placeholder='Write your first name here' />
          <label htmlFor="">Last Name:</label>
          <input type="text" placeholder='Write your last name here'/>
          <label htmlFor="">Username:</label>
          <input type="text" placeholder='Create a new username'/>
          <label htmlFor="">Email:</label>
          <input type="email" placeholder='example@gmail.com'/>
          <label htmlFor="">Password:</label>
          <input type="password" placeholder='example@gmail.com'/>
          <p className='float-right'>Already a user? <a className='text-[red] underline' href="/login">Login</a></p>
        </form>
      </section>
    </>
  )
}
