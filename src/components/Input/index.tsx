import * as C from "./style";

type Props = {
    type: string,
    defaultValue: string
    onChange: (e: any) => void
}

const Input = ({ type, defaultValue, onChange }: Props) => {
    return (
        <>
            <C.Input type={type} defaultValue={defaultValue} onChange={onChange}/>
        </>
    );
};

export default Input;