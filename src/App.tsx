import { Route, Routes } from 'react-router'
import Navigation from './route/navigation/navigation.component'

// import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' Component={Navigation}>
        
      </Route>
    </Routes>
    </>
  )
}

export default App
