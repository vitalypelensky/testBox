import React from "react";

export default React.createContext({
    selectedBoxes : [],
    boxes: [],
    setBoxes: () => {},
    addToSelectedBoxesContext: () => {},
    removeFromSelectedBoxesContext: () => {},
    unselectedAll: () => {},
    deleteFromBoxes: () => {}
});