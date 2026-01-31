import './App.css';
import Header from "./MyComponents/Header";
import Todo from './MyComponents/TodoItem';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";


function App() {
  return(
    <>
    <Header title = "My Todos List" />
    <Todos />
    
    <Footer />
    </>
  )
}

export default App;
