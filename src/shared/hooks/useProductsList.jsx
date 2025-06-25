import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProductsList(telegramInitData) {
  return useQuery({
    queryKey: ['products', telegramInitData],
    queryFn: async () => {
      const response = await axios.get('https://avtonomerspb.ru/api/products/list', {
        headers: {
          'X-Telegram-InitData': telegramInitData,
        },
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });
}
