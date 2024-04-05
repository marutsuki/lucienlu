import { FC, MouseEvent as ReactMouseEvent, useRef, useState } from "react";
import { navigationConfig } from "./config";
import { useAppDispatch } from "../../store";
import { selectScrollContext, updateScrollContext } from "./scrollSlice";
import Index from "../../components/Index";
import { useSelector } from "react-redux";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useCookie } from "./hooks";

const NavigationMenu: FC<object> = () => {
    const [active, setActive] = useState(true);
    const menuRef = useRef<HTMLMenuElement>(null);
    const dispatch = useAppDispatch();
    const scrollContext = useSelector(selectScrollContext);
    const [revisit, setRevisit] = useCookie("revisit");
    const startDragging = (oe: ReactMouseEvent<HTMLDivElement>) => {
        if (!revisit) {
            setRevisit("true", 24 * 60);
        }
        let prevX = oe.clientX;
        let prevY = oe.clientY;
        if (menuRef.current !== null) {
            menuRef.current.style.transitionDuration = "";
        }
        const drag = (e: MouseEvent) => {
            e.preventDefault();
            if (menuRef.current !== null) {
                const deltaX = e.clientX - prevX;
                const deltaY = e.clientY - prevY;
                menuRef.current.style.left = (parseInt(menuRef.current.style.left.split("px")[0]) + deltaX) + "px";
                menuRef.current.style.top = (parseInt(menuRef.current.style.top.split("px")[0]) + deltaY) + "px";
            }
            prevX = e.clientX;
            prevY = e.clientY;
        }

        const dragFinish = (e: MouseEvent) => {
            window.removeEventListener("mousemove", drag);
            window.removeEventListener("mouseup", dragFinish);
            if (menuRef.current === null) {
                return;
            }
            menuRef.current.style.transitionDuration = "300ms";
            if (e.clientX > window.screen.width / 2) {
                menuRef.current.style.left = document.body.clientWidth - menuRef.current.clientWidth + "px";
            } else {
                menuRef.current.style.left = "0px";
            }
        }
        window.addEventListener("mousemove", drag);
        window.addEventListener("mouseup", dragFinish);
        
    }
    const onOpenCloseMenu = (e: ReactMouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setActive(state => !state)
    }

    return <menu ref={menuRef} style={{
        top: "200px",
        left: "0px",
    }} className={`z-10 fixed hover:bg-overlay bg-[rgba(0,0,0,0.1)] backdrop-blur-md drop-shadow-[0_0_5px_rgba(0,0,0,1)]`}>
        <div 
            onMouseDown={startDragging} 
            className="cursor-grab flex flex-row justify-end p-1 backdrop-blur-xl mb-2 pt-2">
            <div className={`${!active ? "animate-bounce" : ""} cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]`} onClick={onOpenCloseMenu}>
            {
                active 
                ? <GenericSvg symbol="Minimize" size={24} fill="white"/>
                : <GenericSvg className="opacity-100 duration-300" symbol="Hamburger" size={36} fill="white"/> 
            }
            </div>
        </div>
        <Index 
            funcs={
            navigationConfig.map(entry => ({
                id: entry.scrollContext,
                label: entry.label,
                func: () => dispatch(updateScrollContext(entry.scrollContext)),
            }))
        }
            active={scrollContext.context}
            className={`${!active && "!max-h-0 !max-w-0 !pb-0"} relative ml-4 my-0 mr-2 overflow-hidden transition-all duration-300 max-h-96 max-w-full pb-4 `}
            itemClassName="relative group p-2 transition-all cursor-pointer select-none hover:scale-105 w-full pr-4
                after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-1 after:w-0 after:bg-content after:duration-300"
            activeItemClassName="drop-shadow-[0_0_5px_rgba(255,255,255,1)] after:w-full"
            itemChildren={<div className="absolute -z-10 inset-0 content-[''] opacity-0 bg-sunset shadow-inner group-hover:opacity-50 duration-300"/>}
        />
        { !revisit && <h2 onClick={() => setRevisit("true", 24 * 60)} 
            className="select-none cursor-pointer bg-overlay shadow-overlay rounded-xl shadow-md 
            text-xl fixed inset-y-0 left-full ml-4 p-2 w-max h-min">
            This window is draggable!
            </h2> }
    </menu>
}

export default NavigationMenu;