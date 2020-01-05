import React, {useContext} from 'react'
import Styles from './Styles.module.css'
import BoxContext from "../../context/BoxesContext"
import GlobalStyle from '../../assets/styles/global-styles.module.css'

const Header = () => {
    const {wrapper, emptySelected, selected} = Styles

    const {deleteFromBoxes, unselectedAll, selectedBoxes} = useContext(BoxContext)

    const openSomeLink = () => {
        document.location.href = 'https://www.youtube.com/watch?v=YvFwjiJPVEA'
    }

    return (
         <div className={wrapper}>
             {!selectedBoxes.length ?
                 <div className={[emptySelected ,GlobalStyle['flex-jc-sb-ai-c']].join(' ')}>
                    <p>Signature List</p>
                     <button onClick={openSomeLink}>Create a signature</button>
                 </div>
                 :
                 <div className={[selected, GlobalStyle['flex-jc-fs']].join(' ')}>
                     <div onClick={unselectedAll} className={GlobalStyle['flex-jc-sb-ai-c']}>
                         <p>{`Selected (${selectedBoxes.length})`}</p>
                         <img src={require('../../assets/images/cancel.png')}/>
                     </div>
                     <div onClick={deleteFromBoxes} className={GlobalStyle['flex-jc-sb-ai-c']}>
                         <img src={require('../../assets/images/delete.png')}/>
                         <p>{`Delete (${selectedBoxes.length})`}</p>
                     </div>
                 </div>
             }
         </div>
     )
}

export default Header