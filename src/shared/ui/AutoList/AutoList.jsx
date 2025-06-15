import AutoItem from '../AutoItem/AutoItem';
import numberAuto from '../../../../public/number.png';

function AutoList() {
  return (
    <>
      <div className="catalog grid m-[0px_10px] gap-[10px]">
        <AutoItem price="100" status="Продано" contact="@contact" photo={numberAuto} />
        <AutoItem price="12 032" status="Продается" contact="@contact" photo={numberAuto} />
        <AutoItem price="12 032" status="Продается" contact="@contact" photo={numberAuto} />
        <AutoItem price="100" status="Продано" contact="@contact" photo={numberAuto} />
        <AutoItem price="100" status="Продано" contact="@contact" photo={numberAuto} />
        <AutoItem price="12 032" status="Продается" contact="@contact" photo={numberAuto} />
      </div>
    </>
  );
}

export default AutoList;
