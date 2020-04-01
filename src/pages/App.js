import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import Clipboard from 'react-clipboard.js';

import GlobalStyle from './../styles/globalStyle'

import Ranger  from './components/Ranger'
import ColorPicker from './components/Color'

import { Content, BoxDynamic } from './styles'


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
          <title>App CSS</title>
          <meta name="author" content="Juliano Alves"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet"/>
        </Helmet>
      <Content>
      
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
              <h4 className="dynamic-color-title">Code CSS</h4>
              <Clipboard component="p" data-clipboard-text={colorMain}>
                copy to clipboard
              </Clipboard>
            </div>
          </div>
        <BoxDynamic color={colorMain} radiusTopLeft={TopLeft} radiusTopRight={TopRight} radiusBottomRight={BottomRight} radiusBottomLeft={BottomLeft}/>
        </div>

      </Content>
    </>
  )
}

export default App;
