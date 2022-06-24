import React, { useState, useEffect, useCallback } from "react"

const Dropdown = ({ listWrapperProps = {}, tuto, labels, itemClass = "", onItemClick }) => {

    const [opened, setOpened] = useState(false)

    const closeDropdown = useCallback(
        () => {
            setOpened(false)
        },
        [],
    )

    // close the dropdown when user click somewhere else 
    useEffect(() => {
        document.body.addEventListener("click", closeDropdown)
        return () => {
            document.body.removeEventListener("click", closeDropdown)
        }
    }, [])


    const toggleOpen = () => {
        setOpened(!opened)
    }

    return (
        <div
            onClick={e => e.stopPropagation()}
            className=" w-56 my-4"
        >
            <button
                data-tuto={tuto}
                data-step="1"
                data-step-des="Click here to open the dropdown to make a selection."
                data-dynamic-steps="true"
                data-step-action="click"
                className={`flex justify-between items-center bg-gray-50 text-left px-6 py-2 w-full text-lg shadow-md rounded-md  `}
                onClick={toggleOpen}
            >
                {labels[0]}
                <span
                    style={
                        {
                            transform: "translateY(-3px) rotate(45deg)"
                        }
                    }
                    className="block w-3 h-3 border-b-2 border-r-2"></span>
            </button>

            {opened &&
                <div className="relative">
                    <ul
                        data-tuto={tuto}
                        className="pl-0 mt-3 w-full absolute bg-gray-50 list-none shadow-md rounded-md"
                        {...listWrapperProps}
                    >
                        <li
                            onClick={onItemClick}
                            className={`px-4 my-2 py-1 hover:bg-gray-200 ${itemClass}`}>
                            {labels[1]}</li>
                        <li
                            onClick={onItemClick}
                            className={`px-4 my-2 py-1 hover:bg-gray-200 ${itemClass}`}>
                            {labels[2]}</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Dropdown