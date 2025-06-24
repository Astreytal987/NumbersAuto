import AutoItem from '../AutoItem/AutoItem';
import { useProductsList } from '../../hooks/useProductsList';

const telegramInitData =
  window?.Telegram?.WebApp?.initData ||
  'query_id=AAFZMt9DAAAAAFky30NsAL73&user=%7B%22id%22%3A1138700889%2C%22first_name%22%3A%22Astreytal%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Astreytal%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FdN0Qp-5jnzjwMrGsNc0YcdB8yCpRtJrVKQMk51gx2kI.svg%22%7D&auth_date=1750655455&signature=D934OcKz0bU0n2ERd2BdaNP6S3VLWgxOT4cuKKSXRI_Wa0lSv5vDsSEapln1X5YqzymDvK23F-J8J6vxoOsGCA&hash=729ac5543a0042b9fcbd78d9afddf2ac1c0189e5ececd24e67dfe61687525c43';

//   {
//     id: '0a2069c4-2f91-4be1-9b0c-4783460a3524',
//     userid: 5590809125,
//     contact: '+892929111',
//     status: false,
//     amount: 1000.0,
//     date: '2025-06-22T20:41:15.449957',
//     excess: true,
//     additional_information: 'Гос. номер на автомобиле',
//     car_number: 'О 111 АА 178',
//   },
//   {
//     id: '0a2069c4-2f91-4be1-9b0c-4783460a3524',
//     userid: 5590809125,
//     contact: '+892929111',
//     status: true,
//     amount: 1000.0,
//     date: '2025-06-22T20:41:30.831179',
//     excess: true,
//     additional_information: 'Гос. номер на автомобиле',
//     car_number: 'О 111 АА 178',
//   },
//   {
//     id: 'f9b10e83-3616-42c4-ac09-472b8db3a3a9',
//     userid: 5590809125,
//     contact: '@lafetikk',
//     status: false,
//     amount: 10000.0,
//     date: '2025-06-22T20:46:47.096438',
//     excess: true,
//     additional_information: 'Машина в угоне',
//     car_number: 'О 111 АА 178',
//   },
//   {
//     id: '46e7670f-8d5a-47bd-92c3-c15dd1d3589e',
//     userid: 5590809125,
//     contact: '@lafetikk',
//     status: false,
//     amount: 1000.0,
//     date: '2025-06-22T20:49:30.976934',
//     excess: false,
//     additional_information: '',
//     car_number: 'О 111 АА 178',
//   },
//   {
//     id: '46e7670f-8d5a-47bd-92c3-c15dd1d3589e',
//     userid: 5590809125,
//     contact: '@lafetikk',
//     status: true,
//     amount: 1000.0,
//     date: '2025-06-22T20:49:37.752263',
//     excess: false,
//     additional_information: '',
//     car_number: 'О 111 АА 178',
//   },
//   {
//     id: 'a6440c70-b616-4418-b78f-43171d1913d1',
//     userid: 1974611991,
//     contact: '@chernidelfin',
//     status: false,
//     amount: 1200000.0,
//     date: '2025-06-22T20:57:27.371136',
//     excess: true,
//     additional_information: 'Гос. номер на автомобиле',
//     car_number: 'А 777 УЕ 777',
//   },
//   {
//     id: 'a6440c70-b616-4418-b78f-43171d1913d1',
//     userid: 1974611991,
//     contact: '@chernidelfin',
//     status: true,
//     amount: 1200000.0,
//     date: '2025-06-22T20:58:07.203765',
//     excess: true,
//     additional_information: 'Гос. номер на автомобиле',
//     car_number: 'А 777 УЕ 777',
//   },
//   {
//     id: '6e3fe28e-8e6f-45ce-a8c3-93b633041f3f',
//     userid: 482233894,
//     contact: '@webabo',
//     status: false,
//     amount: 10000.0,
//     date: '2025-06-22T21:17:41.494010',
//     excess: false,
//     additional_information: 'Гос. номер на сохранении',
//     car_number: 'О111АА78',
//   },
//   {
//     id: '64bcd267-f75a-49e0-8f21-9a46a3e6bb93',
//     userid: 5691859327,
//     contact: '@theonly180',
//     status: false,
//     amount: 555.0,
//     date: '2025-06-23T12:51:36.266177',
//     excess: true,
//     additional_information: 'Гос. номер на сохранении',
//     car_number: 'О 228 АА 178',
//   },
//   {
//     id: '64bcd267-f75a-49e0-8f21-9a46a3e6bb93',
//     userid: 5691859327,
//     contact: '@theonly180',
//     status: true,
//     amount: 555.0,
//     date: '2025-06-23T12:55:57.992592',
//     excess: true,
//     additional_information: 'Гос. номер на сохранении',
//     car_number: 'О 228 АА 178',
//   },
// ];

function AutoList() {
  const { data, error, isLoading, isError } = useProductsList(telegramInitData);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка: {error.message}</p>;
  return (
    <>
      <div className="catalog grid m-[0px_10px] gap-[10px]">
        {data.map((item) => {
          return (
            <AutoItem
              key={item.date}
              price={item.amount}
              status={item.status}
              contact={item.contact}
              photo={item.car_number}
            />
          );
        })}
      </div>
    </>
  );
}

export default AutoList;
