export default function Button({btnText,...rest}){
    return (
        <button className="btn" {...rest}>{btnText}</button>
    )
}