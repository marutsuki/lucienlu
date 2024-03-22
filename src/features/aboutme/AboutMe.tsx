import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const AboutMe: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);

    if (scrollContext.context === "AboutMe") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return <section className="h-screen" ref={sectionRef}>
        <h1>
            Hello world
        </h1>
    </section>
}

export default AboutMe;