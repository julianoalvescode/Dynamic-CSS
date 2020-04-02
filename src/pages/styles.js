import styled from 'styled-components'


export const Content = styled.div`

    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .dynamic-main {
        background-color: #fff;
        display: flex;
        border-radius: 12px;
        width: 75%;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 0;    
    }

    .dynamic-content {
        width: 45%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        margin: 0 20px;

    }

    .dynamic-path {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .dynamic-path-box {
            h4 {
                color: #999;
                font-weight: bold;
                font-size: 0.9rem;
            }
        }
        
    }

    .dynamic-csscode {
        width: 100%;
    }

    .dynamic-color {
        margin: 15px 0;
        display: flex;
        align-items: center;

        .dynamic-color-title {
            color: #999;
                font-weight: bold;
                font-size: 0.9rem;
            margin-right: 1rem;
        }


    }


`;


export const BoxDynamic = styled.div`

    width: 37%;
    height: 310px;
    border-radius: ${props => props.radiusTopLeft + 'px'} ${props => props.radiusTopRight + 'px'} ${props => props.radiusBottomRight + 'px'} ${props => props.radiusBottomLeft + 'px'} ;
    background-color: ${props => props.color};


`;

export const Footer = styled.footer`

    width: 20%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;

    p {
        color: #fff;
    }

`;