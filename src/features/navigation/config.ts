import { ScrollContext } from "./scrollSlice";

type NavigationConfig = {
    label: string;
    scrollContext: ScrollContext;
}[];

export const navigationConfig: NavigationConfig = [
    {
        label: "Home",
        scrollContext: "Intro"
    },
    {
        label: "About Me",
        scrollContext: "AboutMe"
    },
    {
        label: "What I use (Frontend)",
        scrollContext: "Frontend"
    },
    {
        label: "What I use (Backend)",
        scrollContext: "Backend"
    }
]
