import React, {useState, useEffect} from 'react'
import globalStyle from '../../../assets/styles/global-styles.module.css'
import Styles from './Styles.module.css'

const Checkbox = ({onCheck, defaultChecked}) => {

    const {wrapper} = Styles
    const [checked, setChecked] = useState(defaultChecked)

    const changeSelectedBox = (e) => {
       let checked = e.target.checked
        setChecked(checked)
        onCheck(checked)
    }

    useEffect(() => {
        setChecked(defaultChecked)
    },[defaultChecked])

    return (
        <div className={[wrapper, globalStyle['flex-center']].join(' ')}>
            <input type="checkbox" checked={checked} onChange={changeSelectedBox}/>
            {checked && <img src={require('../../../assets/images/check-mark.png')} alt=""/> }
        </div>
    )
}

export default Checkbox