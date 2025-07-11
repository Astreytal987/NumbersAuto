import React, {useEffect, useState} from 'react'
import SortDown from "../../../../public/SortDown.svg"
import SortUp from "../../../../public/SortUp.svg"
import useStore from "../../../app/store.js";

export default function Filter() {
    const [valueFrom, setValueFrom] = useState("");
    const [valueEnd, setValueEnd] = useState("");
    const [error, setError] = useState(false);
    const [downUpSort, setDownUpSort] = useState(false);
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

    const funSubmit = () => {
        const numFrom = valueFrom === "" ? 0 : Number(valueFrom);
        const numEnd = valueEnd === "" ? 999999999 : Number(valueEnd);
        if (numFrom > numEnd) {
            setError(true);
        } else {
            setError(false);
            updateAutoFilter({
                From: numFrom,
                End: numEnd,
                Sort: downUpSort
            });
        }
    }

    useEffect(() => {
        funSubmit();
    }, [valueFrom, valueEnd]);

    return (
        <div className="mr-2">
            <p>Цена, ₽</p>
                <div className="flex text-center justify-center mb-9 mt-[18px]">
                    <div className={`flex flex-row text-center h-[42px]
                        border-1 rounded-[10px] ${error && 'border-red-500'}`}>
                        <input type="number" value={valueFrom} onChange={handleChangeFrom} onKeyPress={handleKeyPress} className="p-[10px] min-w-18 w-full" placeholder="От"/>
                        <input type="number" value={valueEnd} onChange={handleChangeEnd} onKeyPress={handleKeyPress} className="p-[10px] border-l min-w-18 w-full" placeholder="До"/>
                    </div>
                    <button type="button"
                            onClick={() => {
                                setDownUpSort(!downUpSort)
                                funSubmit()}
                            }
                            className="h-[24px] min-w-[24px] m-[10px]">
                        <img src={downUpSort ? SortDown : SortUp} alt="" />
                    </button>
                </div>
        </div>
    );
}