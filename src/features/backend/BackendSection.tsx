import { FC, ReactNode, useRef } from "react";
import Computer from "./Computer";
import { useAppDispatch } from "../../store";
import { selectComputerPage, updateContent, updatePage } from "./computerSlice";
import { backendSectionConfig } from "./config";
import { useMockRouter } from "./hooks";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";
import Index from "../../components/Index";

const BackendSection: FC<object> = () => {
    const dispatch = useAppDispatch();
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);
    const pageId = useSelector(selectComputerPage);
    useMockRouter(Object.values(backendSectionConfig).reduce((prev, curr) => ({
        ...prev,
        [curr.url]: curr.content
    }), {} as Record<string, ReactNode | ReactNode[]>));

    if (scrollContext.context === "Backend") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return <section ref={sectionRef} className="relative h-screen grid place-items-center text-xl grid-cols-2 grid-rows-1 overflow-hidden">
        <div className="flex items-center">
            <Index funcs={backendSectionConfig.map(entry => ({
                id: entry.label,
                label: entry.label,
                func: () => dispatch(updatePage({
                    id: entry.label,
                    url: entry.url,
                    content: entry.content,
                })), 
            }))}
                active={pageId}
                activeItemClassName="drop-shadow-[0_0_5px_rgba(255,255,255,1)] before:w-full"
                itemClassName={`hover:bg-gray-700"} relative group p-2 m-2 transition-all cursor-pointer
                before:absolute before:bottom-0 before:content-[''] before:h-1 before:w-0 before:bg-white before:duration-300`} />
            <Computer/>
        </div>
        <div>
            <h1>What I use</h1>
            <h2 className="font-code text-3xl">backend<span className="animate-blink">_</span></h2>
        </div>
    </section>
}

export default BackendSection;