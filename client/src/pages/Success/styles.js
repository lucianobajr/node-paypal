import styled from "styled-components";
import { darken } from 'polished'


export const Wrapper = styled.div `
    height: 100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    
    background-color:rgba(255, 164, 55,0.55);


    font-family: 'Source Sans Pro', sans-serif;
`;

export const Content = styled.div `
    width:1366px;
    height: 1000px;

    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Box = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        height: 200px;
        z-index:1;

        display:block;
        position:absolute;

        margin-top:-120px;
    }

    .content{
        height: 500px;
        width:500px;
        background-color:#fff;

        border-radius:10px;

        padding-top:150px;

        display:flex;
        flex-direction:column;
        align-items:center;

        box-shadow: 1px 1px 10px 1px rgba(49, 22, 159, 0.1);

        #title{
            font-weight:bold;
            font-size:35px;
            text-align:center;
            font-family:GothamPro;
            margin-bottom:70px;
            color:#000;
        }
        #content{
            font-family:GothamProRegular;  
            font-size:26px;
            line-height:1.5;
            text-align:center;
        }

        button{
            margin-top:80px;

            background-color:#FF6B0A;

            text-align:center;
            font-family:GothamPro;
            margin-bottom:70px;
            color:#fff;

            border-radius:30px;

            cursor: pointer;

            height: 50px;
            width:200px;


            transition: all .8s ease-in-out 0s;

            &:hover{
                background-color:${darken(0.1,'#FF6B0A')};
            }
        }
    }

`;