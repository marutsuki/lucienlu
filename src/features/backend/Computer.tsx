import { FC, KeyboardEvent, ReactNode, useEffect, useState } from "react";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useAppDispatch } from "../../store";
import { selectComputerContent, selectComputerUrl, updateUrl } from "./computerSlice";
import { useSelector } from "react-redux";

type ComputerProps = {
    children?: ReactNode;
}

const Computer: FC<ComputerProps> = () => {
    const content = useSelector(selectComputerContent);
    const url = useSelector(selectComputerUrl);
    const [input, setInput] = useState(url);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        setInput(url);
    }, [url]);

    const search = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            dispatch(updateUrl(input));
    }
    return <div className="relative border-8 border-content w-[640px] h-[360px] py-2 px-4
        before:content-[''] before:bottom-[-4rem] before:h-12 before:w-12 before:translate-x-[-50%] before:absolute before:bg-content 
        after:content-[''] after:bottom-[-6.5rem] after:h-8 after:w-36 after:translate-x-[-50%] after:absolute after:bg-content">
        <div className="relative border-b w-full flex">
            <GenericSvg className="mx-2 " symbol="Search" fill="white" size={24}/>
            <input className="border-none bg-transparent relative w-full focus:outline-none mr-8" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={search}/>
        </div>
        <div className="font-code flex-col p-8 overflow-y-auto">
        { content }
        </div>
    </div>
}

export default Computer;