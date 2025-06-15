import numberAuto from '../../../../public/number.png';

function AutoItem({ price, status, contact }) {
  console.log(price, status);
  return (
    <>
      <div className="overflow-hidden w-[225px] h-auto mb-[10px] bg-[#f2f2f2] rounded-[4px]">
        <div className="relative">
          <img className="object-cover" src={numberAuto} alt="Фото с номером" />
          {/* плашка с статусом */}
          {status === 'Продано' ? (
            <p className="absolute bottom-1 left-1 bg-[#F9E282] rounded-[10px] p-[5px_10px] text-[#6D5600]">
              Продано
            </p>
          ) : (
            <p className="absolute bottom-1 left-1 bg-[#D1FFE0] rounded-[10px] p-[5px_10px] text-[#315F40]">
              Продается
            </p>
          )}
        </div>
        <div className="m-[20px_10px] flex flex-col gap-2">
          <p className="text-2xl font-[Open_Sans] font-normal text-[#222222]">{price} ₽</p>
          {/* цена */}
          <a className="text-[#1BA1E4] text-sm font-normal" href="https://www.google.com/">
            {contact}
          </a>
          {/* контакт */}
        </div>
      </div>
    </>
  );
}

export default AutoItem;
