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
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mb: 2
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};
