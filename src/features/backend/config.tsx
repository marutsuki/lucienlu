import { ReactNode } from "react";

type BackendSectionConfig = {
    label: string;
    url: string;
    content: ReactNode | ReactNode[];
}[];

export const backendSectionConfig: BackendSectionConfig = [
    {
        label: "Home",
        url: "http://localhost:3000/home",
        content: (
            <>
                <h1>Welcome</h1>Type in or click on an endpoint to read more...
            </>
        ),
    },
    {
        label: "NodeJS",
        url: "http://localhost:3000/nodejs",
        content: (
            <>
                <h1>NodeJS</h1>With TypeScript, NodeJS is one of the cleanest
                and efficient environments out there, how quickly a developer
                can spin up a few endpoints in this environment and integrate
                them with a database or upstream astonishes me. My go-to for any
                server-side development.
            </>
        ),
    },
    {
        label: "Express",
        url: "http://localhost:3000/express",
        content: (
            <>
                <h1>Express</h1>
                <p>
                    Express is perfect for writing any backend server, with how
                    lightweight the framework is, it&apos;s my go-to to develop
                    any sort of API.
                </p>
            </>
        ),
    },
    {
        label: "Java",
        url: "http://localhost:3000/java",
        content: (
            <>
                <h1>Java</h1>
                <p>
                    My second most confident language behind
                    TypeScript/JavaScript, I&apos;ve had abundant experience
                    working at uni and professionally with this language.
                </p>
            </>
        ),
    },
    {
        label: "Spring",
        url: "http://localhost:3000/spring",
        content: (
            <>
                <h1>Spring</h1>
                <p>
                    My go to framework for Java based web servers, from my
                    professional career, I&apos;ve been able to work with many
                    different components as part of the ecosystem, including
                    Spring Web, Spring MVC, Spring Boot, Spring Security, Spring
                    Kafka.
                </p>
            </>
        ),
    },
    {
        label: "NextJS",
        url: "http://localhost:3000/nextjs",
        content: (
            <>
                <h1>NextJS</h1>
                <p>
                    A very opinionated framework, I&apos;ve had exposure to both
                    the Page and App router while working with server side
                    rendering, mainly through side projects.
                </p>
            </>
        ),
    },
    {
        label: "Apache Kafka",
        url: "http://localhost:3000/apachekafka",
        content: (
            <>
                <h1>Apache Kafka</h1>
                <p>
                    Kafka is one of the most powerful distributed messaging
                    systems out there currently. I&apos;ve been lucky to acquire
                    professional exposure to this technology, via Spring Kafka
                    in Java.
                </p>
            </>
        ),
    },
];
