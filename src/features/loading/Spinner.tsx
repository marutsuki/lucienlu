import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { selectLoadingStatus, setLoadingStatus } from "./loadingSlice";
import { useSelector } from "react-redux";

export const Fallback: FC<object> = () => {
    const dispatch = useAppDispatch();
  
    useLayoutEffect(() => {
      dispatch(setLoadingStatus(false));
      return () => {
        dispatch(setLoadingStatus(true));
      };
    }, [dispatch]);
  
    return <div/>;
}

const spinnerCss = "absolute animate-overshootSpin w-48"
const Spinner: FC<object> = () => {
    const loadingStatus = useSelector(selectLoadingStatus);
    const [show, setShow] = useState(true);
    useEffect(() => {
        if (loadingStatus) {
            setTimeout(() => setShow(false), 500);
        }
    }, [loadingStatus])
    return show ? <span className={(!loadingStatus ? "" : "opacity-0 ").concat("block w-48 h-48 transition-opacity duration-500")}>
        <img className={spinnerCss.concat(" animate-delay-0 blur-md")} src="/spinner.png"/>
        <img className={spinnerCss.concat(" animate-delay-0")}  src="/spinner.png"/>
        <img className={spinnerCss.concat(" animate-delay-[50ms] opacity-80")} src="/spinner.png"/>
        <img className={spinnerCss.concat(" animate-delay-[100ms] opacity-60")} src="/spinner.png"/>
        <img className={spinnerCss.concat(" animate-delay-[150ms] opacity-40")} src="/spinner.png"/>
        <img className={spinnerCss.concat(" animate-delay-[200ms] opacity-20")} src="/spinner.png"/>
    </span> : <></>
}

export default Spinner;