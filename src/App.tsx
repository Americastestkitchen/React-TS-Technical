import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Header from './components/Header';
import TrendingRecipes from './components/TrendingRecipes';
import AppProvider from './context/AppState';

function App() {
  return (
    <AppProvider>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Header />
        <Greeting />
        <TrendingRecipes />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
