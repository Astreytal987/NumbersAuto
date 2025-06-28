import AutoList from '../../shared/ui/AutoList/AutoList';
import SearchAuto from '../../shared/ui/SearchAuto/SearchAuto';
import { useState, useEffect } from 'react';
import axios from "axios";

function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://avtonomerspb.ru/api/products/list', {
          headers: {
            'Content-Type': 'application/json',
            'X-Telegram-InitData': window.Telegram?.WebApp?.initData,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
              <AutoList data={data} />
            </div>
        )}
      </>
  );
}

export default CatalogPage;