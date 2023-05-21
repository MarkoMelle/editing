import React, { useState } from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

export default function App() {
  const [item, setItem] = useState({ name: '', price: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleReset = () => {
    setItem({ name: '', price: '' });
    setIsEdit(false);
  };

  const handleEdit = (editItem) => {
    setItem(editItem);
    setIsEdit(true);
  };

  return (
    <>
      <ServiceAdd value={item} isEdit={isEdit} onReset={handleReset} />
      <ServiceList onEdit={handleEdit} />
    </>
  );
}
