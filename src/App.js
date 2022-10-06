import './App.css';
import LandPage from "./Components/landPage.jsx";
import HowitWork from "./Components/howItWork";
import Choose from "./Components/choose";
import PropertyFeatures from "./Components/propertyFeatures";
import Testimony from "./Components/testimony";
import FooterProp from "./Components/footerProp";


function App() {
  return (
    <div className="App">
      <LandPage/>
      <HowitWork/>
      <Choose></Choose>
      <PropertyFeatures/>
      <Testimony></Testimony>
      <FooterProp></FooterProp>
    </div>
  );
}

export default App;
