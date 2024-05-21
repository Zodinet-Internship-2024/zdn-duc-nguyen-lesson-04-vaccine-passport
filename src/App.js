import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import FormSearch from "./components/FormSearch";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FormSearch />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
