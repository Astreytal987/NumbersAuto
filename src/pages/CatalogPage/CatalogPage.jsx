import AutoList from '../../shared/ui/AutoList/AutoList';
import SearchAuto from '../../shared/ui/SearchAuto/SearchAuto';
import { useState, useEffect } from 'react';
import useStore from "../../app/store.js";
import axios from "axios";
import Filter from "../../shared/ui/Filter/Filter.jsx";

const ess = [
  {
    "id": "0a2069c4-2f91-4be1-9b0c-4783460a3524",
    "userid": 5590809125,
    "contact": "+892929111",
    "status": false,
    "amount": 1000.0,
    "date": "2025-06-22T20:41:15.449957",
    "excess": true,
    "additional_information": "Гос. номер на автомобиле",
    "car_number": "О 111 АА 178"
  },
  {
    "id": "0a2069c4-2f91-4be1-9b0c-4783460a3524",
    "userid": 5590809125,
    "contact": "+892929111",
    "status": true,
    "amount": 1000.0,
    "date": "2025-06-22T20:41:30.831179",
    "excess": true,
    "additional_information": "Гос. номер на автомобиле",
    "car_number": "О 111 АА 178"
  },
  {
    "id": "f9b10e83-3616-42c4-ac09-472b8db3a3a9",
    "userid": 5590809125,
    "contact": "@lafetikk",
    "status": false,
    "amount": 10000.0,
    "date": "2025-06-22T20:46:47.096438",
    "excess": true,
    "additional_information": "Машина в угоне",
    "car_number": "О 111 АА 178"
  },
  {
    "id": "46e7670f-8d5a-47bd-92c3-c15dd1d3589e",
    "userid": 5590809125,
    "contact": "@lafetikk",
    "status": false,
    "amount": 1000.0,
    "date": "2025-06-22T20:49:30.976934",
    "excess": false,
    "additional_information": "",
    "car_number": "О 111 АА 178"
  },
  {
    "id": "46e7670f-8d5a-47bd-92c3-c15dd1d3589e",
    "userid": 5590809125,
    "contact": "@lafetikk",
    "status": true,
    "amount": 1000.0,
    "date": "2025-06-22T20:49:37.752263",
    "excess": false,
    "additional_information": "",
    "car_number": "О 111 АА 178"
  },
  {
    "id": "a6440c70-b616-4418-b78f-43171d1913d1",
    "userid": 1974611991,
    "contact": "@chernidelfin",
    "status": false,
    "amount": 1200000.0,
    "date": "2025-06-22T20:57:27.371136",
    "excess": true,
    "additional_information": "Гос. номер на автомобиле",
    "car_number": "А 777 УЕ 777"
  },
  {
    "id": "a6440c70-b616-4418-b78f-43171d1913d1",
    "userid": 1974611991,
    "contact": "@chernidelfin",
    "status": true,
    "amount": 1200000.0,
    "date": "2025-06-22T20:58:07.203765",
    "excess": true,
    "additional_information": "Гос. номер на автомобиле",
    "car_number": "А 777 УЕ 777"
  },
  {
    "id": "6e3fe28e-8e6f-45ce-a8c3-93b633041f3f",
    "userid": 482233894,
    "contact": "@webabo",
    "status": false,
    "amount": 10000.0,
    "date": "2025-06-22T21:17:41.494010",
    "excess": false,
    "additional_information": "Гос. номер на сохранении",
    "car_number": "О111АА78"
  },
  {
    "id": "64bcd267-f75a-49e0-8f21-9a46a3e6bb93",
    "userid": 5691859327,
    "contact": "@theonly180",
    "status": false,
    "amount": 555.0,
    "date": "2025-06-23T12:51:36.266177",
    "excess": true,
    "additional_information": "Гос. номер на сохранении",
    "car_number": "О 228 АА 178"
  },
  {
    "id": "64bcd267-f75a-49e0-8f21-9a46a3e6bb93",
    "userid": 5691859327,
    "contact": "@theonly180",
    "status": true,
    "amount": 555.0,
    "date": "2025-06-23T12:55:57.992592",
    "excess": true,
    "additional_information": "Гос. номер на сохранении",
    "car_number": "О 228 АА 178"
  }
]

function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const autoNumbers = useStore((state) => state.autoNumbers)
  const updateAutoNumbers = useStore((state) => state.updateAutoNumbers)
  const autoSearch = useStore((state) => state.autoSearch)
  const autoFilter = useStore((state) => state.autoFilter)


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
    const filteredUpDown = autoNumbers.sort(autoFilter.Sort
        ? (a, b) => a.amount - b.amount
        : (a, b) => b.amount - a.amount)

    const filteredNumbers = filteredUpDown.filter((item) => {
      return item.amount >= autoFilter.From && item.amount <= autoFilter.End
    })

    return filteredNumbers.filter((item) => {
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
              <div className="p-[0px_10px]">
                <Filter/>
                <AutoList data={sortNumbers(autoNumbers)} />
              </div>
            </div>
        )}
      </>
  );
}

export default CatalogPage;