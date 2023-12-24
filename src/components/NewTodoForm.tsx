'use client'

import { useState } from 'react';
import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewTodoForm;