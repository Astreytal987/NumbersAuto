import AutoList from '../../shared/ui/AutoList/AutoList';
import SearchAuto from '../../shared/ui/SearchAuto/SearchAuto';

function CatalogPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-normal not-italic text-xs leadind-[16px] text-[#666666] text-center m-[20px_10px]">
        Добро пожаловать! <br /> Перед вами крупнейший каталог номеров в Санкт-Пербурге
      </p>
      <SearchAuto />
      <AutoList />
    </div>
  );
}

export default CatalogPage;
