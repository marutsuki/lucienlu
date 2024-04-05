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
    return (
        <section
            className="relative grid h-screen grid-cols-1 grid-rows-2 place-items-center laptop:grid-cols-2 laptop:grid-rows-1 my-4"
            ref={sectionRef}
        >
            <p className="m-8 mb-4 text-left text-base leading-loose laptop:max-w-96 laptop:text-lg">
                I&apos;m a graduate from the University of Melbourne, passionate
                about technology and currently working as a full stack developer
                in Australia.
                <div className="h-4" />
                In my own time, I&apos;m a digitial artist and I like to
                sometimes experiment with music.
            </p>
            <img className="w-48 laptop:w-96" src="brs1.png" />
        </section>
    );
};

export default AboutMe;
