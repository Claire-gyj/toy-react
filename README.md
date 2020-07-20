## 安装
```
mkdir toy-react 
npm init -y
npm install webpack --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-react-jsx --save-dev
```


## @babel/plugin-transform-react-jsx

```js
plugins: [
  [
    '@babel/plugin-transform-react-jsx',
    { pragma: 'ToyReact.createElement'}
  ]
]
```

使用 react 时引入的一个插件。
不设置 pragma 时，创建 vdom 时则默认用的是 React.createElement()。
所以 `{ pragma: 'ToyReact.createElement'}` 会用 `ToyReact.createElement()` 方法去创建一个 vdom。
