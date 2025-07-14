import AutoItem from '../AutoItem/AutoItem';
// import { useProductsList } from '../../hooks/useProductsList';

function AutoList({data}) {

  return (
    <>
      <div className="catalog grid gap-[10px]">
        {data.map((item) => {
          return (
            <AutoItem
              key={item.date}
              price={item.amount}
              status={item.status}
              contact={item.contact}
              numberAuto={item.car_number}
              id={item.id}
              excess={item.excess}
            />
          );
        })}
      </div>
    </>
  );
}

export default AutoList;
