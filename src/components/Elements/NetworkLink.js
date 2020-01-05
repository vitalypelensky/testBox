import React from 'react'

const images = {
    facebook: require('../../assets/images/facebook-logo.png'),
    instagram: require('../../assets/images/linkedin.png'),
    twitter: require('../../assets/images/twitter.png')
}

const NetworkLink = ({network}) => {
    const {wrapper, image} = Style
    const {link, name} = network
    return (
        <a href={link} style={wrapper}>
            <img style={image} src={images[name]} alt={name}/>
        </a>
    )
}

const Style = {
    wrapper:{
        backgroundColor: 'rgb(253,144,9)',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: '5px',
        marginBottom: '10px'
    },
    image: {
        width: '20px',
        height: '20px'
    }
}

export default NetworkLink