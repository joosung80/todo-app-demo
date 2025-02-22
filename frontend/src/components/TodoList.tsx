import React from 'react';
import { List, Paper } from '@mui/material';
import { TodoItem, Todo } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxHeight: { xs: '50vh', sm: '60vh' },
        overflow: 'auto',
        borderRadius: { xs: 1, sm: 2 },
        backgroundColor: 'background.paper',
        '&:empty': {
          display: 'none'
        }
      }}
    >
      <List sx={{ p: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
        {todos.length === 0 && (
          <Box sx={{
            p: { xs: 3, sm: 4 },
            textAlign: 'center',
            color: 'text.secondary'
          }}>
            <Typography variant="body1">
              할 일이 없습니다. 새로운 할 일을 추가해보세요!
            </Typography>
          </Box>
        )}
      </List>
    </Paper>
  );
};
