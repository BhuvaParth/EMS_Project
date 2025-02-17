import React from 'react'
import Header  from '../../sections/header/Header'
import TaskListNumbers from '../../sections/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='flex flex-col'>
      <Header data={data} />
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard