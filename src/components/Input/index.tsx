import React from "react";
import * as C from "./style";

type Props = {
    type: string,
    defaultValue: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, defaultValue, onChange }: Props) => {
    return (
        <>
            <C.Input type={type} defaultValue={defaultValue.toString()} onChange={(e) => onChange(e)}/>
        </>
    );
};

export default Input;