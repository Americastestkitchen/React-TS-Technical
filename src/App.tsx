import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Header from './components/Header';
import TrendingRecipes from './components/TrendingRecipes';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Greeting />
        <TrendingRecipes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
