import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* we have wrapped App in AuthContext and TaskContext */}
   <AuthContext>
    <TaskContext>
    <App />
    </TaskContext>
   </AuthContext>


  </StrictMode>,
)
