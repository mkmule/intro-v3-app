import NewTodoForm from '@/components/NewTodoForm';

const getData = async () => {
  await new Promise<void>((res) => setTimeout(() => res(), 2000));
  return { data: [1, 2, 3] };
}

// Server component example
const Home = async () => {
  const data = await getData();

  return (
    <div>
      <p>This is home: {JSON.stringify(data)}</p>
      <NewTodoForm />
    </div>
  )
}

export default Home