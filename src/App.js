import './App.css';
import Header from "./MyComponents/Header";
import Todo from './MyComponents/TodoItem';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";


function App(){
  let todos = [
    
{    sno: 1,
    title: "go to the market",
    desv: "you need to go market for some groceries"},

{    sno: 2,
    title: "go to the mall",
    desv: "you need to go mall for some clothes"},

{    sno: 3,
    title: "go to the gym",
    desv: "you need to go gym "}

  ]


  return(
    <>
    <Header title = "My Todos List"  searchBar = {false}/>
    <Todos todos = {todos} />
    
    <Footer />
    </>
  )
}




export default App;
