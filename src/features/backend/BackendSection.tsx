import { FC, ReactNode, useRef } from "react";
import Computer from "./Computer";
import { useAppDispatch } from "../../store";
import { selectComputerPage, updatePage } from "./computerSlice";
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
    useMockRouter(
        Object.values(backendSectionConfig).reduce(
            (prev, curr) => ({
                ...prev,
                [curr.url]: curr.content,
            }),
            {} as Record<string, ReactNode | ReactNode[]>
        )
    );

    if (scrollContext.context === "Backend") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative my-4 grid h-screen select-none grid-cols-1 grid-rows-2 place-items-center overflow-hidden text-xl laptop:grid-rows-1 desktop:grid-cols-2"
        >
            <div className="absolute top-48 flex items-center desktop:static">
                <Index
                    funcs={backendSectionConfig.map((entry) => ({
                        id: entry.label,
                        label: entry.label,
                        func: () =>
                            dispatch(
                                updatePage({
                                    id: entry.label,
                                    url: entry.url,
                                    content: entry.content,
                                })
                            ),
                    }))}
                    active={pageId}
                    className="hidden laptop:block"
                    activeItemClassName="drop-shadow-[0_0_5px_rgba(255,255,255,1)] before:w-full"
                    itemClassName={`hover:bg- relative group p-2 m-2 transition-all cursor-pointer
                    before:absolute before:bottom-0 before:left-0 before:content-[''] before:h-1 before:w-0 before:bg-content before:duration-300`}
                    itemChildren={
                        <div className="absolute inset-0 -z-10 bg-sunset opacity-0 shadow-inner duration-300 content-[''] group-hover:opacity-50" />
                    }
                />
                <Computer />
            </div>
            <div className="absolute top-8 laptop:right-8 desktop:static">
                <h1 className="text-5xl laptop:text-6xl">What I use</h1>
                <h2 className="font-code text-3xl">
                    backend<span className="animate-blink">_</span>
                </h2>
            </div>
        </section>
    );
};

export default BackendSection;
