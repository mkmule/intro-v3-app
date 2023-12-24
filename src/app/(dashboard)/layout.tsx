import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h2>New todo</h2>
        <NewTodoForm />
      </div>

      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout