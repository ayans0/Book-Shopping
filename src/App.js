import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './components/head/Head';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Categories from './components/categories/Categories';
import { store } from './components/redux/Store';
import Adventure from './components/Adventure';
import Classic from './components/Classic';
import Detective from './components/Detective';
import Philosophy from './components/Philosophy';
import Poem from './components/Poem';
import Psychology from './components/Psychology';
import Romance from './components/Romance';
import Science from './components/Science';
import Thriller from './components/Thriller';
import { Provider } from 'react-redux';
import Cart from './components/cart/Cart';
import List from './components/list/List';

function App() {
  return (
    <Provider store={store}>
    <div>
     
    <BrowserRouter> 
    <Cart/>
    <List/>
     <Head/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Head />} />
       <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/adventure/*" element={<Adventure/>}/> 
       <Route path="/classics/*" element={<Classic/>}/>
      <Route path="/detective/*" element={<Detective/>}/>
      <Route path="/philosophy/*" element={<Philosophy/>}/>
      <Route path="/poems/*" element={<Poem/>}/>
      <Route path="/psychology/*" element={<Psychology/>}/>
      <Route path="/romance/*" element={<Romance/>}/>
      <Route path="/sciencefiction/*" element={<Science/>}/>
      <Route path="/thriller/*" element={<Thriller/>}/>


      </Routes>
    </BrowserRouter>
    </div>
     </Provider>
  );
}

export default App;
