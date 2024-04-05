import { FC } from "react"

const spinnerCss = "absolute animate-overshootSpin w-48"

const Spinner: FC<object> = () => {
    return (
        <span className="block w-48 h-48 transition-opacity duration-500">
            <img
                className={spinnerCss.concat(" animate-delay-0 blur-md")}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(" animate-delay-0")}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " animate-delay-[50ms] opacity-80"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " animate-delay-[100ms] opacity-60"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " animate-delay-[150ms] opacity-40"
                )}
                src="/spinner.png"
            />
            <img
                className={spinnerCss.concat(
                    " animate-delay-[200ms] opacity-20"
                )}
                src="/spinner.png"
            />
        </span>
    )
}

export default Spinner
