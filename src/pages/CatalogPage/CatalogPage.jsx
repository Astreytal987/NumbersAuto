import AutoList from '../../shared/ui/AutoList/AutoList';
import SearchAuto from '../../shared/ui/SearchAuto/SearchAuto';
import { useState, useEffect } from 'react';
import useStore from "../../app/store.js";
import axios from "axios";

function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const autoNumbers = useStore((state) => state.autoNumbers)
  const updateAutoNumbers = useStore((state) => state.updateAutoNumbers)
  const autoSearch = useStore((state) => state.autoSearch)


  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://avtonomerspb.ru/api/products/list', {
          headers: {
            'Content-Type': 'application/json',
            'X-Telegram-InitData': window.Telegram?.WebApp?.initData,
          },
        });
        updateAutoNumbers(response.data);
        console.log("данные загрузились")
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        console.log(window.Telegram?.WebApp?.initData)
        console.error('Ошибка при загрузке данных:', error);
        updateAutoNumbers([]);
      }

    }

    const timer = setTimeout(() => {
      getData();
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sortNumbers = () => {
    return autoNumbers.filter((item) => {
      const trimNumber = item.car_number.replace(/\s+/g, '');
      if (!trimNumber) {
        return false
      }
      const tSeries1 = trimNumber.slice(0, 1);
      const tNumber = trimNumber.slice(1, 4);
      const tSeries2 = trimNumber.slice(4, 6);
      const tRegion = trimNumber.slice(6);

      return (
          tSeries1.includes(autoSearch.series1) &&
          tNumber.includes(autoSearch.number) &&
          tSeries2.includes(autoSearch.series2) &&
          tRegion.includes(autoSearch.region)
      );
    })
  }

  return (
      <>
        {loading ? (
            <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#282c34',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2rem',
                  zIndex: 9999,
                }}
            >
              Загрузка...
            </div>
        ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="font-normal not-italic text-xs leading-[16px] text-[#666666] text-center m-[20px_10px]">
                Добро пожаловать! <br />
                Перед вами крупнейший каталог номеров в <nobr>Санкт-Петербурге</nobr>
              </p>
              <SearchAuto />
              <AutoList data={sortNumbers(autoNumbers)} />
            </div>
        )}
      </>
  );
}

export default CatalogPage;