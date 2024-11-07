import './App.css';
import Home from './page/Home';
import About from './page/About';
import './assets/css/base/base.css';
function App() {
  const Router = () => {
    const location = window.location.pathname
    if (location === '/about') {
      return <About />
    } else {
      return <Home />
    }
  }
  return (
    <>
      {Router()}
    </>
  );
}
export default App;