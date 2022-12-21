import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App my-5 mx-2">
      <EcommerceProvider>
        <ProductsContainer />
      </EcommerceProvider>
    </div>
  );
}

export default App;
