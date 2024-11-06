import Home from './page/Home';
import About from './page/About';
import './assets/css/base/base.css'
import './assets/css/base/_reset.css'
import './assets/css/base/_variaveis.css'
import './assets/css/components/footer.css'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
      <Home />
      <About />
      <Footer />
      </div>
    </>
  )
}

export default App