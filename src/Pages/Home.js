import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" style={{backgroundImage: "url(https://img.freepik.com/free-photo/hand-with-pen-application-form_1232-2160.jpg?w=1060&t=st=1684861295~exp=1684861895~hmac=5dff09cfa91326178100267a99907ad28396e04ac5523fe9e1745dd57774c64c)"}}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-neutral-focus">To_DoTaske</h1>
      <p className="text-2xl py-6 font-bold text-neutral-focus">a list of tasks or activities that need to be completed or accomplished</p>
      <Link smooth to="/LogIn"><button className="btn font-bold btn-neutral-focus text-secondary-content">Get Started</button></Link>
    </div>
  </div>
</div>
  )
}

export default Home