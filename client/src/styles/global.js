import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,600;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    *{
        margin:0;
        padding:0;
        outline:0;
        border:0;
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
    }

    *:focus{
        outline:0;    
    }

    html,body,#root {
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        display:block;
        overflow:visible;
    }

    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
        font-size:16px;
    }

    ul{
        list-style:none;
    }
`