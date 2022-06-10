import React from "react"

const RunButton = ({ tutoName, tour, children, extendsTuto, hextendsHelpers }) => {

    const runTuto = () => {
        if (tour) {
            window.TutoBox.startTour()
        } else {
            if (hextendsHelpers) {
                window.TutoBox.setExtendsHelpers(hextendsHelpers)
            } else if (extendsTuto) {
                window.TutoBox.setExtendsHelpers([
                    {
                        tutoName,
                        extendsTuto
                    },
                ])
            } else {
                window.TutoBox.setExtendsHelpers([])
            }
            if(tutoName)window.TutoBox.startTuto(tutoName)
        }
    }

    return (
        <button onClick={runTuto} className="button button--primary button--lg">
            {children || "Run Tutorial"}
        </button>
    )
}

export default RunButton