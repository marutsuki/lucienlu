import { FC, lazy } from "react";

const ForcedDelay = (delay: number = 3000) =>
    lazy(async () => {
        await new Promise<void>((r) => setTimeout(() => r(), delay));
        return {
            default: (() => <div key="delay"></div>) as FC,
        };
    });

export default ForcedDelay;
