import React from "react"

const RunButton = ({ tuto, tour, children, extendsTuto, hextendsHelpers,className='' }) => {

    const runTuto = () => {
        if (tour) {
            window.TutoBox.startTour()
        } else {
            if (hextendsHelpers) {
                window.TutoBox.setExtendsHelpers(hextendsHelpers)
            } else if (extendsTuto) {
                window.TutoBox.setExtendsHelpers([
                    {
                        tutoName:tuto,
                        extendsTuto
                    },
                ])
            } else {
                window.TutoBox.setExtendsHelpers([])
            }
            if(tuto)window.TutoBox.startTuto(tuto)
        }
    }

    return (
        <button onClick={runTuto} className={`button button--primary button--lg ${className}`}>
            {children || "Run Tutorial"}
        </button>
    )
}

export default RunButton