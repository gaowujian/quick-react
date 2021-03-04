import React from "react";
import ReactDOM from "react-dom";
import { Button, message, Card } from "antd";
import "../node_modules/antd/dist/antd.css";
import code from "./images/code.png";
const App: React.FC<{ title: string }> = (props) => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <Card title={`这个项目是${props.title}`}>
        <img src={code} alt="code.png" style={{ width: "100%", maxWidth: "200px", display: "block" }} />
        <Button
          type="primary"
          onClick={() => {
            message.success("你TM真帅");
          }}
        >
          点击我
        </Button>
      </Card>
    </div>
  );
};

ReactDOM.render(<App title="tony" />, document.getElementById("app"));
