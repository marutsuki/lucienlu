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
                <h1>NodeJS</h1>NodeJS is one of the cleanest
                and efficient runtimes out there, the single-threaded event loop model makes code so much easier to debug and work with. 
                My go-to for any server-side development.
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
                    Express is my go-to library to spin up a quick API for
                    I/O based operations. I usually find myself pairing Express with other popular NodeJS libraries, such as
                    Passport, Mongoose, and Axios.
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
                    My second most familiar language tailing
                    TypeScript/JavaScript, I&apos;ve had abundant experience
                    working with apps of all kind in Java, including large scale µServices
                    and monolithic legacy codebases.
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
                    My one and only framework for any reasonably sized Java app.
                    I have extensive experience working with the many Spring Boot starters and libraries, 
                    including Spring Web, Spring Data JPA, Spring Security, Spring Kafka.
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
                    systems out there. I consider myself extremely lucky to acquire
                    professional exposure and knowledge of this large scale tool.
                </p>
            </>
        ),
    },
];
