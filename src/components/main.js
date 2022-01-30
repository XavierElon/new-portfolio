import React, { useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider} from 'styled-components'
import { Head } from '@components'
import { GlobalStyle } from '@styles'

// Smooth scrolling links (npm install smooth-scroll)
// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
    display: flex
    flex-direction: column
    min-height: 100vh
    background-image: url(${props => props.img})
`

const Main = ({ children, location}) => {
    const isHome = location.pathname === '/'
    const [isLoading, setIsLoading] = useState(isHome)

    useEffect(() => {
        if (isLoading) {
            return
        }
    })

    return (
        <>
            <Head />
            <div id='root gif-container'>
                <StyledContent img={"https://www.shadertoy.com/embed/lsVBWy?gui=true&t=10&paused=false&muted=false"}/>
                <GlobalStyle />
                <h1>XavierElon</h1>
            </div>
        </>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
}

export default Main