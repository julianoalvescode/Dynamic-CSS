import React from 'react'

import { Content } from './styles'

const TextAreaBox = (props) => (
    <>
        <Content>
            <code><span className="code-main">background-color</span>: <span className="code-color">{props.values.colorMain}</span></code>
            <code><span className="code-main">border-radius</span>: <span className="code-px">{props.values.TopLeft}px</span> <span className="code-px">{props.values.TopRight}px</span> <span className="code-px">{props.values.BottomRight}px</span> <span className="code-px">{props.values.BottomLeft}px</span>;</code>
            <code>-moz-<span className="code-main">border-radius</span>: <span className="code-px">{props.values.TopLeft}px</span> <span className="code-px">{props.values.TopRight}px</span> <span className="code-px">{props.values.BottomRight}px</span> <span className="code-px">{props.values.BottomLeft}px</span>;</code>
            <code>-webkit-<span className="code-main">border-radius</span>: <span className="code-px">{props.values.TopLeft}px</span> <span className="code-px">{props.values.TopRight}px</span> <span className="code-px">{props.values.BottomRight}px</span> <span className="code-px">{props.values.BottomLeft}px;</span></code>
        </Content>
    </>
)

export default TextAreaBox;