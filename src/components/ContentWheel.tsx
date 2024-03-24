import { DragEvent, FC, ReactNode, useRef, useState } from "react";

type ContentWheelProps = {
    className?: string;
    children: ReactNode[];
    rotateSpeed?: number;
}

const DEFAULT_ROTATE_SPEED = 2;

const ContentWheel: FC<ContentWheelProps> = ({ className = "", children, rotateSpeed = DEFAULT_ROTATE_SPEED }: ContentWheelProps) => {
    const wheelRef = useRef<HTMLDivElement>(null);
    
    const startRotating = () => {
        let prevXY: { x: number, y: number } | null = null;
        const onDrag = (e: MouseEvent) => {
            if (wheelRef.current === null) {
                return;
            }
            if (prevXY === null) {
                prevXY = { x: e.clientX, y: e.clientY };
                return;
            }
            const boundingBox = wheelRef.current.getBoundingClientRect();
            const centerX = boundingBox.x + boundingBox.width / 2;
            const centerY = boundingBox.y + boundingBox.height / 2;
            const crossProduct = (e.clientY - centerY) * (prevXY.x - centerX) - (e.clientX - centerX) * (prevXY.y - centerY);
            const spinClockwise = (rotateCssProperty: string) => `${parseFloat(rotateCssProperty.split("deg")[0]) + rotateSpeed}deg`;
            const spinAnticlockwise = (rotateCssProperty: string) => `${parseFloat(rotateCssProperty.split("deg")[0]) - rotateSpeed}deg`
            if (crossProduct < 0) {
                wheelRef.current.style.rotate = spinClockwise(wheelRef.current.style.rotate);
            } else {
                wheelRef.current.style.rotate = spinAnticlockwise(wheelRef.current.style.rotate);
            }
            prevXY = { x: e.clientX, y: e.clientY };
        }
        const onMouseUp = () => {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onMouseUp);
        }
        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onMouseUp);
    }
    
    const getPositions = () => {
        const positions = [];
        for (let i = 0; i < children.length; i++) {
            const rad = i * (360 / children.length) * Math.PI / 180;
            const x = Math.cos(rad);
            const y = Math.sin(rad);
            positions.push({ x, y });
        }
        return positions;
    };

    const positions = getPositions();

    return <div 
        ref={wheelRef} 
        onMouseDown={startRotating} 
        className={`${className.concat(" relative h-screen w-[100vh] bg-white rounded-full before:absolute before:content-[''] before:inset-2 before:bg-black before:rounded-full")}`}
        style={{
            rotate: "0deg",
        }}>
            {
            children.map((child, index) => <div key={index} style={{
                top: `calc(${Math.round(positions[index].y * 35) + 50}vh)`,
                left: `calc(${Math.round(positions[index].x * 35) + 50}vh)`,
            }} className="absolute translate-x-[-50%] translate-y-[-50%]">
                { child }
            </div>)
        }
    </div>
}

export default ContentWheel;