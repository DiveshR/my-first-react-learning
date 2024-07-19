import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      {/* <Navbar title="React App" aboutText="About Us"   /> */}
      <Navbar   />
      <div className="container my-3">
      <TextForm heading="Content"/>
      </div>
      
    </>
  );
}

export default App;
