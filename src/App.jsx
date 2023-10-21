import "./style.css";
import { NavBar, Banner, Skills, Projects, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
