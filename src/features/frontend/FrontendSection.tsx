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
            className="relative my-4 grid h-screen select-none desktop:grid-cols-leftRightRight ldesktop:grid-cols-2 grid-rows-1 place-items-center overflow-hidden text-xl"
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
                <div className="absolute left-5 top-1/2 hidden animate-bounce font-code text-xl laptop:block laptop:text-xl">
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
                        description="One of my most familiar tools/libraries out there, within an hour I can easily spin up a quick and slick UI."
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
                        description="Butter to the bread that is React. My experience is battle scarred with all the addons from the extensive toolkit."
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
                        description="My go to CSS library for any React app. It's like a box of legos, but for web design."
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
                        description="My main programming language, I hope you don't go insane over my crazy type definitions."
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
