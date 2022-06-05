import React from "react"

const RunButton = ({ tutoName, tour ,children }) => {

    const runTuto = () => {
        if (tour) {
            window.TutoBox.startTour()
        } else window.TutoBox.startTuto(tutoName)
    }

    return (
        <button onClick={runTuto} className="button button--primary button--lg">
            {children || "Run Tutorial"}
        </button>
    )
}

export default RunButton