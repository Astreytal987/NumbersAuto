import AutoItem from '../AutoItem/AutoItem';
import { useProductsList } from '../../hooks/useProductsList';

function AutoList() {
  const { data, error, isLoading, isError } = useProductsList();

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
