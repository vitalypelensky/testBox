import React, { useState, useCallback } from "react"
import BoxesContext from "./BoxesContext"

const BoxesContextState = ({ children }) => {

    const [selectedBoxes, _setSelectedBoxes] = useState([]);
    const [boxes, _setBoxes] = useState([]);

    const setSelectedBoxes = useCallback(selectedBoxes => {
        _setSelectedBoxes(selectedBoxes);
    }, [])

    const setBoxes = useCallback(boxes => {
        _setBoxes(boxes);
    }, []);

    const addToSelectedBoxesContext = (box) => {
        let alreadyContain = selectedBoxes.some(item => item.id == box.id)
        if(alreadyContain) {return}
        let selectedBoxesWithNew = [...selectedBoxes, box]
        setSelectedBoxes(selectedBoxesWithNew)
    }

    const removeFromSelectedBoxesContext = (removedBoxes) => {
        let selectedBoxesWithoutRemoved = selectedBoxes.filter(item => item.id != removedBoxes.id)
        setSelectedBoxes(selectedBoxesWithoutRemoved)
    }

    const unselectedAll = () => {
        setSelectedBoxes([])
    }

    const deleteFromBoxes = () => {
        let allBoxes = JSON.parse(JSON.stringify(boxes))
        selectedBoxes.forEach(item => {
            allBoxes = allBoxes.filter(box => box.id != item.id)
        })
        setBoxes(allBoxes)
        unselectedAll()
    }

    return (
        <BoxesContext.Provider
            value={{
                boxes,
                setBoxes,
                selectedBoxes,
                addToSelectedBoxesContext,
                removeFromSelectedBoxesContext,
                unselectedAll,
                deleteFromBoxes
            }}
        >
            {children}
        </BoxesContext.Provider>
    );
};

export default BoxesContextState;
