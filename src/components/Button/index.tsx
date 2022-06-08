import React from "react"

type ButtonProps = {
    className?: string,
    children: React.ReactNode,
    onClick?():void
}
const Button = ({ className="", children,onClick ,...rest}: ButtonProps) => {

    return (
        <button {...rest} onClick={onClick} className={` cursor-pointer rounded-md px-6  py-4 m-4 font-bold text-lg shadow ${className}`}>
            {children}
        </button>
    )
}

export default Button