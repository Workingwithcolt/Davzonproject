import React from 'react'
import { Link } from 'react-router-dom';


const AdminWork = () => {
  return (
    <div>
        <h1 className='addm'>Admin Portal</h1>
        <Link to='/ManagerLogin'><button className='last'>Create Manager</button></Link>
        <Link to='/DeveloperLogin'> <button className='last'>Create Developers </button></Link>
        <Link to='/Projects'><button className='last'>Create Projects</button></Link>
    </div>
  )
}

export default AdminWork