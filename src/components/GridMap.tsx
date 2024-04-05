import { FC, ReactNode } from "react"

type GridMapProps = {
    grid: string[][]
    children?: ReactNode
}
const GridMap: FC<GridMapProps> = ({ grid, children }: GridMapProps) => {
    return (
        <div
            className="grid auto-rows-max auto-cols-fr"
            style={{
                gridTemplateAreas: grid
                    .map((row) => "'" + row.join(" ") + "'")
                    .join(""),
            }}
        >
            {children}
        </div>
    )
}

export default GridMap
