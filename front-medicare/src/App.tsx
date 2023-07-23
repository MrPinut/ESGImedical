import Header from "./components/Header";
import HomePage from "./pages/Home";
import medicare from './contract/medicare.json';
const ethers = require("ethers");

function App() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}
export default App;
