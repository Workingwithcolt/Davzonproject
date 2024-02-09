import React from 'react'

const Project = () => {
  return (
    <div>
        <h1 className='pro'>Create Project</h1>
        <label className='labeltext'>Projects Name</label>
        <input className='Inputtext' type="text" placeholder='Enter Project Name' />
      
        <label className='labeltext'>Projects Details</label>
        <input className='Inputtext'type="text" placeholder='Enter Project Details' />
      
        <button className='text'>Submit</button>
    </div>
  )
}

export default Project