import AutoItem from '../AutoItem/AutoItem';

function AutoList() {
  return (
    <>
      <div className="catalog grid m-[0px_10px] gap-[10px]">
        <AutoItem price="100" status="Продано" contact="@contact" />
        <AutoItem price="12 032" status="Продается" contact="@contact" />
        <AutoItem price="12 032" status="Продается" contact="@contact" />
        <AutoItem price="100" status="Продано" contact="@contact" />
        <AutoItem price="100" status="Продано" contact="@contact" />
        <AutoItem price="12 032" status="Продается" contact="@contact" />
      </div>
    </>
  );
}

export default AutoList;
