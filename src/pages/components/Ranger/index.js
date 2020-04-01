import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

class Ranger extends React.Component {

  state = {
    inputValue: 0,
  };


  onChange = value => {
    this.props.set(value)
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={200}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={200}
            style={{ margin: '8px 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}



export default Ranger