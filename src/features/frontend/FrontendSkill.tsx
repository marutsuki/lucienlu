import { FC, ReactNode, useState } from "react"

type FrontendSkillProps = {
    content: ReactNode | ReactNode[]
    title: string
    description: string
    className?: string
}

const FrontendSkill: FC<FrontendSkillProps> = ({
    content,
    title,
    description,
    className = "",
}) => {
    const [active, setActive] = useState(false)

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
                className="absolute flex flex-col justify-center inset-0 group-focus:opacity-100 cursor-pointer bg-textBackground transition-opacity duration-500 rounded-2xl"
            >
                <h1 className="text-4xl mb-2"> {title} </h1>
                <p className="text-lg -inset-5"> {description} </p>
            </div>
        </div>
    )
}

export default FrontendSkill
