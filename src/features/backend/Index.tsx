import { FC, useState } from "react";

type IndexProps = {
    funcs: Record<string, () => void>;
}
const Index: FC<IndexProps> = ({ funcs }: IndexProps) => {
    const [active, setActive] = useState(-1);

    const onClick = (index: number, func: () => void) => {
        setActive(index);
        func();
    }
    return <ul className="m-8 flex-col text-left leading-9">
        {
            Object.entries(funcs).map((tool, index) => <li key={`backend-tool-${tool[0]}`} 
                className={`${active === index ? "drop-shadow-[0_0_5px_rgba(255,255,255,1)] before:w-full" : 
                "hover:bg-gray-700"} relative group p-2 m-2 transition-all cursor-pointer
                before:absolute before:bottom-0 before:content-[''] before:h-1 before:w-0 before:bg-white before:duration-300`} 
                onClick={() => onClick(index, tool[1])}>{ tool[0] }
                </li>)
        }
    </ul>
}

export default Index;