type RepoConfig = {
    title: string;
    description: string;
    url: string;
    preview?: string;
}

type RepoSectionConfig = {
    username: string;
    repos: RepoConfig[];
}

export const repoConfig: RepoSectionConfig = {
    username: "marutsuki",
    repos: [
    {
        title: "chirper",
        description: "A React + NodeJS/Express full stack twitter mockup. Start chirpin' and discover new people.",
        url: "https://github.com/marutsuki/chirper"
    },
    {
        title: "maru-github-viewer",
        description: "A client-side NextJS application where you can view GitHub profiles in an aesthetic gaming theme.",
        url: "https://marutsuki.github.io/maru-github-viewer/",
        preview: "github-viewer.png"
    },
    {
        title: "maru-game-of-life",
        description: "A React based implementation of the famous Conway's game of life in a modern look, right from your web browser!",
        url: "https://marutsuki.github.io/maru-game-of-life/",
        preview: "simulation.gif"
    },
    {
        title: "green-web",
        description: "A simple NextJS application providing a clean UI to access an open source API that measures the how sustainable a website is by measuring loading costs and times.",
        url: "https://green-web-beryl.vercel.app/"
    },
    {
        title: "OOP-Design-Patterns",
        description: "A Java dump of example object oriented designs, showcasing all 23 Gang of Four design patterns.",
        url: "https://github.com/marutsuki/OOP-Design-Patterns/"
    },
    {
        title: "HTTP-1.0-server-in-C",
        description: "Just a simple HTTP 1.0 server implementation written in C. Serves static files including content such as text, images or videos, only supports GET requests.",
        url: "https://github.com/marutsuki/HTTP-1.0-server-in-C/"
    }]
}