import AutoList from '../../shared/ui/AutoList/AutoList';
import SearchAuto from '../../shared/ui/SearchAuto/SearchAuto';
import { useState, useEffect } from 'react';

function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Загрузка...');

  useEffect(() => {
    let attempts = 0;

    const tryGetInitData = () => {
      const data = window.Telegram?.WebApp?.initData;
      if (data && data !== '') {
        setLoading(false);
      } else if (attempts < 5) {
        attempts++;
        setTimeout(tryGetInitData, 1000);
      } else {
        setStatus('error tg');
        console.log('window.Telegram?.WebApp?.initData');
        console.log(window.Telegram?.WebApp?.initData);
      }
    };
    tryGetInitData(status);
  }, []);

  return (
    <>
      {loading && (
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
          }}>
          {status}
        </div>
      )}
      {!loading && (
        <div className="flex flex-col justify-center items-center">
          <p className="font-normal not-italic text-xs leadind-[16px] text-[#666666] text-center m-[20px_10px]">
            Добро пожаловать! <br />
            Перед вами крупнейший каталог номеров в&nbsp;<nobr>Санкт-Пербурге</nobr>
          </p>
          <SearchAuto />
          <AutoList />
        </div>
      )}
    </>
  );
}

export default CatalogPage;
