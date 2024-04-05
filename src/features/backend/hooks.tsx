import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { selectComputerUrl, updateContent } from "./computerSlice"
import { useAppDispatch } from "../../store"

export const useMockRouter = (
    endpoints: Record<string, ReactNode | ReactNode[]>,
    defaultContent: ReactNode | ReactNode[] = (
        <>
            <h1>404</h1>
            <p>Page not found!</p>
        </>
    )
) => {
    const url = useSelector(selectComputerUrl)
    const dispatch = useAppDispatch()
    if (url in endpoints) {
        dispatch(updateContent(endpoints[url]))
    } else if (
        url.charAt(url.length - 1) === "/" &&
        url.slice(0, url.length - 1) in endpoints
    ) {
        dispatch(updateContent(endpoints[url.charAt(url.length - 1)]))
    } else {
        dispatch(updateContent(defaultContent))
    }
    return
}
