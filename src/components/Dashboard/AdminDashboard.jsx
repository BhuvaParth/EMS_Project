import React from 'react'
import Header  from '../../sections/header/Header'
import CreateTask from '../Forms/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <CreateTask />
    </div>
  )
}

export default AdminDashboard