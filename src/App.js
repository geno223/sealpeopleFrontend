import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './pages/styles.scss'
const App = () => {
  return(
    <div className='App'>
      <Header/>
      <Outlet />
      
    </div>
  )
}

export default App