import { FC } from "react";
import ContentWheel from "../../components/ContentWheel";
import GenericSvg from "../../components/symbols/SvgSymbols";

const Tools: FC<object> = () => {
    return <section className="relative h-screen grid place-items-center text-xl grid-cols-2 grid-rows-1 overflow-hidden">
      <h1>What I use: Frontend</h1>
      <ContentWheel className="absolute left-[50vh] cursor-pointer">
        <GenericSvg symbol={"React"} size={200}/>
        <GenericSvg symbol={"Redux"} size={200}/>
        <GenericSvg symbol={"Tailwind"} size={200}/>
      </ContentWheel>
    </section>
}

export default Tools;