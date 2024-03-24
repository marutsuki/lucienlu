import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";
import Tools from "../features/tools/Tools";

const Main: FC<object> = () => {
    return <main className="text-accent font-primary">
        <Intro/>
        <AboutMe/>
        <Tools/>
    </main>
}

export default Main;