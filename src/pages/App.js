import React, { useState } from 'react';
import { Helmet } from 'react-helmet'

import GlobalStyle from './../styles/globalStyle'
import { Content, BoxDynamic, Footer } from './styles'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Ranger  from './components/Ranger'
import ColorPicker from './components/Color'
import TextArea from './components/Textarea'


const App = () => {

  const [ TopLeft, setTopLeft ] = useState("0");
  const [ TopRight, setTopRight ] = useState("0");
  const [ BottomRight, setBottomRight ] = useState("0");
  const [ BottomLeft, setBottomLeft ] = useState("0");

  const [ colorMain, setColor ] = useState('#F4194A')

  return(
    <>
      <GlobalStyle/>
        <Helmet>
          <title>Dynamic Border</title>
          <meta name="author" content="Juliano Alves"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet"/>
        </Helmet>
      <Content>
        <div className="dynamic-nit">
          <h1>Fala meu bruxo, ainda não tem versão <span>pra este dispositivo</span> :/</h1>
          <div className="dynamic-nit-icons">
            <a href="https://github.com/julianoalvescode" rel="noopener noreferrer" target="_blank">
              <GoMarkGithub color="#fff"/>
            </a>
            <a href="https://www.linkedin.com/in/juliano-alves-73133a183/" rel="noopener noreferrer" target="_blank">
              <FaLinkedin color="#fff"/>
            </a>
            <a href="mailto:contato.julianoalvess@gmail.com" rel="noopener noreferrer" target="_blank">
              <MdEmail color="#fff"/>
            </a>
          </div>
        </div>
        <div className="dynamic-main">
          <div className="dynamic-content">
            <div className="dynamic-path">
              <div className="dynamic-path-box">
                <h4>Top Left</h4>
                <Ranger set={setTopLeft} />
              </div>
              <div className="dynamic-path-box">
                <h4>Top Right</h4>
                <Ranger set={setTopRight}/>
              </div>
              <div className="dynamic-path-box">
                <h4>Bottom Right</h4>
                <Ranger set={setBottomRight}/>
              </div>
              <div className="dynamic-path-box">
                <h4>Bottom Left</h4>
                <Ranger set={setBottomLeft}/>
              </div>
            </div>
            <div className="dynamic-color">
              <h4 className="dynamic-color-title">Background</h4>
              <ColorPicker set={setColor}/>
            </div>
            <div className="dynamic-color">
              <div className="dynamic-csscode">
                <h4 className="dynamic-color-title">Code CSS</h4>
                <TextArea values={{TopLeft, TopRight, BottomRight, BottomLeft, colorMain}} color={colorMain}/>
              </div>
            </div>
          </div>
        <BoxDynamic color={colorMain} radiusTopLeft={TopLeft} radiusTopRight={TopRight} radiusBottomRight={BottomRight} radiusBottomLeft={BottomLeft}/>
        </div>
        <Footer>
          <p>Developed by Juliano Alves</p>
          <a href="https://github.com/julianoalvescode" rel="noopener noreferrer" target="_blank">
            <GoMarkGithub color="#fff"/>
          </a>
          <a href="https://www.linkedin.com/in/juliano-alves-73133a183/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin color="#fff"/>
          </a>
          <a href="mailto:contato.julianoalvess@gmail.com" rel="noopener noreferrer" target="_blank">
            <MdEmail color="#fff"/>
          </a>
        </Footer>
      </Content>
    </>
  )
}

export default App;
