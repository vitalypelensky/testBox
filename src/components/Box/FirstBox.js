import React, {useState, useContext} from 'react'
import styles from './Styles.module.css'
import globalStyle from '../../assets/styles/global-styles.module.css'
import TitleAndValue from '../Elements/TitleAndValue'
import NetworkLink from '../Elements/NetworkLink'
import HoverView from '../Elements/Hover/HoverView'
import SelectedView from '../Elements/Selected/SelectedView'
import BoxContext from '../../context/BoxesContext'

const FirstBox = ({data}) => {
    const {wrapper, content, avatar, information, userInfo, userContact, socialNetwork, footer, hoverView} = styles
    let {urlAvatar, name, description, phone, mobile, address, email, linksSocialNetwork, boxInformation} = data

    const {addToSelectedBoxesContext, removeFromSelectedBoxesContext, selectedBoxes} = useContext(BoxContext)

    const [hover, toggleHover] = useState(false)

    const selectedBox = (checked) => {
        if(checked){
            addToSelectedBoxesContext(data)
        } else{
            removeFromSelectedBoxesContext(data)
        }
    }

    return (
        <div className={wrapper} onMouseEnter={()=>{toggleHover(true)}} onMouseLeave={()=>{toggleHover(false)}}>
            <div className={[globalStyle['flex-jc-sb'], content].join(' ')}>
                <div className={[globalStyle['flex-jc-fs'], globalStyle['flex-grow']].join(' ')}>
                    <div className={avatar} style={{backgroundImage: `url(${urlAvatar})`}}/>
                    <div className={information}>
                        <div className={userInfo}>
                            <p>{name}</p>
                            <p>{description}</p>
                        </div>
                        <div className={userContact}>
                            <TitleAndValue title={'phone'} value={phone}/>
                            <TitleAndValue title={'mobile'} value={mobile}/>
                            <TitleAndValue title={'email'} value={email}/>
                            <TitleAndValue title={'address'} value={address}/>
                        </div>
                    </div>
                </div>
                <div className={[socialNetwork, globalStyle['flex-jc-fs-dr-col']].join(' ')}>
                    {linksSocialNetwork.map((network, index) =>
                        <NetworkLink network={network} key={index}/>
                    )}
                </div>
            </div>
            <div className={footer}>
                <a href="https://google.com.ua">
                    <img src={require('../../assets/images/footer.png')} alt='footer'/>
                </a>
            </div>
            { !selectedBoxes.length
                ?
                hover
                    ?
                    <HoverView className={hoverView} data={boxInformation} onCheck={selectedBox} selectedBoxes={selectedBoxes} idBox={data.id}/>
                    :
                    null
                :
                <SelectedView onCheck={selectedBox} selectedBoxes={selectedBoxes} idBox={data.id}/>
            }
        </div>
    )
}

export default FirstBox