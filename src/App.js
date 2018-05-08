import React, { Component } from "react";
// import classNames from "classnames/bind";
// import styles from "./App.scss";
// import Button from "./components/Button";
import StyledButton from "./components/StyledButton";

//classnames/bind 에서 classNames를 불러오면 binding function을 이용가능하다.
// const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div>
        <StyledButton big>버튼</StyledButton>
        {/* big이라고 써주는건 big={true}와 같은 표현이다. */}
      </div>
    );
  }
}

export default App;
