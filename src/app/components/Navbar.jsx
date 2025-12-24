import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around pt-4'>
        <h1 className='text-lg font-semibold'>ToDoList</h1>
        <ul className='flex items-center gap-5'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>List</li>
        </ul>
    </div>
  )
}

export default Navbar