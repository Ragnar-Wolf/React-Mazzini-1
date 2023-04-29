import './App.css';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const nombre = "React";
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Mi tienda online"/>
    <ItemCount/>
    </>

  )
}

export default App