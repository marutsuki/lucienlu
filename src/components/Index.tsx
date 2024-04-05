import { FC, HTMLProps, ReactNode } from "react";

type IndexProps = {
    funcs: { id: string, label: string, func: () => void }[];
    itemClassName?: string;
    activeItemClassName?: string;
    onClick?: (label: string) => void;
    itemChildren?: ReactNode | ReactNode[]
    active?: string;
} & HTMLProps<HTMLUListElement>

const Index: FC<IndexProps> = ({ funcs, className = "", itemClassName = "", activeItemClassName = "", onClick, active, itemChildren, ...props }: IndexProps) => {
    const onClickWrapper = (label: string, func: () => void) => {
        if (onClick) onClick(label);
        func();
    }
    return <ul className={`${className} m-8 flex-col text-left leading-9`} {...props}>
        {
            funcs.map(({ id, label, func }) => <li key={`backend-tool-${label}`} 
                className={`${itemClassName} ${active === id ? activeItemClassName : ""}`}
                onClick={() => onClickWrapper(label, func)}>
                    { itemChildren && itemChildren}
                    { label }
            </li>)
        }
    </ul>
}

export default Index;