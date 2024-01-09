import { Route, Routes } from "react-router-dom";
import DisplayData from "./Practice/DisplayData";
import Hello from "./Practice/Hello";
import Helloworld from "./Practice/Helloworld";
import Navbar from "./Practice/Navbar";
import Home from "./Practice/Home";
import About from "./Practice/About";
import InlineStyling from "./Practice/InlineStyling";
import CustomCard from "./Practice/CustomCard";
import LoginForm from "./Practice/LoginForm";
import { Provider} from 'react-redux';
import Counter from "./Practice/Counter";
import ErrorBoundary from "./Practice/ErrorBoundary";
import Hero from "./Practice/Hero";
import Theme from "./Practice/Theme";
import { Store } from "./Practice/Store";
function App(){
  const staticData='i am static';
  const dynamicData=new Date().toDateString();
return(
  <Provider store={Store}>
  <div>
   <Theme/>
  </div>
  </Provider>
)
}
export default App;