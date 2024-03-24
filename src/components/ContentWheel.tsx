import { FC, ReactNode, useEffect, useRef } from "react";
import GenericSvg from "./symbols/SvgSymbols";

type ContentWheelProps = {
    className?: string;
    wheelClassName?: string;
    before?: ReactNode | ReactNode[];
    children: ReactNode[];
    startingRotation?: number;
    wheelRotateSpeed?: number;
    showIndicators?: boolean;
}

const DEFAULT_ROTATE_SPEED = 2;

const INDICATOR_COUNT_PER_DIRECTION = 5;

const ContentWheel: FC<ContentWheelProps> = ({ className = "", wheelClassName = "", before, children, startingRotation = 0,wheelRotateSpeed = DEFAULT_ROTATE_SPEED, showIndicators = false }: ContentWheelProps) => {
    const wheelRef = useRef<HTMLDivElement>(null);
    
    // We cannot use React's event listeners for wheels because they are all passive event listeners, meaning we can't call preventDefault().
    // This will cause issues such as allowing the screen to scroll when the user is mouse wheeling on the content wheel.
    useEffect(() => {
        const contentWheel = wheelRef.current;
        if (contentWheel === null) {
            return;   
        }

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (wheelRef.current === null) {
                return;
            }
            const spinClockwise = (rotateCssProperty: string) => `${parseFloat(rotateCssProperty.split("deg")[0]) + wheelRotateSpeed}deg`;
            const spinAnticlockwise = (rotateCssProperty: string) => `${parseFloat(rotateCssProperty.split("deg")[0]) - wheelRotateSpeed}deg`
            if (e.deltaY > 0) {
                wheelRef.current.style.rotate = spinClockwise(wheelRef.current.style.rotate);
            } else {
                wheelRef.current.style.rotate = spinAnticlockwise(wheelRef.current.style.rotate);
            }
            return false;
        };

        contentWheel.addEventListener("wheel", onWheel);
        return () => contentWheel.removeEventListener("wheel", onWheel);
    })
    
    const partitionSize = Math.round(360 / children.length);

    const rotateUp = () => {
        if (wheelRef.current !== null) {
            wheelRef.current.style.rotate = `${Math.round((parseFloat(wheelRef.current.style.rotate.split("deg")[0]) + partitionSize - startingRotation) / partitionSize) * partitionSize + startingRotation}deg`;
        }
    }
    
    const rotateDown = () => {
        if (wheelRef.current !== null) {
            wheelRef.current.style.rotate = `${Math.round((parseFloat(wheelRef.current.style.rotate.split("deg")[0]) - partitionSize - startingRotation) / partitionSize) * partitionSize + startingRotation}deg`;
        }
    }

    const getPositions = () => {
        const positions = [];
        for (let i = 0; i < children.length; i++) {
            const rad = i * (360 / children.length) * Math.PI / 180;
            const x = Math.cos(rad);
            const y = Math.sin(rad);
            positions.push({ x, y, deg: i * (360 / children.length) });
        }
        return positions;
    };

    const positions = getPositions();

    return <div className={className.concat(" relative h-screen w-[100vh]")}>
        <div 
            ref={wheelRef} 
            className={`${wheelClassName} relative h-[90%] w-[90%] left-[5%] top-[5%] rounded-full transition-all duration-500`}
            style={{
                rotate: `${startingRotation}deg`,
            }}>
            <div className="absolute -inset-3 bg-[rgba(255,255,255,0.3)] rounded-full"/>
                { before }
                {
                children.map((child, index) => <div key={index} style={{
                    top: `calc(${Math.round(positions[index].y * 35) + 45}vh)`,
                    left: `calc(${Math.round(positions[index].x * 35) + 45}vh)`,
                    rotate: `${positions[index].deg + 180}deg`,
                    translate: "-50% -50%"
                }} className="absolute">
                    { child }
                </div>)
            }
        </div>
        {
            showIndicators &&
            <>
                <div className="cursor-pointer group" onClick={rotateUp}>
                    {
                        Array(INDICATOR_COUNT_PER_DIRECTION).fill(null).map((_, index) => <GenericSvg style={{
                            top: `${-Math.sin((160 - 5 * index) * Math.PI / 180) * 48 + 45}vh`,
                            left: `${Math.cos((160 - 5 * index) * Math.PI / 180) * 48 + 45}vh`,
                            rotate: `-${70 - 5 * index}deg`,
                        }}
                        className="absolute group-hover:drop-shadow-[0_0px_35px_rgba(255,255,225,1)] group-hover:scale-125 duration-300 group-active:fill-cyan-200 group-active:drop-shadow-[0_0px_35px_rgba(200,200,225,1)]" key={`ind-up-${index}`} symbol="Arrow" size={36} fill={"white"}/>)
                    }
                </div>
                <div className="cursor-pointer group" onClick={rotateDown}>
                    {
                        Array(INDICATOR_COUNT_PER_DIRECTION).fill(null).map((_, index) => <GenericSvg style={{
                            top: `${-Math.sin((200 + 5 * index) * Math.PI / 180) * 48 + 45}vh`,
                            left: `${Math.cos((200 + 5 * index) * Math.PI / 180) * 48 + 45}vh`,
                            rotate: `${70 - 5 * index}deg`,
                            translate: "0 150%"
                        }}
                        className="absolute group-hover:drop-shadow-[0_0px_35px_rgba(255,255,225,1)] group-hover:scale-125 duration-300 group-active:fill-cyan-200 group-active:drop-shadow-[0_0px_35px_rgba(200,200,225,1)]" key={`ind-up-${index}`} symbol="Arrow" size={36} fill={"white"}/>)
                    }
                </div>
            </>
        }
    </div>
}

export default ContentWheel;