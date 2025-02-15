import React from 'react'
import Header  from '../../sections/header/Header'
import TaskListNumbers from '../../sections/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard