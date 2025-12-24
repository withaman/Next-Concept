"use client"
import axios from 'axios'
import React, { useState } from 'react'

function Home() {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(i => ({ ...i, [name]: value }))
        console.log(value)
    }

    const formSubmission = async(e) => {
        e.preventDefault()
        console.log(formData)
        const response = await axios.post("/api", formData)
        console.log(response.data.message)
    }

return (
    <div className='flex justify-center mt-5'>
        <form onSubmit={formSubmission} className='flex flex-col gap-3 w-[50rem]'>
            <input onChange={handleChange} name='title' placeholder='Title' type="text" className='border border-amber-400 p-2' />
            <textarea onChange={handleChange} name='descripiton' placeholder='description' className='border  border-amber-400 p-2' />
            <button className='bg-amber-400 text-black font-bold p-1 hover:bg-red-600'>Submit</button>
        </form>
    </div>
)
}

export default Home