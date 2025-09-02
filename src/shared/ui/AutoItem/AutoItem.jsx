import number from '../../../../public/number.jpg';
import {useEffect, useState} from "react";

function AutoItem({ price, status, contact, numberAuto, excess, id }) {
  const href = contact.startsWith('@')
      ? `https://t.me/${contact.slice(1)}`
      : `tel:${contact}`;

  const [imgSrc, setImgSrc] = useState(number)
  const [isLoadingimg, setIsLoadingimg] = useState(false)

  useEffect(() => {
    const loadImgAuto = () => {
      const img = new Image();
      img.src = `https://avtonomerspb.ru/photo/${id}.jpg`;

      img.onload = () => {
        setImgSrc(img.src);
        setIsLoadingimg(true)
      };

      img.onerror = () => {
        setImgSrc(number);
        setIsLoadingimg(false)
      };
    };

    loadImgAuto();
  }, []);

  const numberRaw = numberAuto.toLowerCase().replaceAll(' ', '')
  const regionNumber = numberRaw.substring(6);
  const mainNumber = numberRaw.substring(0, 6);

  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      <div className="overflow-hidden max-w-[225px] h-auto mb-[10px] bg-[#f2f2f2] rounded-[4px]">
        <div className="relative overflow-hidden">
            {isLoadingimg ? <img className={`object-cover transition-transform duration-300
             aspect-[5/3] w-full max-h-[200px] ${isEnlarged ? 'scale-150' : ''}`} src={imgSrc} onClick={toggleImageSize} alt="Плашка с номером" /> : <div className="flex bg-white aspect-[5/3] w-full max-h-[200px]"><img className="object-contain" src={imgSrc} alt="Плашка с номером" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl whitespace-nowrap">
            {numberAuto}
          </p></div>}
          <div>
            {status ? (
              <p className="itemStatus absolute bottom-1 left-1 bg-[#F9E282] rounded-[10px] p-[5px_10px] text-[#6D5600]">
                Продано
              </p>
            ) : (
              <p className="itemStatus absolute bottom-1 left-1 bg-[#D1FFE0] rounded-[10px] p-[5px_10px] text-[#315F40]">
                Продается
              </p>
            )}
          </div>
        </div>
        <div className="m-[20px_10px] flex flex-col gap-2">
            <div className="text-xl inline-flex font-semibold gap text-[#222222]"> <p>{mainNumber}</p> <p className="text-base font-normal text-[#444444]">{regionNumber}</p></div>
          <p className="text-2xl font-normal text-[#222222]">{price.toLocaleString()} ₽</p>
          <a className="text-[#1BA1E4] text-sm font-normal" href={href} target="_blank" rel="noopener noreferrer">
            {contact}
          </a>
          <p className="text-sm font-normal"><nobr>Перевес: <span className="text-[#222222] font-semibold">{excess ? "включен" : "не включен"}</span></nobr></p>
        </div>
      </div>
    </>
  );
}

export default AutoItem;
