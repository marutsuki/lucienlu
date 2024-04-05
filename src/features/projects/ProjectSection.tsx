import { FC, useEffect, useState, useMemo, useRef } from "react";
import { repoConfig } from "./config";
import GridMap from "../../components/GridMap";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const ProjectSection: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const gridLayout = useMemo(
        () =>
            screenWidth > 1024
                ? [
                      ["g1", "g3", "g5"],
                      ["g1", "g3", "g5"],
                      ["g2", "g3", "g6"],
                      ["g2", "g3", "g6"],
                      ["g2", "g4", "g4"],
                  ]
                : [
                      ["g1", "g2"],
                      ["g3", "g4"],
                      ["g5", "g6"],
                  ],
        [screenWidth]
    );
    useEffect(() => {
        const el = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", el);
        return () => window.removeEventListener("resize", el);
    }, []);
    if (scrollContext.context === "Projects") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <section
            ref={sectionRef}
            className={`grid-rows-auto relative grid grid-cols-1 place-items-center overflow-hidden text-xl laptop:h-screen desktop:grid-cols-2 desktop:grid-rows-1`}
        >
            <div>
                <h1 className="select-none font-code text-5xl laptop:text-6xl">
                    Project Showcase
                </h1>
            </div>
            <div className="laptop:m-8">
                <GridMap grid={gridLayout}>
                    {repoConfig.repos.slice(0, 6).map((repo, index) => (
                        <div
                            className="border-secondary group relative m-2 flex cursor-pointer select-none flex-col justify-between
                        overflow-hidden border-2 bg-primary p-4 duration-300 hover:scale-x-105 desktop:m-4"
                            key={"project" + index}
                            onClick={() => window.open(repo.url, "_blank")}
                            style={{
                                gridArea: "g" + (index + 1).toString(),
                            }}
                        >
                            <div className="absolute inset-0 -z-10 bg-sunset opacity-0 duration-200 group-active:opacity-100" />
                            <div>
                                <div className="flex justify-between">
                                    <h1 className="text-lg duration-300 group-hover:drop-shadow-[0px_0px_1px_rgba(255,255,255,1)] desktop:mb-4 desktop:text-xl">
                                        {repo.title}
                                    </h1>
                                    <GenericSvg
                                        symbol="Link"
                                        size={24}
                                        fill="white"
                                    />
                                </div>
                                <p className="text-left font-code text-sm laptop:text-base desktop:text-lg">
                                    {repo.description}
                                </p>
                            </div>

                            <div>
                                {repo.preview && (
                                    <img
                                        className="relative hidden laptop:block"
                                        src={repo.preview}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </GridMap>
            </div>
        </section>
    );
};

export default ProjectSection;
