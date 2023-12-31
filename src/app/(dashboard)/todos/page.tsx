import db from '@/utils/db'
import TodoList from '@/components/TodoList';

const getData = async () => {
  await new Promise(resolve => {setTimeout(resolve, 5000)});
  const todos = await db.todo.findMany({});
  return todos;
}

const TodosPage = async () => {
  const todos = await getData();

  return (
    <div>
      {todos.length ? <TodoList todos={todos} /> : <p>Ops, nothing found</p>}
    </div>
  );
}

export default TodosPage