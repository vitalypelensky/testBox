import React, {useState, useEffect} from 'react'
import Styles from './Styles.module.css'
import CheckBox from '../../Elements/Checkbox/CheckBox'

const SelectedView = ({onCheck, selectedBoxes, idBox}) => {
    const {wrapper} = Styles

    const [wasSelected, setWasSelected] = useState(false)

    const checkSelectedBox = () => {
        let isSelected = selectedBoxes.some(item=> item.id == idBox)
        console.log(isSelected,'isSelected', selectedBoxes, idBox)
        setWasSelected(isSelected)
    }

    useEffect(checkSelectedBox, [])

    return (
        <div className={wrapper}>
            <CheckBox defaultChecked={wasSelected} onCheck={onCheck}/>
        </div>
    )
}

export default SelectedView