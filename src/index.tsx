import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { Button, message, Card } from "antd";
import "../node_modules/antd/dist/antd.css";
import aisi from "./images/aisi.png";
import Header from "./Header";
const App: React.FC<{ title: string }> = (props) => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle as CSSProperties}>
      <Card
        style={{ borderRadius: "20px", overflow: "hidden" }}
        title={<Header />}
        headStyle={{ background: "red" }}
        bodyStyle={{ background: "lightgreen" }}
        hoverable
      >
        <img src={aisi} alt="aisi.png" style={{ width: "100%", display: "block" }} />
        <Button
          type="primary"
          onClick={() => {
            message.success("你TM真帅");
          }}
          block
        >
          点击我
        </Button>
      </Card>
    </div>
  );
};

ReactDOM.render(<App title="tony" />, document.getElementById("app"));
