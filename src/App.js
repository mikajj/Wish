import UiHeader from "./components/header/header";
import UiInfo from "./sections/info/info";
import UiFaculty from "./sections/faculty/faculty";
import UiRaiting from "./sections/raiting/raiting";
import UiPrices from "./sections/prices/prices";
import UiFooter from "./sections/footer/footer";

function App() {
  return (
    <div>
      <UiHeader />
      <UiInfo />
      <UiFaculty />
      <UiRaiting />
      <UiPrices />
      <UiFooter />
    </div>
  );
}

export default App;
