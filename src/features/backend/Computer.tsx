import {
    FC,
    KeyboardEvent,
    ReactNode,
    useEffect,
    useState,
    HTMLProps,
    useRef,
} from "react";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useAppDispatch } from "../../store";
import {
    selectComputerContent,
    selectComputerUrl,
    updateUrl,
} from "./computerSlice";
import { useSelector } from "react-redux";

type ComputerProps = {
    children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Computer: FC<ComputerProps> = ({ className, ...props }) => {
    const content = useSelector(selectComputerContent);
    const url = useSelector(selectComputerUrl);
    const searchRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState(url);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setInput(url);
        if (searchRef.current) {
            searchRef.current.scrollLeft = searchRef.current.scrollWidth;
        }
    }, [url]);

    const search = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") dispatch(updateUrl(input));
    };
    return (
        <div
            className={`${className} relative m-auto h-[360px] w-[240px] border-8 border-content before:absolute before:-left-2 before:bottom-[100%] before:h-4
        before:w-[260px] before:bg-content after:absolute after:bottom-[1rem] 
        after:h-8 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-content
        laptop:h-[360px] laptop:w-[640px] laptop:px-4 laptop:py-2 before:laptop:absolute
        before:laptop:bottom-[-4rem] before:laptop:left-1/2 before:laptop:h-12 before:laptop:w-12 before:laptop:-translate-x-1/2
        after:laptop:bottom-[-6.5rem] after:laptop:h-8 after:laptop:w-36 after:laptop:-translate-x-1/2 after:laptop:rounded-none`}
            {...props}
        >
            <div className="relative flex w-full border-b">
                <GenericSvg
                    className="mx-2 "
                    symbol="Search"
                    fill="white"
                    size={24}
                />
                <input
                    ref={searchRef}
                    className="relative mr-2 w-full border-none bg-transparent text-base focus:outline-none laptop:mr-8 laptop:text-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={search}
                />
            </div>
            <div className="flex-col overflow-y-auto h-[260px] laptop:h-auto p-2 laptop:p-8 font-code text-sm laptop:text-lg [&>h1]:text-2xl laptop:[&>h1]:text-3xl">
                {content}
            </div>
        </div>
    );
};

export default Computer;
