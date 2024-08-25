import { MouseEventHandler } from "react";

export interface ICustomButtonType {
    btnType?: "button" | "submit";
    styleContainer?: string;
    textContainer: string;
    functionEvent?:
    MouseEventHandler<HTMLButtonElement>
}