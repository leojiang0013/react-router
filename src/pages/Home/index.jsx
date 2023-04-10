import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>I am Home</h2>
      <NavLink className="normal" to='news' >News</NavLink>
      <br />
      <NavLink className="normal" to='message'>Message</NavLink>
      <Outlet />
    </div>
  )
}
