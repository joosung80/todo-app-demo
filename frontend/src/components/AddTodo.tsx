import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={2}
      sx={{
        p: { xs: '4px 8px', sm: '6px 12px' },
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: { xs: 1, sm: 2 },
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: 4
        }
      }}
    >
      <InputBase
        sx={{
          ml: { xs: 1, sm: 2 },
          flex: 1,
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: { xs: '8px', sm: '10px' },
          '&:hover': {
            color: 'primary.main'
          }
        }}
      >
        <AddIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
      </IconButton>
    </Paper>
  );
};
