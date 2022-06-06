import React from "react"

const RunButton = ({ tutoName, tour, children, extendsTuto }) => {

    const runTuto = () => {
        if (tour) {
            window.TutoBox.startTour()
        } else {
            if (extendsTuto) {
                window.TutoBox.setExtendsHelpers([
                    {
                        tutoName,
                        extendsTuto
                    },
                ])
            } else {
                window.TutoBox.setExtendsHelpers([])
            }
            window.TutoBox.startTuto(tutoName)
        }
    }

    return (
        <button onClick={runTuto} className="button button--primary button--lg">
            {children || "Run Tutorial"}
        </button>
    )
}

export default RunButton