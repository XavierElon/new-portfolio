import React, { useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider} from 'styled-components'
import { Head } from '@components'
import { GlobalStyle } from '@styles'
import matrix from '../styles/matrix.gif'

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
    background-image: url(${matrix})
    background-repeat: repeat
`

const Main = ({ children, location}) => {
    const isHome = location.pathname === '/'
    const [isLoading, setIsLoading] = useState(isHome)

    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'))
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer')
                    link.setAttribute('target', '_blank')
                }
            })
        }
    }

    useEffect(() => {
        if (isLoading) {
            return
        }

        if (location.hash) {
            const id = location.hash.substring(1)
            setTimeout(() => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView()
                    element.focus()
                }
            }, 0)
        }

        handleExternalLinks()

    }, [isLoading])

    return (
        <>
            <Head />
            <div id='root gif-container'>
                <StyledContent>
            {/* <iframe width="10000" height="1000" frameborder="0" src="https://www.shadertoy.com/embed/lsVBWy?gui=true&t=10&paused=false&muted=false" allowfullscreen></iframe> */}
                <GlobalStyle />
                
                <h1>XavierElon</h1>
                </StyledContent>
            </div>
        </>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
}

export default Main