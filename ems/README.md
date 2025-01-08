# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Step 1 : Installing talwind css for react vite from below link

- https://tailwindcss.com/docs/guides/vitehttps://tailwindcss.com/docs/guides/vite


# Step 2 : Explanation of Folders and Files
 - Make folders named as  Components, context ,Pages, utils folder in src folder.
 - In components folder Add 3 folder named as Auth, Dashboard, TaskList.
 - In Auth folder add file login.jsx.
 - In Dashboard folder add files named as AdminDashboard.jsx and EmployeeDashboard.jsx.
 - In Tasklist folder add files named AcceptTask.jsx, CompleteTask.jsx, FailedTask.jsx, NewTask.jsx.
 - In Context folder add files named AuthContext.jsx and TaskContext.jsx
 - In utils folder add file named as localStorage.jsx.


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



# Step 3: Implementing the Login Component

## Objective
In this step, we will create a simple login form with two input fields: one for the **Email** and one for the **Password**. We will use React's `useState` hooks to manage form state, handle form submission, and ensure that the fields are required before submitting.

### Instructions

1. **Add React Fragment:**
   - Wrap your entire JSX content inside a React fragment `<> </>`, so that no additional parent div is added to the DOM unnecessarily.

2. **Create the Form:**
   - Add a `form` element inside the JSX.
   - Inside the form, add two `input` fields:
     - One for **Email** (with a placeholder "Email").
     - One for **Password** (with a placeholder "Password").
   - Add a **Submit button**.

3. **Add Class Names:**
   - Add class names to all the `div` elements and form elements to easily target them for styling.

4. **Create `submitHandler` Function:**
   - Define a `submitHandler` function in the `Login.jsx` component that will print the submitted **Email** and **Password** to the console when the form is submitted.

5. **Use React `useState`:**
   - Add two `useState` hooks:
     - One for the **Email** (`email` and `setEmail`).
     - One for the **Password** (`password` and `setPassword`).

6. **Handle `onSubmit` in the Form:**
   - Add an `onSubmit` event handler to the form and pass the `submitHandler` function to it.

7. **Set Values in the Input Fields:**
   - Bind the `value` of each input field to the corresponding state (`email` for Email and `password` for Password).

8. **Add `onChange` Event Handlers:**
   - Add `onChange` event handlers to both input fields. In the `onChange` function, call `setEmail` and `setPassword` to update the respective states (`e.target.value`).

9. **Mark Fields as Required:**
   - Add the `required` attribute to both the **Email** and **Password** input fields to make sure the fields are not empty when submitting the form.



# Step 4 : Employee And Admin Dashboards

### Add folder named as other in components.And in that other folder add file named as Headers.jsx

- In Header file add headers as name with emoji and also add log Out button.
- Now creatre another file named as TaskListNumber.jsx and in that file we will add some number and tasks in it and adjust it by using css in a box with different colours.

### TaskList

- Add TaskList.jsx file in TaskList folder and in that file we will list of block which has task included in it.

## EmployeeDashboard

- Import and Add Header , TaslListNumbers and TaskList in Employee Dashboad.


