import {
    FC,
    MouseEvent as ReactMouseEvent,
    useRef,
    useState,
    useEffect,
} from "react";
import { navigationConfig } from "./config";
import { useAppDispatch } from "../../store";
import { selectScrollContext, updateScrollContext } from "./scrollSlice";
import Index from "../../components/Index";
import { useSelector } from "react-redux";
import GenericSvg from "../../components/symbols/SvgSymbols";
import { useCookie } from "../../hooks";
import { isMobile } from "../../util/screen";
import { clamp } from "../../util/math";

const MINIMUM_DISTANCE_BEFORE_DEREGISTERING_CLICK = 50;

const NavigationMenu: FC<object> = () => {
    const [active, setActive] = useState(!isMobile());
    const menuRef = useRef<HTMLMenuElement>(null);
    const openCloseRef = useRef<HTMLDivElement>(null);
    const resizeRef = useRef<ResizeObserver | null>(null);
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

        let dragDistance = 0;

        const drag = (e: MouseEvent) => {
            e.preventDefault();
            if (menuRef.current !== null) {
                const deltaX = e.clientX - prevX;
                const deltaY = e.clientY - prevY;
                menuRef.current.style.left =
                    parseInt(menuRef.current.style.left.split("px")[0]) +
                    deltaX +
                    "px";
                menuRef.current.style.top =
                    clamp(
                        parseInt(menuRef.current.style.top.split("px")[0]) +
                            deltaY,
                        0,
                        window.innerHeight - menuRef.current.clientHeight
                    ) + "px";
                dragDistance += Math.sqrt(deltaX ** 2 + deltaY ** 2);
            }
            prevX = e.clientX;
            prevY = e.clientY;
        };

        // Add a click event listener to prevent the minimize/maximize function from being fired.
        const captureClick = (e: MouseEvent) => {
            if (menuRef.current === null) {
                return;
            }
            if (dragDistance > MINIMUM_DISTANCE_BEFORE_DEREGISTERING_CLICK) {
                e.stopPropagation();
            }
            window.removeEventListener("click", captureClick, {
                capture: true,
            });
        };

        const dragFinish = (e: MouseEvent) => {
            window.removeEventListener("mousemove", drag);
            window.removeEventListener("mouseup", dragFinish);
            if (menuRef.current === null) {
                return;
            }
            menuRef.current.style.transitionDuration = "300ms";
            if (!isMobile() && e.clientX > document.body.clientWidth / 2) {
                menuRef.current.style.left =
                    document.body.clientWidth -
                    menuRef.current.clientWidth +
                    "px";
            } else {
                menuRef.current.style.left = "0px";
            }
        };

        window.addEventListener("mousemove", drag);
        window.addEventListener("mouseup", dragFinish);
        window.addEventListener("click", captureClick, { capture: true });
    };
    // Use native js event listener so that the the drag handler can capture the click event before it reaches here.
    useEffect(() => {
        const ref = openCloseRef.current;
        if (ref !== null) {
            const onOpenCloseMenu = (e: MouseEvent) => {
                e.stopPropagation();
                setActive((state) => !state);
            };
            ref.addEventListener("click", onOpenCloseMenu);
            return () => ref.removeEventListener("click", onOpenCloseMenu);
        }
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            const observer = new ResizeObserver(() => {
                if (
                    menuRef.current &&
                    parseInt(menuRef.current.style.left) >
                        document.body.clientWidth / 2
                ) {
                    console.log(
                        document.body.clientWidth,
                        menuRef.current.clientWidth
                    );
                    menuRef.current.style.left =
                        document.body.clientWidth -
                        menuRef.current.clientWidth +
                        "px";
                }
            });
            observer.observe(menuRef.current);
            resizeRef.current = observer;
            return () => observer.disconnect();
        }
    }, []);

    return (
        <menu
            ref={menuRef}
            style={{
                top: !isMobile() ? "200px" : "0px",
                left: "0px",
            }}
            className={`fixed z-10 bg-[rgba(0,0,0,0.1)] drop-shadow-[0_0_5px_rgba(0,0,0,1)] backdrop-blur-md hover:bg-overlay`}
        >
            <div
                onMouseDown={startDragging}
                className="mb-2 flex cursor-grab flex-row justify-end p-1 pt-2 backdrop-blur-xl"
            >
                <div
                    ref={openCloseRef}
                    className={`${!active ? "animate-bounce" : ""} cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]`}
                >
                    {active ? (
                        <GenericSvg symbol="Minimize" size={24} fill="white" />
                    ) : (
                        <GenericSvg
                            className="opacity-100 duration-300"
                            symbol="Hamburger"
                            size={36}
                            fill="white"
                        />
                    )}
                </div>
            </div>
            <Index
                funcs={navigationConfig.map((entry) => ({
                    id: entry.scrollContext,
                    label: entry.label,
                    func: () =>
                        dispatch(updateScrollContext(entry.scrollContext)),
                }))}
                active={scrollContext.context}
                className={`${!active && "!max-h-0 !max-w-0 !pb-0"} relative my-0 ml-4 mr-2 max-h-96 max-w-full overflow-hidden whitespace-nowrap pb-4 transition-all duration-300`}
                itemClassName="relative group p-2 transition-all cursor-pointer select-none hover:scale-105 w-full pr-4
                after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-1 after:w-0 after:bg-content after:duration-300"
                activeItemClassName="drop-shadow-[0_0_5px_rgba(255,255,255,1)] after:w-full"
                itemChildren={
                    <div className="absolute inset-0 -z-10 bg-sunset opacity-0 shadow-inner duration-300 content-[''] group-hover:opacity-50" />
                }
            />
            {!revisit && !isMobile() && (
                <h2
                    onClick={() => setRevisit("true", 24 * 60)}
                    className="fixed inset-y-0 left-full ml-4 h-min w-max 
            cursor-pointer select-none rounded-xl bg-overlay p-2 text-xl shadow-md shadow-overlay"
                >
                    This window is draggable!
                </h2>
            )}
        </menu>
    );
};

export default NavigationMenu;
