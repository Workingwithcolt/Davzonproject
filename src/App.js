import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminLogin from './Components/AdminLogin'
import AdminWork from './Components/AdminWork'
import ManagerLogin from './Components/ManagerLogin'
import DeveloperLogin from './Components/DeveloperLogin'
import Project from './Components/Project'
import Manager from './Components/Manager'
import Developer from './Components/Developer'


const App = () => {

  return (
      <div>
      <Routes>
        <Route path="/" element={<AdminLogin/>}/>
        <Route path="/Manager" element={<AdminWork/>}/>
        <Route path="/ManagerLogin" element={<ManagerLogin/>}/>
        <Route path="/DeveloperLogin" element={<DeveloperLogin/>}/>
        <Route path="/Projects" element={<Project/>}/>
        <Route path="/ManagerPortal" element={<Manager/>}/>
        <Route path="/DeveloperPortal" element={<Developer/>}/>
      </Routes>
       </div>
  )
}

export default App