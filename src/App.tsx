import Home from './pages/Home';
import ThemeProvider from './theme/provider';
import Details from './pages/Details';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './design-system/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
