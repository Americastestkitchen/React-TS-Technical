import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Header from './components/Header';
import TrendingRecipes from './components/TrendingRecipes';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <Greeting />
      <TrendingRecipes />
      <Footer />
    </div>
  );
}

export default App;
