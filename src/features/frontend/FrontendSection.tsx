import { FC, useRef } from "react";
import ContentWheel from "../../components/ContentWheel";
import GenericSvg from "../../components/symbols/SvgSymbols";
import FrontendSkill from "./FrontendSkill";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const FrontendSection: FC<object> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContext = useSelector(selectScrollContext);
  
  if (scrollContext.context === "Frontend") {
    if (sectionRef.current !== null) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

    return <section ref={sectionRef} className="select-none relative h-screen grid place-items-center text-xl grid-cols-2 grid-rows-1 overflow-hidden">
      <div>
        <h1>What I use</h1>
        <h2 className="font-code text-3xl">frontend<span className="animate-blink">_</span></h2>
      </div>
      <div className="group/frontend-layout absolute right-0
      before:content-[''] before:w-16 before:z-10 before:h-full before:right-0 before:absolute before:bg-[linear-gradient(to_right,transparent,rgba(25,25,25,1)_40%)]">
        <div className="font-code absolute text-2xl left-5 top-1/2 animate-bounce">
          Move your cursor here...
        </div>
        <ContentWheel className="absolute right-[-60vh] group-hover/frontend-layout:right-[-40vh] duration-300" 
          before={
            <>
              <div className="absolute inset-[30%] bg-black rounded-full"/>
              <div className="absolute inset-[30%] bg-[rgba(255,255,255,0.8)] rounded-full"/>
              <div className="absolute inset-[32%] bg-[rgba(255,255,255,0.8)] rounded-full"/>
              <div className="absolute inset-[37%] bg-[rgba(255,255,255,0.8)] rounded-full"/>
              <div className="absolute inset-[40%] bg-black rounded-full"/>
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] rounded-full"/>
              
            </>
          }
          wheelRotateSpeed={4} 
          startingRotation={180} 
          showIndicators={true}
          wheelClassName="bg-cdBg"
        >
          <FrontendSkill 
            title="React" 
            description="I've mainly worked with React both professionally and as a student, it is one of my most confident skills." 
            content={<GenericSvg className="group-hover:fill-[rgba(50,255,225,1)] duration-300" symbol={"React"} size={200}/>}
            className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(50,255,225,1)]"/>
          <FrontendSkill 
            title="Redux" 
            description="This is the butter to the bread that is React. I've always loved this central state management library and its great at coordinating data." 
            content={<GenericSvg className="group-hover:fill-[rgba(50,255,255,1)] duration-300" symbol={"Redux"} size={200}/>}
            className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(50,255,255,1)]"/>
          <FrontendSkill 
            title="Tailwind" 
            description="Although Tailwind is a very opinionated library, I've found it to really speed up my development time." 
            content={<GenericSvg className="group-hover:fill-[rgba(100,255,255,1)] duration-300" symbol={"Tailwind"} size={200}/>}
            className="duration-300 hover:drop-shadow-[0_0px_35px_rgba(100,255,255,1)]"/>
          <FrontendSkill 
            title="Typescript" 
            description="Typescript has to be the greatest invention when it comes to web development, it gives me confidence in what I code." 
            content={<GenericSvg className="group-hover:fill-[rgba(100,244,255,1)] duration-300" symbol={"Typescript"} size={200}/>}
            className="group duration-300 hover:drop-shadow-[0_0px_35px_rgba(100,244,255,1)]"/>
        </ContentWheel>
      </div>
      
    </section>
}

export default FrontendSection;