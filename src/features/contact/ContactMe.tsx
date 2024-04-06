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
            className="relative grid h-screen select-none grid-cols-2 grid-rows-1 place-items-center overflow-hidden text-xl"
        >
            
            <div
                className=""
            >
                <ul className="flex flex-col items-end [&>li]:m-2">
                    <li>
                        <a href="mailto:lucienlu@melonbreads.com" className="select-text cursor-pointer">lucienlu@melonbreads.com</a><span className="font-code text-2xl tracking-widest ml-4">EMAIL</span>
                    </li>
                    <li>
                        <a href="tel:0468-435-818" className="select-text">(+61) 468 435 818</a><span className="font-code text-2xl tracking-widest ml-4">PHONE</span>
                    </li>
                </ul>
            </div>
            <div className="absolute top-8 laptop:left-8 desktop:static">
                <h1 className="font-code text-5xl laptop:text-6xl">Contact Me<span className="animate-blink">_</span></h1>
            </div>
        </section>
    );
};

export default ContactSection;
