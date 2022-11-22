import React from 'react';
import ReactDOM from 'react-dom';
import Booklist from "./booklist"
import "./index.css"

const App = () => {
  return ( 
    <main>
      <Booklist />
    </main>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"))