import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const ContactSection: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);

    if (scrollContext.context === "Contact") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative grid h-screen select-none laptop:grid-cols-2 grid-rows-1 place-items-center overflow-hidden text-xl"
        >
            <div className="">
                <ul className="flex flex-col laptop:items-end [&>li]:m-2 max-tablet:[&>li]:flex [&>li]:flex-col-reverse">
                    <li className="">
                        <a
                            href="mailto:lucien.7789@gmail.com"
                            className="cursor-pointer select-text"
                        >
                            marutsuki.io@gmail.com
                        </a>
                        <span className="ml-4 font-code text-2xl tracking-widest">
                            EMAIL
                        </span>
                    </li>
                </ul>
            </div>
            <div className="absolute top-8 laptop:left-8 desktop:static">
                <h1 className="font-code text-5xl laptop:text-6xl">
                    Contact Me<span className="animate-blink max-tablet:hidden">_</span>
                </h1>
            </div>
        </section>
    );
};

export default ContactSection;
