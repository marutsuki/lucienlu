import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";
import FrontendSection from "../features/frontend/FrontendSection";

const Main: FC<object> = () => {
    return <main className="text-accent font-primary">
        <Intro/>
        <AboutMe/>
        <FrontendSection/>
    </main>
}

export default Main;