import { FC } from "react";

const Spinner: FC<object> = () => {
    return <span>
        <img className="absolute animate-overshootSpin w-48 animate-delay-0" src="/spinner.png"/>
        <img className="absolute animate-overshootSpin w-48 animate-delay-[50ms] opacity-80" src="/spinner.png"/>
        <img className="absolute animate-overshootSpin w-48 animate-delay-[100ms] opacity-60" src="/spinner.png"/>
        <img className="absolute animate-overshootSpin w-48 animate-delay-[150ms] opacity-40" src="/spinner.png"/>
        <img className="absolute animate-overshootSpin w-48 animate-delay-[200ms] opacity-20" src="/spinner.png"/>
    </span>
}

export default Spinner;