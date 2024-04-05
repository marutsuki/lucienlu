import {
    FC,
    KeyboardEvent,
    ReactNode,
    useEffect,
    useState,
    HTMLProps,
    useRef,
} from "react"
import GenericSvg from "../../components/symbols/SvgSymbols"
import { useAppDispatch } from "../../store"
import {
    selectComputerContent,
    selectComputerUrl,
    updateUrl,
} from "./computerSlice"
import { useSelector } from "react-redux"

type ComputerProps = {
    children?: ReactNode
} & HTMLProps<HTMLDivElement>

const Computer: FC<ComputerProps> = ({ className, ...props }) => {
    const content = useSelector(selectComputerContent)
    const url = useSelector(selectComputerUrl)
    const searchRef = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState(url)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setInput(url)
        if (searchRef.current) {
            searchRef.current.scrollLeft = searchRef.current.scrollWidth
        }
    }, [url])

    const search = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") dispatch(updateUrl(input))
    }
    return (
        <div
            className={`${className} relative border-8 border-content m-auto w-[240px] h-[360px] laptop:w-[640px] laptop:h-[360px] laptop:py-2 laptop:px-4
        before:absolute after:absolute before:bg-content after:bg-content 
        before:bottom-[100%] before:h-4 before:w-[240px] before:-left-2 before:laptop:absolute
        after:bottom-[1rem] after:-translate-x-1/2 after:h-8 after:w-8 after:rounded-full
        before:laptop:bottom-[-4rem] before:laptop:left-1/2 before:laptop:h-12 before:laptop:w-12 before:laptop:-translate-x-1/2
        after:laptop:bottom-[-6.5rem] after:laptop:h-8 after:laptop:w-36 after:laptop:-translate-x-1/2 after:laptop:rounded-none`}
            {...props}
        >
            <div className="relative border-b w-full flex">
                <GenericSvg
                    className="mx-2 "
                    symbol="Search"
                    fill="white"
                    size={24}
                />
                <input
                    ref={searchRef}
                    className="border-none bg-transparent relative w-full focus:outline-none mr-2 laptop:mr-8 text-base laptop:text-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={search}
                />
            </div>
            <div className="font-code flex-col text-base laptop:text-lg p-8 overflow-y-auto [&>h1]:text-2xl laptop:[&>h1]:text-3xl">
                {content}
            </div>
        </div>
    )
}

export default Computer
