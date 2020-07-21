// require('./lib')

// for (let i in [1,2,3]) {
//   console.log(i)
// }

// console.log('main');


// ——————————————————————————————————————

// import { ToyReact } from './ToyReact';

// // let a = <MyComponent name="a" />
// // let a = <div name="a" />
// // 这时候创建的不是变量了，而是接收一个 'div' 的属性

// var a = createElement(MyComponent, {
//   name: 'a'
// })


// ——————————————————————————————————————

// import { ToyReact } from './ToyReact';

// let a = <div name="a" id='ida'>
//   <span>hello</span>
//   <span>world</span>
//   <span>!</span>
// </div>

// 上面的 a 变量及内部的 span 就调用了 ToyReact.createElement
// let a = ToyReact.createElement('div', {
//   name: 'a',
//   id: 'ida'
//   },
//   ToyReact.createElement('span', null, 'hello'),
//   ToyReact.createElement('span', null, 'world'),
//   ToyReact.createElement('span', null, '!')
// )

// console.log(a)

// document.body.appendChild(a)


// ——————————————————————————————————————


// import { Component, ToyReact } from './ToyReact';

// class MyComponent extends Component {
//   render() {
//     return <div>
//       {this.children}
//       <p>JOJO！！</p>
//     </div>
//   }

//   setAttribute(name, value) {
//     this[name] = value
//   }

//   mountTo(parent) {
//     let vdom = this.render()
//     vdom.mountTo(parent)
//   }
// }

// let a = <MyComponent name="a" id='ida'>
//   <p>HELLO !</p>
// </MyComponent>

// ToyReact.render(
//   a,
//   document.body
// )


// ——————————————————————————————————————

// import { Component, ToyReact } from './ToyReact';

// class Square extends Component {
//   constructor(props) {
//     this.state = {
//       value: '',
//     };
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({ value: 'X' })}>
//         {this.state.value}
//       </button>
//     );
//   }
// }

// class Board extends Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// ToyReact.render(
//   <Board/>,
//   document.body
// )




import { ToyReact, Component } from "./ToyReact";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square value={i} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const a = <Board />;

ToyReact.render(
  a,
  document.body,
);