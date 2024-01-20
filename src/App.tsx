import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Header from './components/Header';
import TrendingRecipes from './components/TrendingRecipes';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <div style={{ padding: "100px 0" }}>
        <Greeting />
        <TrendingRecipes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
