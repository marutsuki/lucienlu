import { FC, useRef } from "react";
import { repoConfig } from "./config";
import GridMap from "../../components/GridMap";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const ProjectSection: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);
    if (scrollContext.context === "Projects") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return <section ref={sectionRef} className={`relative h-screen grid place-items-center text-xl grid-cols-2 overflow-hidden`}>
        <div>
            <h1 className="font-code select-none">Project Showcase</h1>
        </div>
        <div className="pr-8">
            <GridMap grid={[
                ["g1", "g3", "g5"],
                ["g1", "g3", "g5"],
                ["g2", "g3", "g6"],
                ["g2", "g3", "g6"],
                ["g2", "g4", "g4"],
            ]}>
                {
                    repoConfig.repos.slice(0, 6).map((repo, index) => <div
                        className="relative group border-2 bg-primary border-secondary m-4 p-4 select-none
                        overflow-hidden flex flex-col justify-between cursor-pointer duration-300 hover:scale-x-105
                        "
                        key={'project' + index}
                        onClick={() => window.open(repo.url, "_blank")}
                        style={{
                            gridArea: 'g' + (index + 1).toString()
                        }}>
                        <div className="absolute inset-0 -z-10 opacity-0 group-active:opacity-100 bg-sunset duration-200"/>
                        <div>
                            <div className="flex justify-between">
                                <h1 className="text-xl mb-4 group-hover:drop-shadow-[0px_0px_1px_rgba(255,255,255,1)] duration-300">{ repo.title }</h1>
                                <GenericSvg symbol="Link" size={24} fill="white"/>
                            </div>
                            <p className="text-left text-lg font-code">{ repo.description }</p>
                        </div>
                        
                        <div>
                            { repo.preview && <img className="relative" src={repo.preview}/> }
                        </div>
                    </div>)
                }
            </GridMap>
        </div>
    </section>
}

export default ProjectSection;