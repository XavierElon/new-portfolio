import { createGlobalStyle } from 'styled-components'
import matrix from './matrix.gif'

const GlobalStyle = createGlobalStyle`
    body { 
        background-image:url('https://www.shadertoy.com/embed/lsVBWy?gui=true&t=10&paused=false&muted=false"); 
        background-repeat:repeat; 
        background-size: cover;
    }
`

export default GlobalStyle