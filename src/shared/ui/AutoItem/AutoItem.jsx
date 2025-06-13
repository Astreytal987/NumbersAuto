function AutoItem() {
  return (
    <>
      <div className="overflow-hidden w-[225px] h-auto mb-[10px] bg-[#F2F2F2] rounded-[4px]">
        <div className="relative">
          <img className="object-cover" src="/public/number.png" alt="Фото с номером" />
          {/* плашка с статусом */}
          <p className="absolute bottom-1 left-1 bg-[#F9E282] rounded-[10px] p-[5px_10px]">
            Продано
          </p>
        </div>
        <div className="m-[20px_10px] flex flex-col gap-2">
          <p className="text-2xl font-[Open_Sans] font-normal">100 ₽</p>
          {/* цена */}
          <a className="text-[#1BA1E4] text-sm font-normal" href="https://www.google.com/">
            @contact
          </a>
          {/* контакт */}
        </div>
      </div>
    </>
  );
}

export default AutoItem;
