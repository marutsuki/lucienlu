import { FC } from "react";

const spinnerCss = "absolute animate-overshootSpin w-48";

const Spinner: FC<object> = () => {
    return (
        <span className="block h-48 w-48 transition-opacity duration-500 invert">
            <img
                className={spinnerCss.concat(" blur-md animate-delay-0")}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(" animate-delay-0")}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " opacity-80 animate-delay-[50ms]"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " opacity-60 animate-delay-[100ms]"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " opacity-40 animate-delay-[150ms]"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " opacity-20 animate-delay-[200ms]"
                )}
                src="/spinner.png"
            />
        </span>
    );
};

export default Spinner;
