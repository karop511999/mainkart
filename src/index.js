import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class Kds extends React.Component
{
  render()
  {
    const c="KAROP";
    return(
      <div>
        <KKKK msg={c} />
      </div>
    );
  }
}
class KKKK extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>WELCOME</h1>
        <h2>{this.props.msg}</h2>
      </div>
    );
  }
}
ReactDOM.render(<Kds />,document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root1')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
