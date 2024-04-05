import { FC, useRef } from "react";
import ContentWheel from "../../components/ContentWheel";
import GenericSvg from "../../components/symbols/SvgSymbols";
import FrontendSkill from "./FrontendSkill";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";
import { useCookie } from "../../hooks";
import { isMobile } from "../../util/screen";

const FrontendSection: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);
    const [revisit, setRevisit] = useCookie("revisit-frontend");

    if (scrollContext.context === "Frontend") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative grid h-screen select-none grid-cols-2 grid-rows-1 place-items-center overflow-hidden text-xl my-4"
        >
            <div className="absolute top-8 laptop:left-8 desktop:static">
                <h1 className="text-5xl laptop:text-6xl">What I use</h1>
                <h2 className="font-code text-3xl">
                    frontend<span className="animate-blink">_</span>
                </h2>
            </div>
            <div
                className="group/frontend-layout absolute right-0
        before:absolute before:bottom-0 before:right-0 before:z-10 before:h-4 before:w-full before:bg-[linear-gradient(to_bottom,transparent,rgba(25,25,25,1)_40%)] before:desktop:h-full
        before:desktop:w-16
        before:desktop:bg-[linear-gradient(to_right,transparent,rgba(25,25,25,1)_40%)]"
            >
                <div className="absolute left-5 top-1/2 animate-bounce font-code text-xl hidden laptop:block laptop:text-xl">
                    Move your cursor here...
                </div>
                {!revisit && (
                    <h2
                        className="absolute right-[60vh] top-40 z-10 animate-bounce cursor-pointer rounded-xl bg-overlay p-4 font-code opacity-0 shadow-md shadow-overlay duration-300 group-hover/frontend-layout:opacity-100"
                        onClick={() => setRevisit("true", 24 * 60)}
                    >
                        Click the arrows or use your scroll wheel.
                        <GenericSvg
                            className="inline"
                            size={36}
                            fill="white"
                            symbol="Arrow"
                        />
                    </h2>
                )}
                <ContentWheel
                    className="absolute right-[-60vh] top-[50vh] duration-300 laptop:top-0 laptop:group-hover/frontend-layout:right-[-40vh]"
                    before={
                        <>
                            <div className="absolute inset-[30%] rounded-full bg-black" />
                            <div className="absolute inset-[30%] rounded-full bg-[rgba(255,255,255,0.8)]" />
                            <div className="absolute inset-[32%] rounded-full bg-[rgba(255,255,255,0.8)]" />
                            <div className="absolute inset-[37%] rounded-full bg-[rgba(255,255,255,0.8)]" />
                            <div className="absolute inset-[40%] rounded-full bg-black" />
                            <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.1)]" />
                        </>
                    }
                    wheelRotateSpeed={4}
                    startingRotation={!isMobile() ? 180 : 225}
                    showIndicators={true}
                    wheelClassName="bg-cdBg"
                >
                    <FrontendSkill
                        title="React"
                        description="I've mainly worked with React both professionally and as a student, it is one of my most confident skills."
                        content={
                            <GenericSvg
                                className="duration-300 group-hover:fill-[rgba(50,255,225,1)]"
                                symbol={"React"}
                                size={200}
                            />
                        }
                        className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(50,255,225,1)]"
                    />
                    <FrontendSkill
                        title="Redux"
                        description="Butter to the bread that is React. I have extensive experience working with this state management library."
                        content={
                            <GenericSvg
                                className="duration-300 group-hover:fill-[rgba(50,255,255,1)]"
                                symbol={"Redux"}
                                size={200}
                            />
                        }
                        className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(50,255,255,1)]"
                    />
                    <FrontendSkill
                        title="Tailwind"
                        description="Although Tailwind is a very opinionated library, I've found it to really speed up my development time."
                        content={
                            <GenericSvg
                                className="duration-300 group-hover:fill-[rgba(100,255,255,1)]"
                                symbol={"Tailwind"}
                                size={200}
                            />
                        }
                        className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(100,255,255,1)]"
                    />
                    <FrontendSkill
                        title="Typescript"
                        description="My main programming language, it gives me confidence in my code through its powerful typing system."
                        content={
                            <GenericSvg
                                className="duration-300 group-hover:fill-[rgba(100,244,255,1)]"
                                symbol={"Typescript"}
                                size={200}
                            />
                        }
                        className="group duration-300 hover:drop-shadow-[0_0px_35px_rgba(100,244,255,1)]"
                    />
                </ContentWheel>
            </div>
        </section>
    );
};

export default FrontendSection;
