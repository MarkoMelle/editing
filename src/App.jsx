import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit, setEditItem, reset } from './slices/serviceAddSlice';

export default function App() {
  const dispatch = useDispatch();
  const { isEdit, editItem } = useSelector((state) => state.serviceAdd);

  const handleReset = () => {
    dispatch(reset());
  };

  const handleEdit = (editItem) => {
    dispatch(setIsEdit(true));
    dispatch(setEditItem(editItem));
  };

  return (
    <>
      <ServiceAdd value={editItem} isEdit={isEdit} onReset={handleReset} />
      <ServiceList onEdit={handleEdit} />
    </>
  );
}
