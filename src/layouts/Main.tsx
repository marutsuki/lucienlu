import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";
import FrontendSection from "../features/frontend/FrontendSection";
import BackendSection from "../features/backend/BackendSection";
import NavigationMenu from "../features/navigation/NavigationMenu";

const Main: FC<object> = () => {
    return <main className="text-accent font-primary">
        <Intro/>
        <AboutMe/>
        <FrontendSection/>
        <BackendSection/>
        <NavigationMenu/>
    </main>
}

export default Main;