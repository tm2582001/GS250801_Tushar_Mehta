import { Route, Routes } from "react-router";
import Navigation from "./route/navigation/navigation.component";
import Store from "./route/store/store.component";
import Sku from "./route/sku/sku.component";
import Chart from "./route/chart/chart.component";

// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" Component={Navigation}>
          <Route index Component={Store} />
          <Route path="skus" Component={Sku} />
          {/* <Route path="planning" Component={} /> */}
          <Route path="chart" Component={Chart} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
