import { item } from '@/Types/types';
import { useQuery } from '@tanstack/react-query';

const useItems = (
  category: string,
  setItems: React.Dispatch<React.SetStateAction<item[]>>
) => {
  // Tanstack
  const fetchItems = async () => {
    let data = [];
    let url = 'https://fakestoreapi.com/products';
    category === 'all' ? url : (url = `${url}/category/${category}`);

    const ReqResult = await fetch(url);

    try {
      if (ReqResult.status >= 400) {
        throw new Error('Server error');
      }

      data = await ReqResult.json();
      setItems(data || []);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery({
    queryFn: () => fetchItems(),
    queryKey: ['shopItems', category],
  });
};

export default useItems;
