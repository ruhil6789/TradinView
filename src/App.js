import logo from './logo.svg';
import './App.css';
// import Header from './Component/Header';
// import { WatchListContextProvider } from "./context/watchListContext";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CoinDetailPage from './pages/CoinDetailPage';
// import CoinSummaryPage from "./pages/CoinSummaryPage"
import TradingViewWidget from './Component/TradingView';
function App() {
  return (
    <div className="App">
      {/* //   <WatchListContextProvider>
    //     <BrowserRouter>
    //       <Header />
    //       <Routes>
    //         <Route exact path="/" component={CoinSummaryPage} />
    //         <Route path="/coins/:id" component={CoinDetailPage} />
    //       </Routes>
    //     </BrowserRouter>
    //   </WatchListContextProvider> */}
      <TradingViewWidget />
    </div>
  );
}

export default App;
