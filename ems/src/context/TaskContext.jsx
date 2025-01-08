// The task list is present in this taskcontext.jsx
import React from 'react'

const TaskContext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TaskContext