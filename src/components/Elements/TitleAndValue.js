import React from 'react'

const TitleAndValue = ({title, value}) => {
    const {wrapper, titleText} = Styles

    return (
        <div style={wrapper}>
            <p><span style={titleText}>{title}</span>: {value}</p>
        </div>
    )
}

const Styles = {
    wrapper:{

    },
    titleText:{
        color:'rgb(253,144,9)',
        fontWeight:'bold'
    }
}

export default TitleAndValue