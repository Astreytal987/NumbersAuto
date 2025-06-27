import './SearchAuto.css';
import React, { useState } from 'react';
import russia from '../../../../public/russia.svg';
import Union from '../../../../public/Union.svg';

// Маппинг латинских букв на русские
const latinToCyrillic = {
  A: 'А',
  B: 'В',
  E: 'Е',
  K: 'К',
  M: 'М',
  H: 'Н',
  O: 'О',
  P: 'Р',
  C: 'С',
  T: 'Т',
  Y: 'У',
  X: 'Х',
};

// Конфиг валидации
const validationConfig = {
  series1: {
    regex: /^[АВЕКМНОРСТУХ]{1}$/,
    replace: /[^АВЕКМНОРСТУХ]/g,
    noticeError: {
      smallText: 'Используйте русские буквы',
      normalText: 'А, В, Е, К, М, Н, О, Р, С, Т, У, Х',
    },
  },
  series2: {
    regex: /^[АВЕКМНОРСТУХ]{0,2}$/,
    replace: /[^АВЕКМНОРСТУХ]/g,
    noticeError: {
      smallText: 'Используйте русские буквы',
      normalText: 'А, В, Е, К, М, Н, О, Р, С, Т, У, Х',
    },
  },
  number: {
    regex: /^\d{0,3}$/,
    replace: /\D/g,
    noticeError: {
      smallText: 'Введите цифру',
    },
  },
  region: {
    regex: /^\d{0,3}$/,
    replace: /\D/g,
    noticeError: {
      smallText: 'Введите цифру',
    },
  },
};

function SearchAuto() {
  const [series1, setSeries1] = useState('');
  const [number, setNumber] = useState('');
  const [series2, setSeries2] = useState('');
  const [region, setRegion] = useState('');

  const handleInput = (e, name) => {
    const config = validationConfig[name];
    let value = e.target.value.toUpperCase();

    value = value
      .split('')
      .map((c) => latinToCyrillic[c] || c)
      .join('');

    config.regex.lastIndex = 0;
    if (value && !config.regex.test(value)) {
      value = value.replace(config.replace, '');
    }

    switch (name) {
      case 'series1':
        setSeries1(value);
        if (value.length === 1) {
          document.querySelector('[name="number"]').focus();
        }
        break;
      case 'number':
        setNumber(value);
        if (value.length === 3) {
          document.querySelector('[name="series2"]').focus();
        }
        break;
      case 'series2':
        setSeries2(value);
        if (value.length === 2) {
          document.querySelector('[name="region"]').focus();
        }
        break;
      case 'region':
        setRegion(value);
        break;
      default:
        break;
    }
  };

  const handlePaste = (e, name) => {
    e.preventDefault();
    const text = e.clipboardData.getData('Text');
    let value = text.replace(/\s/g, '').replace(/rus/gi, '').substr(0, 9).toUpperCase();
    value = value
      .split('')
      .map((c) => latinToCyrillic[c] || c)
      .join('');

    // Проверка на формат: буква + 3 цифры + 2 буквы + (регион)
    if (/^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}/.test(value)) {
      setSeries1(value.substr(0, 1));
      setNumber(value.substr(1, 3));
      setSeries2(value.substr(4, 2));
      setRegion(value.substr(6, 3) || region);
      document.querySelector('[name="region"]').focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (series1.length < 1 || number.length < 3 || series2.length < 2 || region.length < 2) {
      alert('не так');
    } else {
      alert(`Отправка: ${series1}${number}${series2} ${region}`);
    }
  };

  const handleKeyDown = (e, name, prev, next) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (prev && e.target.selectionStart === 0) {
        e.preventDefault();
        prev.value = prev.value.slice(0, -1);
        prev.focus();
      }
    } else if (e.key === 'ArrowLeft' && prev) {
      if (e.target.selectionStart === 0) {
        e.preventDefault();
        prev.selectionStart = prev.value.length;
        prev.focus();
      }
    } else if (e.key === 'ArrowRight' && next) {
      if (e.target.selectionEnd === e.target.value.length) {
        e.preventDefault();
        next.selectionStart = 0;
        next.focus();
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-[240px] h-[55px] border-solid border-1 rounded-[10px] mb-5">
          <div className="flex items-center w-[185px] border-r border-r-gray-900">
            <div className="flex gap-[10px] text-2xl pl-2.5 pr-5">
              <input
                className="w-5 focus:outline-none border-b border-gray-400 text-center placeholder-[#CCCCCC]"
                type="text"
                name="series1"
                maxLength="1"
                placeholder="o"
                value={series1}
                onChange={(e) => handleInput(e, 'series1')}
                onPaste={(e) => handlePaste(e, 'series1')}
                onKeyDown={(e) =>
                  handleKeyDown(e, 'series1', null, document.querySelector('[name="number"]'))
                }
              />
              <input
                className="w-11 focus:outline-none border-b border-gray-400 text-center placeholder-[#CCCCCC]"
                type="text"
                name="number"
                maxLength="3"
                placeholder="000"
                value={number}
                onChange={(e) => handleInput(e, 'number')}
                onPaste={(e) => handlePaste(e, 'number')}
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    'number',
                    document.querySelector('[name="series1"]'),
                    document.querySelector('[name="series2"]'),
                  )
                }
              />
              <input
                className="w-11 focus:outline-none border-b border-gray-400 text-center placeholder-[#CCCCCC]"
                type="text"
                name="series2"
                maxLength="о"
                placeholder="oo"
                value={series2}
                onChange={(e) => handleInput(e, 'series2')}
                onPaste={(e) => handlePaste(e, 'series2')}
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    'series2',
                    document.querySelector('[name="number"]'),
                    document.querySelector('[name="region"]'),
                  )
                }
              />
              <div className="flex gap-1.5 items-center flex-col">
                <input
                  className="text-[14px] w-6 focus:outline-none text-center placeholder-[#222222]"
                  type="text"
                  name="region"
                  maxLength="3"
                  placeholder="00"
                  value={region}
                  onChange={(e) => handleInput(e, 'region')}
                  onPaste={(e) => handlePaste(e, 'region')}
                  onKeyDown={(e) =>
                    handleKeyDown(e, 'region', document.querySelector('[name="series2"]'), null)
                  }
                />
                <div className="w-4 h-2">
                  <img className="object-cover" src={russia} alt="флаг" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="h-full w-full flex items-center justify-center">
            <img src={Union} alt="" />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchAuto;
