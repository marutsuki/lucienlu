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
            className="relative my-4 grid h-screen grid-cols-1 grid-rows-2 place-items-center laptop:grid-cols-2 laptop:grid-rows-1"
            ref={sectionRef}
        >
            <div className="m-8 mb-4 text-left text-base leading-loose laptop:text-lg">
                <h1>
                    Software Engineer
                </h1>
                <h2>
                    Full Stack Developer
                </h2>
                <h2 className="text-right">
                    Java/TypeScript
                </h2>
                <div className="h-4" />
                <h1 className="text-right">
                    Passions
                </h1>
                <h2 className="text-right">
                    Technology, UI/UX, Cloud
                </h2>
                <div className="h-4" />
                <h1>
                    Hobbies
                </h1>
                <h2 className="text-left">
                    Digital Artist
                </h2>
                <h2 className="text-right">
                    Musician, Guitarist, Vocalist
                </h2>
            </div>
            <div className="relative overflow-hidden after:content-normal after:w-full after:h-full after:inset-0 after:absolute after:shadow-[inset_0_0_16px_16px_rgb(25,25,25)]">
                <img className="w-60 absolute laptop:w-96" src="Illustration2.png" />
                <img className="animate-wiggle w-48 relative laptop:w-96" src="Illustration.png" />
            </div>
        </section>
    );
};

export default AboutMe;
