import { FC, ReactNode } from "react";
import Computer from "./Computer";
import Index from "./Index";
import { useAppDispatch } from "../../store";
import { updateUrl } from "./computerSlice";
import { backendSectionConfig } from "./config";
import { useMockRouter } from "./hooks";

const BackendSection: FC<object> = () => {
    const dispatch = useAppDispatch();
    useMockRouter(Object.values(backendSectionConfig).reduce((prev, curr) => ({
        ...prev,
        [curr.url]: curr.content
    }), {} as Record<string, ReactNode | ReactNode[]>));
    return <section className="relative h-screen grid place-items-center text-xl grid-cols-2 grid-rows-1 overflow-hidden">
        <div className="flex items-center">
            <Index funcs={Object.entries(backendSectionConfig).reduce((prev, curr) => ({
                ...prev,
                [curr[0]]: () => dispatch(updateUrl(curr[1].url))
            }), {} as Record<string, () => void>)}/>
            <Computer/>
        </div>
        <div>
            <h1>What I use</h1>
            <h2 className="font-code text-3xl">backend<span className="animate-blink">_</span></h2>
        </div>
    </section>
}

export default BackendSection;