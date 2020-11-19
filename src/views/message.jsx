import { Component } from "react";
import { Route } from "react-router-dom";
import MessageDetail from "./message-detail";
import MyNavLink from "../components/my-nav-link";

export default class Message extends Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ];
      this.setState({ messages });
    }, 1000);
  }
  showDetail =(id)=>{
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }
  showDetail2 =(id)=>{
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }
  back = ()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }
  reqPage=()=>{
    window.location = 'https://www.baidu.com'
  }
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((m, index) => (
            <li>
              <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
              &nbsp;&nbsp;<button onClick={()=>this.showDetail(m.id)}>push查看</button>
              &nbsp;&nbsp;<button onClick={()=>this.showDetail2(m.id)}>replace查看</button>
            </li>
          ))}
        </ul>
        <p>
          <button onClick={this.back}>back</button>
          <button onClick={this.forward}>forward</button>
        </p>
        <p>
          <button onClick={this.reqPage}>页面跳转</button>
        </p>
        <Route
          path="/home/message/messagedetail/:id"
          component={MessageDetail}
        ></Route>
      </div>
    );
  }
}
