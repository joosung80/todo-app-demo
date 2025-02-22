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
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => onDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
        </>
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
