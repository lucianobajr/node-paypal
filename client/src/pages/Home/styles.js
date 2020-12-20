import styled from 'styled-components';

import { darken } from 'polished'

export const Wrapper = styled.div `
  height: 100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    
    font-family: 'Source Sans Pro', sans-serif;
`;

export const Content = styled.div `
    width:1366px;
    height: 100%;

    display:flex;
    flex-direction:column;
`;

export const Header = styled.header `
    margin-top:50px;
    .logo-box{
        display:flex;
        align-items:center;

        #title{
            color:#000;
            font-size:30px;
            font-weight:500;
            font-family:Lobster;

            margin-left:15px;
            	
            text-shadow: 2px 8px 6px rgba(0,0,0,0.1),
                 0px -5px 35px rgba(255,255,255,0.05);
        }
        
        #logo{
            
        }
    }
`;

export const Main = styled.section `
    margin-top:100px;

    .fs-content{
        display:flex;
        justify-content:space-around;

        .box{
            display:flex;
            flex-direction:column;
            align-items:flex-start;

            width:500px;

            #fs-text{
                color:#000;
                font-size:50px;
                font-weight:normal;
                line-height:1.5;
                font-family:Lobster;

                margin-bottom:40px;
            }

            #sec-text{
                font-family:GothamProRegular;
                font-size:15px;
            }

            #btn-box{
                width:250px;
                height: 56px;
                border-radius:8px;

                margin-top:80px;

                font-family:GothamPro;
                font-size:18px;
                font-weight:500;
                color:#fff;

                background-color:#F53838;
                box-shadow: 0px 5px 20px -5px rgba(0,0,0,0.40);
                -webkit-box-shadow: 0px 5px 20px -5px rgba(0,0,0,0.40);
                -moz-box-shadow: 0px 5px 20px -5px rgba(0,0,0,0.40);

                transition: all .3s ease-in-out 0s;

                &:hover{
                    background-color:${darken(0.15,'#F53838')};
                }
            }
        }
    }
`;

export const Footer = styled.footer `

`;