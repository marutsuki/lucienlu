import { FC } from "react";
import Intro from "../features/intro/Intro";
import AboutMe from "../features/aboutme/AboutMe";
import FrontendSection from "../features/frontend/FrontendSection";
import BackendSection from "../features/backend/BackendSection";
import NavigationMenu from "../features/navigation/NavigationMenu";
import ProjectSection from "../features/projects/ProjectSection";
import ContactSection from "../features/contact/ContactMe";

const Main: FC<object> = () => {
    return (
        <main className="font-primary tracking-wider text-content">
            <Intro />
            <AboutMe />
            <FrontendSection />
            <BackendSection />
            <NavigationMenu />
            <ProjectSection />
            <ContactSection />
        </main>
    );
};

export default Main;
