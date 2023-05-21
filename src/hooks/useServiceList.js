import { useSelector } from 'react-redux';

const useServiceList = () => {
  const items = useSelector((state) => state.services);
  return { items };
};

export default useServiceList;
