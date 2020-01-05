import React from 'react'
import Styles from './Styles.module.css'
import GlobalStyle from '../../assets/styles/global-styles.module.css'
import FirstBox from '../Box/FirstBox'

const Boxes = ({boxes}) => {
    const {wrapper} = Styles
    return (
        <div className={[wrapper, GlobalStyle['flex-jc-fs-dr-row'], GlobalStyle['flex-wrap']].join(' ')}>
            {boxes.map(box => <FirstBox data={box} key={box.id}/>)}
        </div>
    )
}

export default Boxes