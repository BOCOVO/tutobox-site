import React, { useState } from "react"
import DropDown from "./DropdownTest"
import RunButton from "./RunButton"

const MovieDropdown = ({ }) => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <RunButton tuto="delete-favorite-movie" />
            <DropDown
                labels={["❤ Farorite Movies", "The Witcher", "Game of Thrones"]}
                tuto="delete-favorite-movie"
                listWrapperProps={{
                    'data-tuto': "delete-favorite-movie",
                    'data-step': "2",
                    'data-step-action': "click",
                    'data-action-selector': ".favo-movie",
                    'data-step-des': "Click on movie you want to delete"
                }}
                itemClass="favo-movie"
                onItemClick={()=>setModal(true)}
            />
            {modal &&
                <div onClick={()=>setModal(false)} className="flex justify-center items-center bg-black bg-opacity-75 fixed top-0 bottom-0 left-0 right-0">
                    <div onClick={(e)=>e.stopPropagation()} className="w-4/5 px-8 py-2 max-w-sm rounded-md bg-white p-2">
                        <div className="flex py-2 items-center justify-between">
                            <h4>The title of the movie</h4>
                            <button
                                data-tuto="delete-favorite-movie"
                                data-step="end"
                                data-step-des="Click here to remove the movie from your favorite list."
                                className="bg-transparent p-2 text-red-500 ">Remove</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default MovieDropdown
