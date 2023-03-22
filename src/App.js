import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hat from "./components/hat/Hat";
import UsefulnessOfTheApplication from "./components/usefulnessOfTheApplication/usefulnessOfTheApplication";
import SuitsBlock from "./components/suitsBlock/SuitsBlock";
import HelpBlock from "./components/helpBlock/HelpBlock";
import RegisterCompany from "./components/registerCompany/registerCompany";
import HowToRegister from "./components/howToRegister/HowToRegister";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hat />
      <UsefulnessOfTheApplication />
      <SuitsBlock />
      <HelpBlock />
      <HowToRegister />
      <RegisterCompany />
      <Footer />
    </div>
  );
}

export default App;
