import React from 'react';
import { Modal,  Tooltip  } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import Flower from "./flower.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvaluateModal: false,
      clickStarCount: 0
    };
  };
  giveEvaluate = () => {
    this.setState({ showEvaluateModal: true, clickStarCount: 0 });
  };
  onCommit = () => {

  };
  clickStarEvent(index) {
    this.setState({ clickStarCount: parseInt(index) })
  }
  render() {
    return (
      <div style={{ flex: 1 }} >
        <div style={{ padding: 15, paddingBottom: 10, cursor: 'pointer' }} onClick={() => this.giveEvaluate()}>
          <Tooltip title="服务评价">
            <img style={{ width: 20, height: 20 }} src={Flower} alt="" />
          </Tooltip>
        </div>
        <Modal
          title="结束会话"
          visible={this.state.showEvaluateModal}
          maskClosable={false}
          width={700}
          destroyOnClose
          onCancel={() => this.setState({ showEvaluateModal: false })}
          footer={null}
          bodyStyle={{ padding: 0 }}
        >
          <div style={{ height: 220, textAlign: "center" }}>
            <div style={{ height: 165 }}>
              <div style={{ color: '#000', fontSize: 15, padding: 15 }}>
                确认结束此次对话吗？请对此次对话评分
                                </div>
              <div style={{ alignSelf: 'center', paddingTop: 10 }}>
                <div className={this.state.clickStarCount >= 1 ? "fullStarColor" : "starStyle"} onClick={() => this.clickStarEvent("1")} />
                <div className={this.state.clickStarCount >= 2 ? "fullStarColor" : "starStyle"} onClick={() => this.clickStarEvent("2")} />
                <div className={this.state.clickStarCount >= 3 ? "fullStarColor" : "starStyle"} onClick={() => this.clickStarEvent("3")} />
                <div className={this.state.clickStarCount >= 4 ? "fullStarColor" : "starStyle"} onClick={() => this.clickStarEvent("4")} />
                <div className={this.state.clickStarCount >= 5 ? "fullStarColor" : "starStyle"} onClick={() => this.clickStarEvent("5")} />
              </div>
            </div>
            <div style={{ display: "flex", borderTop: "0.6px solid rgb(238, 238, 238)" }}>
              <div style={Styles.evaButton} onClick={() => this.setState({ showEvaluateModal: false, clickStarCount: 0 })}>
                <span style={{ color: '#333', fontSize: 15 }}>取消</span>
              </div>
              <div style={Styles.evaButtonLine} />
              <div style={Styles.evaButton} onClick={() => this.onCommit()}>
                <span style={{ color: '#3F7EE0', fontSize: 15 }}>评分</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

const Styles = {
  evaButtonLine: {
    width: .6,
    height: 55,
    backgroundColor: '#EEE'
  },
  evaButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    cursor: "pointer",
    display: "flex"
  },
}


export default App
