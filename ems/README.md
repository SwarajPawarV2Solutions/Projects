# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Step 1 #
## Installing talwind css for react vite
- https://tailwindcss.com/docs/guides/vitehttps://tailwindcss.com/docs/guides/vite


# Step 2 # 
 - Make folders named as  Components, context ,Pages, utils folder in src folder.
 - In components folder Add 3 folder named as Auth, Dashboard, TaskList.
 - In Auth folder add file login.jsx.
 - In Dashboard folder add files named as AdminDashboard.jsx and EmployeeDashboard.jsx.
 - In Tasklist folder add files named AcceptTask.jsx, CompleteTask.jsx, FailedTask.jsx, NewTask.jsx.
 - In Context folder add files named AuthContext.jsx and TaskContext.jsx
 - In utils folder add file named as localStorage.jsx.


### Explanation of Folders and Files

- **components/**: Contains all the UI components of the application.
  - **Auth/**: Includes authentication-related components.
    - `login.jsx`: Login component where users authenticate.
  - **Dashboard/**: Contains components related to the different user dashboards.
    - `AdminDashboard.jsx`: Admin-specific dashboard component.
    - `EmployeeDashboard.jsx`: Employee-specific dashboard component.
  - **TaskList/**: Contains components related to managing tasks.
    - `AcceptTask.jsx`: Component to accept a task.
    - `CompleteTask.jsx`: Component to mark a task as completed.
    - `FailedTask.jsx`: Component to mark a task as failed.
    - `NewTask.jsx`: Component to create a new task.

- **context/**: Contains context providers for the global state of the application.
  - `AuthContext.jsx`: Context provider for authentication state.
  - `TaskContext.jsx`: Context provider for task management state.

- **pages/**: Contains page-level components. (Add relevant page components here as needed.)

- **utils/**: Contains utility functions or helpers.
  - `localStorage.jsx`: Utility for managing local storage operations.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
