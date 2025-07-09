import React, { useState } from 'react'
import SortDown from "../../../../public/SortDown.svg"
import useStore from "../../../app/store.js";

export default function Filter() {
    const [valueFrom, setValueFrom] = useState("");
    const [valueEnd, setValueEnd] = useState("");
    const [error, setError] = useState(false);
    const updateAutoFilter = useStore((state) => state.updateAutoFilter)


    const handleKeyPress = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleChangeFrom = (e) => {
        const onlyNums = e.target.value.replace(/\D+/g, "");
        setValueFrom(onlyNums);
    };

    const handleChangeEnd = (e) => {
        const onlyNums = e.target.value.replace(/\D+/g, "");
        setValueEnd(onlyNums);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numFrom = valueFrom === "" ? 0 : Number(valueFrom);
        const numEnd = valueEnd === "" ? 999999999 : Number(valueEnd);
        if (numFrom > numEnd) {
            setError(true);
        } else {
            setError(false);
            updateAutoFilter({
                From: numFrom,
                End: numEnd
            });
        }
    }

    return (
        <div>
            <p>Цена, ₽</p>
            <form onSubmit={handleSubmit}>
                <div className="flex text-center justify-center">
                    <div className={`flex flex-row text-center h-[42px]
                        border-1 rounded-[10px] mb-5 ${error && 'border-red-500'}`}>
                        <input type="number" value={valueFrom} onChange={handleChangeFrom} onKeyPress={handleKeyPress} className="p-[10px] min-w-18 w-full" placeholder="От"/>
                        <input type="number" value={valueEnd} onChange={handleChangeEnd} onKeyPress={handleKeyPress} className="p-[10px] border-l min-w-18 w-full" placeholder="До"/>
                    </div>
                    <button type="submit" className="h-[24px] w-[24px] m-[10px] max-w-full">
                        <img className="object-cover h-[24px] w-[24px] max-w-full" src={SortDown} alt="" />
                    </button>
                </div>
            </form>
        </div>
    );
}