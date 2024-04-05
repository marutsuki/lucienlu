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
    const gridLayout = useMemo(() => screenWidth > 1024 ? 
    [
        ["g1", "g3", "g5"],
        ["g1", "g3", "g5"],
        ["g2", "g3", "g6"],
        ["g2", "g3", "g6"],
        ["g2", "g4", "g4"]
    ]
    : [
        ["g1", "g2"],
        ["g3", "g4"],
        ["g5", "g6"]
    ], [screenWidth]);
    useEffect(() => {
        const el = () => {
            console.log('reisze');
            console.log(screen.width);
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", el);
        return () => window.removeEventListener("resize", el);
    }, []);
    if (scrollContext.context === "Projects") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return <section ref={sectionRef} className={`relative laptop:h-screen grid place-items-center text-xl desktop:grid-cols-2 desktop:grid-rows-1 grid-cols-1 grid-rows-auto overflow-hidden`}>
        <div>
            <h1 className="font-code select-none">Project Showcase</h1>
        </div>
        <div className="laptop:m-8">
            <GridMap grid={gridLayout}>
                {
                    repoConfig.repos.slice(0, 6).map((repo, index) => <div
                        className="relative group border-2 bg-primary border-secondary desktop:m-4 m-2 p-4 select-none
                        overflow-hidden flex flex-col justify-between cursor-pointer duration-300 hover:scale-x-105"
                        key={"project" + index}
                        onClick={() => window.open(repo.url, "_blank")}
                        style={{
                            gridArea: "g" + (index + 1).toString()
                        }}>
                        <div className="absolute inset-0 -z-10 opacity-0 group-active:opacity-100 bg-sunset duration-200"/>
                        <div>
                            <div className="flex justify-between">
                                <h1 className="desktop:text-xl desktop:mb-4 text-lg group-hover:drop-shadow-[0px_0px_1px_rgba(255,255,255,1)] duration-300">{ repo.title }</h1>
                                <GenericSvg symbol="Link" size={24} fill="white"/>
                            </div>
                            <p className="text-left text-sm laptop:text-base desktop:text-lg font-code">{ repo.description }</p>
                        </div>
                        
                        <div>
                            { repo.preview && <img className="hidden laptop:block relative" src={repo.preview}/> }
                        </div>
                    </div>)
                }
            </GridMap>
        </div>
    </section>
}

export default ProjectSection;