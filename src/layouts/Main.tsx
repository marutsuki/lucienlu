import { FC } from "react";
import Intro from "../features/intro/Intro";

const Main: FC<object> = () => {
    return <main className="text-accent font-primary">
        <Intro/>
    </main>
}

export default Main;