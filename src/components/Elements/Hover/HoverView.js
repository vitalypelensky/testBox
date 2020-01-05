import React, {useState, useEffect} from 'react'
import Styles from './Styles.module.css'
import globalStyle from '../../../assets/styles/global-styles.module.css'
import CheckBox from '../../Elements/Checkbox/CheckBox'

const HoverView = ({onCheck, data, selectedBoxes, idBox}) => {
    const {wrapper, checkbox, content, titles, values, buttonCollection, footer, buttonUse} = Styles
    const {sentByAdmin, installedByUser, lastEdited} = data

    const [wasSelected, setWasSelected] = useState(false)

    const checkSelectedBox = () => {
        let isSelected = selectedBoxes.some(item=> item.id == idBox)
        console.log(isSelected,'isSelected', selectedBoxes, idBox)
        setWasSelected(isSelected)
    }

    const onPress = () => {
        document.location.href = 'https://google.com.ua';
    }

    useEffect(checkSelectedBox, [])

    return (
        <div className={wrapper}>
            <div className={checkbox}>
                <CheckBox defaultChecked={wasSelected} onCheck={onCheck}/>
            </div>
            <div className={[content, globalStyle['flex-jc-sb-column']].join(' ')}>
                <div className="information">
                    <div className={globalStyle['flex-jc-fs']}>
                        <div className={titles}>
                            <p>Sent by admin:</p>
                            <p>Installed by user:</p>
                            <p>Last edited:</p>
                        </div>
                        <div className={values}>
                            <p>{sentByAdmin ? 'YES' : 'NO'}</p>
                            <p>{installedByUser ? 'YES' : 'NO'}</p>
                            <p>{lastEdited}</p>
                        </div>
                    </div>
                </div>
                <div className={[footer, globalStyle['flex-jc-sb-ai-c']].join(' ')}>
                    <button onClick={onPress} className={buttonUse}>Use</button>
                    <div className={buttonCollection}>
                        <button><img src={require('../../../assets/images/pen.png')}/></button>
                        <button><img src={require('../../../assets/images/eye.png')}/></button>
                        <button><img src={require('../../../assets/images/bucket.png')}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverView