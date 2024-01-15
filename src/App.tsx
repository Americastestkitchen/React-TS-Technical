import ContentContainer from './ContentContainer';
import AppProvider from './context/AppState';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h3>Rate Today&#39;s Trending Recipes</h3>
        <ContentContainer />
      </div>
    </AppProvider>
  );
}

export default App;
