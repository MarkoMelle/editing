import React from 'react';
import useServiceList from '../hooks/useServiceList';
import useServiceActions from '../hooks/useServiceActions';

export default function ServiceList({ onEdit = () => {} }) {
  const { items } = useServiceList();
  const { remove } = useServiceActions();

  const handleRemove = (id) => {
    remove(id);
  };

  const handleEdit = (id) => {
    const service = items.find((item) => item.id === id);
    if (service) {
      onEdit(service);
    }
  };

  return (
    <ul>
      {items.map((service) => (
        <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service.id)}>✎</button>
          <button onClick={() => handleRemove(service.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
