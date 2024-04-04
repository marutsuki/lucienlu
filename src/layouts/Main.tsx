import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";
import FrontendSection from "../features/frontend/FrontendSection";
import BackendSection from "../features/backend/BackendSection";
import NavigationMenu from "../features/navigation/NavigationMenu";
import ProjectSection from "../features/projects/ProjectSection";

const Main: FC<object> = () => {
    return <main className="text-content font-primary">
        <Intro/>
        <AboutMe/>
        <FrontendSection/>
        <BackendSection/>
        <NavigationMenu/>
        <ProjectSection/>
    </main>
}

export default Main;