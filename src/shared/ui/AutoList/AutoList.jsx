import AutoItem from '../AutoItem/AutoItem';

function AutoList() {
  return (
    <>
      <div className="flex flex-wrap m-[0px_10px] gap-[10px]">
        <AutoItem />
        <AutoItem />
        <AutoItem />
      </div>
    </>
  );
}

export default AutoList;
