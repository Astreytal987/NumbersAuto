// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
//
// export function useProductsList() {
//   const telegramInitData = window.Telegram.WebApp.initData;
//   return useQuery({
//     queryKey: ['products', telegramInitData],
//     queryFn: async () => {
//       const response = await axios.get('https://avtonomerspb.ru/api/products/list', {
//         headers: {
//           'X-Telegram-InitData': telegramInitData,
//         },
//       });
//       return response.data;
//     },
//     staleTime: 5 * 60 * 1000,
//   });
// }

// async function fucktestapi() {
//   const res = await fetch('https://avtonomerspb.ru/api/products/list', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Telegram-InitData': window.Telegram.WebApp.initData,
//     },
//   });

//   const data = await res.json();
//   console.log('Response data:', data);
// }
// fucktestapi();
