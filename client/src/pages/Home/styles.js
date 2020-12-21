import styled, { css } from 'styled-components';

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
    height: 3600px;

    display:flex;
    flex-direction:column;
`;

export const Header = styled.header `
    margin-top:50px;

    .logo-box{
        display:flex;
        align-items:center;

        @media (max-width:1300px) {
            margin-left:40px;
        }

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
    width:100%;
    height: 3100px;

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
                    background-color:${darken(0.15, '#F53838')};
                }
            }
        }
    }

    .sec-content{
        width:1140px;
    
        display:flex;
        align-items:center;
        justify-content:space-between;

        margin-top:100px;
        margin-left:80px;

        .boxes{
            display:flex;
            align-items:center;
            justify-content:center;
            width:370px;
            height: 100px;

            

            .icons-box{
                border-radius:50%;
                width:55px;
                height:55px;

                background-color:#FFECEC;

                display:flex;
                align-items:center;
                justify-content:center;

                transition: all .3s ease-in-out 0s;

                margin-right:25px;

                cursor: pointer;

                &:hover{
                    background-color:${darken(0.05, '#FFECEC')};
                }
            }

            .texts{
                .value{
                    margin-bottom:15px;

                    font-weight:bold;
                    font-size:20px;
                    font-family:GothamPro;
                }
                .type{
                    font-family:GothamProRegular;
                    font-size:17px;
                    

                    color:#292929;
                }
            }
        }

        .margin-box{
            border-right:solid 2px #eee;
        }
    }

    .third-content{
        height: 500px;
        width:100%;

        margin-top:50px;
        
        background: rgb(244,244,244);
        background: linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 77%);

        display:flex;
        justify-content:center;
        padding-top:70px;

        .third-box{
            width:350px;

            margin-left:100px;
            margin-top:50px;

            display:flex;
            flex-direction:column;
            align-items:flex-start;

            #title{
                width:300px;

                font-family:GothamPro;  
                font-weight:bold;
                font-size:26px;
                line-height:1.5;
            }
            #subtitle{
                margin-top:10px;
                
                font-family:GothamProRegular; 
                line-height:2;
                font-size:14px;
            }

            .list{

                margin-top:20px;
                li{
                    display:flex;
                    align-items:flex-end;

                    margin-bottom:20px;
                    .box-check{
                        border-radius:50%;
                        height: 24px;
                        width:24px;
                        background-color:#2FAB73;

                        display:flex;
                        align-items:center;
                        justify-content:center;

                        margin-right:10px;
                    }

                    p{
                        font-family:GothamProRegular; 
                        font-size:16px;
                    }
                }
            }
        }
    }

    .four-content{
        margin-top:150px;

        display:flex;
        flex-direction:column;
        justify-content:center;

        #title{
            font-weight:bold;
            font-size:35px;
            text-align:center;
            font-family:GothamPro;
            margin-bottom:100px;
        }
    }

    .fifth-content{
        margin-top:50px;

        display:flex;
        flex-direction:column;
        align-items:center;

        #title{
            font-family:GothamPro;  
            font-weight:bold;
            font-size:26px;
            line-height:1.5;

            margin-bottom:30px;
        }
       .content{
            display:flex;
       }

    }
`;



export const Item = styled.div `
    height: 760px;
    width:330px;
    border-radius:10px;
    border: 2px  solid #ddd;

    display:flex;
    flex-direction:column;
    align-items:center;

    padding-top:50px;
    margin-right:30px;

    cursor: pointer;

    box-shadow: 1px 1px 10px 1px rgba(49, 22, 159, 0.1);

    transition: all .3s ease-in-out 0s;
    

    .logo-icon{
        height: 150px;
    }

    #title-item{
        font-weight:bold;
        font-size:35px;
        text-align:center;

        font-family:GothamPro;

        margin-top:20px;
        margin-bottom:30px;
    }

    #description{
        margin-top:100px;
    

        font-family:GothamProRegular; 
        font-size:16px;

        width:280px;
        text-align:center;
    }

    #value{
        margin-top:100px;

        font-weight:bold;
        font-size:20px;
        text-align:center;

        font-family:GothamPro;
    }

    #btn-get{
        width:177px;
        height: 45px;

        margin-top:50px;

        border:2px solid #F53838;
        background:transparent;

        font-weight:bold;
        font-size:15px;
        text-align:center;
        color:#F53838;
        font-family:GothamPro;
        box-shadow: 1px 1px 10px 1px rgba(49, 22, 159, 0.1);

        transition: all .8s ease-in-out 0s;

        border-radius:30px;

        &:hover{
            border:none;
            background-color:#F53838;
            color:#fff;
        }
    }


    &:hover{
        box-shadow: 1px 1px 10px 1px rgb(245, 56, 56,0.3);
    }

`;

export const Footer = styled.div `
    height: 563px;
    width:100%;

    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(238,238,238,1) 49%, rgba(255,255,255,1) 92%);

    .logo{
        display:flex;

        margin-top:50px;
        margin-left:40px;

        #name-logo{
            color:#000;
            font-size:30px;
            font-weight:500;
            font-family:Lobster;

            margin-left:15px;
        }
    }
`;