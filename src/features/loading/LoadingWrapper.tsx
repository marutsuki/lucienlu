import { FC, PropsWithChildren, Suspense, useEffect, useLayoutEffect, useState } from "react";
import Spinner from "./Spinner";
import ForcedDelay from "../../components/utils/ForcedDelay";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectLoadingStatus, setLoadingStatus } from "./loadingSlice";

const Delay = ForcedDelay(3000);

const Fallback: FC<object> = () => {
    const dispatch = useAppDispatch();
  
    useLayoutEffect(() => {
      dispatch(setLoadingStatus("NotReady"));
      return () => {
        dispatch(setLoadingStatus("Ready"));
      };
    }, [dispatch]);
  
    return <div/>;
}

const LoadingScreen: FC<object> = () => {
    const dispatch = useAppDispatch();
    const loadingStatus = useSelector(selectLoadingStatus);
    const [show, setShow] = useState(true);
    useEffect(() => {
        if (loadingStatus !== "NotReady") {
            dispatch(setLoadingStatus("Loaded"));
            setTimeout(() => setShow(false), 3000);
        }
    }, [loadingStatus, dispatch]);
    return show && <div className={(loadingStatus === "NotReady" ? "" : "!opacity-0 ").concat("bg-primary opacity-100 duration-300 absolute inset-0 grid place-items-center")}>
        <Spinner/>
    </div>
}
const LoadingWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <>
        <LoadingScreen/>
        <Suspense fallback={<Fallback/>}>
            <Delay/>
            { children }
        </Suspense>
    </>
}

export default LoadingWrapper;