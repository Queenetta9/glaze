"use client"
import axios from 'axios'
import { useState } from 'react';
// import { signIn } from 'next-auth/react



const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   signIn('credentials', { username, password, email })
  // }

  const payload = {
    email: email,
    password: password
  }

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", payload)
      const result = response.data;
      
      if (response.status == "200") {
        console.log(result)
      } else {
        console.log("Invalid credentials")
      }

    } catch (error) {
      error
    }
  }


  return (
    <>
       <section>
        <form 
        onSubmit={handleSubmit}
        action="">
          {/* <label htmlFor="">Username:</label>
          <input type="text" placeholder='Enter your username'/> */}
          <label htmlFor="">Email:</label>
          <input type="email" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="">Password:</label>
          <input type="password" placeholder='example@gmail.com' onChange={(e) => setPassword(e.target.value)}/>
          <p className='float-right'>New here? <a className='text-[red] underline' href="/signup">Sign Up</a></p>
          <br /> <br />
          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default page
