import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <Container maxWidth="sm" sx={{
      px: { xs: 2, sm: 3 },
      py: { xs: 2, sm: 4 },
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, sm: 3 }
      }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.125rem' },
            fontWeight: 600,
            color: 'primary.main'
          }}
        >
          할 일 관리
        </Typography>
        <AddTodo onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </Box>
    </Container>
  );
}

export default App;
