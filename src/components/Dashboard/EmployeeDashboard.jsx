import React from 'react'
import { Header } from '../../sections/header/Header'
import TaskListNumbers from '../../sections/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <TaskListNumbers />
    </div>
  )
}

export default EmployeeDashboard