import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/add" element={<ItemForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
