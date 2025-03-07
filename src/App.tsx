import { Route, Routes } from "react-router";
import Navigation from "./route/navigation/navigation.component";
import Store from "./route/store/store.component";

// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" Component={Navigation}>
          <Route index Component={Store} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
