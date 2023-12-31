'use client'

import React, { useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

const Todo = ({ todo }: any) => {
  const [isPending, startTransition] = useTransition();


  return (
    <div
      className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-900' : ''}`}
      onClick={() => startTransition(() => {void completeTodo(todo.id)})}>
      {todo.content}

      {isPending && ' (Updating...)'}
    </div>
  )
}

export default Todo