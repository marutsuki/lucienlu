import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";

const Main: FC<object> = () => {
    return <main className="text-accent font-primary">
        <Intro/>
        <AboutMe/>
    </main>
}

export default Main;