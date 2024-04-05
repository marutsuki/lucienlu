import { FC, useRef } from "react"
import { useAppDispatch } from "../../store"
import {
    selectScrollContext,
    updateScrollContext,
} from "../navigation/scrollSlice"
import { useSelector } from "react-redux"
import GenericSvg from "../../components/symbols/SvgSymbols"

const Intro: FC<object> = () => {
    const dispatch = useAppDispatch()
    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollContext = useSelector(selectScrollContext)

    if (scrollContext.context === "Intro") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const toNextSection = () => {
        dispatch(updateScrollContext("AboutMe"))
    }

    return (
        <section
            ref={sectionRef}
            className="select-none bg-backdrop h-screen bg-cover grid place-items-center border-black border-[16px]"
        >
            <div
                className="absolute h-64 bg-gradient-to-t from-primary to-transparent w-full bottom-0 left-0 cursor-pointer"
                onClick={toNextSection}
            />
            <svg
                className="absolute translate-x-[-50%] bottom-0 left-1/2 animate-bounce pointer-events-none"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="white"
            >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>

            <div className="mb-24">
                <h1 className="text-48 laptop:text-[76px] p-4 [text-shadow:_0_3px_4px_rgb(0_0_0_/_100%)]">
                    Hello, I&apos;m Lucien
                </h1>
                <div className="flex flex-row justify-center">
                    <GenericSvg
                        onClick={() =>
                            window.open(
                                "https://github.com/marutsuki",
                                "_blank"
                            )
                        }
                        className="m-2 cursor-pointer"
                        size={48}
                        symbol="GitHub"
                    />
                    <GenericSvg
                        onClick={() =>
                            window.open(
                                "https://linkedin.com/in/lucienlu7789",
                                "_blank"
                            )
                        }
                        className="m-2 cursor-pointer"
                        size={48}
                        symbol="LinkedIn"
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro
