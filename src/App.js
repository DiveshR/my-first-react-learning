
import './App.css';
import './Heading.js';
import Heading from './Heading.js';

let name = "Divesh kumar"
function App() {
  return (
    <>
   <Heading />
    <div className="blank">First React App from {name}</div>
    </>
  );
}

export default App;
