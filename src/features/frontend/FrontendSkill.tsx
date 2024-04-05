import { FC, ReactNode, useState } from "react";

type FrontendSkillProps = {
    content: ReactNode | ReactNode[];
    title: string;
    description: string;
    className?: string;
};

const FrontendSkill: FC<FrontendSkillProps> = ({
    content,
    title,
    description,
    className = "",
}) => {
    const [active, setActive] = useState(false);

    return (
        <div
            onClick={() => setActive((state) => !state)}
            className={`${className} group relative p-8`}
        >
            {content}
            <div
                style={{
                    opacity: active ? "100%" : "0%",
                }}
                className="absolute inset-10 flex cursor-pointer flex-col justify-center rounded-2xl bg-textBackground p-2 transition-opacity duration-500 group-focus:opacity-100 laptop:inset-0"
            >
                <h1 className="mb-1 text-2xl laptop:text-4xl">{title}</h1>
                <p className="-inset-5 text-base laptop:text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FrontendSkill;
