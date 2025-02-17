import React from 'react'
import Header  from '../../sections/header/Header'
import CreateTask from '../Forms/CreateTask'
import AllTask from '../TaskList/AllTask'

const AdminDashboard = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard