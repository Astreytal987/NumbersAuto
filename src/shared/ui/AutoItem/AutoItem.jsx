import number from '../../../../public/number.jpg';

function AutoItem({ price, status, contact, photo }) {
  return (
    <>
      <div className="overflow-hidden max-w-[225px] h-auto mb-[10px] bg-[#f2f2f2] rounded-[4px]">
        <div className="relative">
          <div className="flex bg-gray-300 aspect-[5/3] w-full max-h-[200px]">
            <img className="object-contain" src={number} alt="Фото с номером" />
            <p className="absolute flex w-[200px] justify-center items-center text-xl pr-[10%] mt-[21%]">
              {photo}
            </p>
          </div>
          {/* плашка с статусом */}
          <div>
            {status ? (
              <p className="absolute bottom-1 left-1 bg-[#F9E282] rounded-[10px] p-[5px_10px] text-[#6D5600]">
                Продано
              </p>
            ) : (
              <p className="absolute bottom-1 left-1 bg-[#D1FFE0] rounded-[10px] p-[5px_10px] text-[#315F40]">
                Продается
              </p>
            )}
          </div>
        </div>
        <div className="m-[20px_10px] flex flex-col gap-2">
          <p className="text-2xl font-normal text-[#222222]">{price} ₽</p>
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
