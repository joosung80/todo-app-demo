import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <ListItem
      sx={{
        px: { xs: 1, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        '&:hover': {
          backgroundColor: 'action.hover'
        }
      }}
      secondaryAction={
        <Box sx={{
          display: 'flex',
          gap: { xs: 0.5, sm: 1 }
        }}>
          <IconButton
            edge="end"
            onClick={() => onDelete(todo.id)}
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
        </Box>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <TextField
          fullWidth
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSave()}
        />
      ) : (
        <ListItemText
          primary={todo.text}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        />
      )}
    </ListItem>
  );
};
