import './App.css';
import Home from './views/home/home';
import {BrowserRouter as Router,Routes , Route, Link, Navigate } from 'react-router-dom';
import Login from './views/home/login';
import Register from './views/home/Register';
import ListCategory from './views/home/category/ListCategory';
import AddCategory from './views/home/category/addCatregory';
import UpdateCategory from './views/home/category/updateCategory';
import Layout from './views/home/layout';
import AddSubCategory from './views/home/subCategory/addSubCategory';
import ListSubCategory from './views/home/subCategory/listSubcategory';
import UpdateSubCategory from './views/home/subCategory/updateSubcategory';
import AddProduct from './views/home/product/addProduct';
import ListProduct from './views/home/product/ListProduct';
import UpdateProduct from './views/home/product/updateProd';
 

function App() {

   //if we're 
  const PrivateRoute = ({children}) => {
    if (!localStorage.getItem('user')){
      return <Navigate to = '/login'/ > 
    }
    return children
  }; //children houma les pages eli 3ana

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <PrivateRoute><Home /></PrivateRoute>  }> 
        <Route exact path="/" element={<PrivateRoute><Layout/></PrivateRoute> }> </Route>
            <Route exact path="/listcat" element={<PrivateRoute><ListCategory /></PrivateRoute> }> </Route>
            <Route exact path="/addCat" element={<PrivateRoute><AddCategory /></PrivateRoute> }> </Route>
            <Route exact path='/updateCat/:id' element={<PrivateRoute><UpdateCategory/></PrivateRoute>}></Route>
            <Route exact path="/addSub" element={<PrivateRoute><AddSubCategory/></PrivateRoute>}></Route>
            <Route exact path="/listSub" element={<PrivateRoute><ListSubCategory/></PrivateRoute>}></Route>
            <Route exact path="/updateSub/:id" element={<PrivateRoute><UpdateSubCategory/></PrivateRoute>}></Route>
            <Route exact path="/addProd" element={<PrivateRoute><AddProduct/></PrivateRoute>}></Route>
            <Route exact path="/listProd" element={<PrivateRoute><ListProduct/></PrivateRoute>}></Route>
            <Route exact path="/updateProd/:id" element={<PrivateRoute><UpdateProduct/></PrivateRoute>}></Route>
        </Route>
        <Route exact path="/register" element={<Register /> }> </Route>
        <Route exact path="/login" element={<Login /> }> </Route>
      </Routes>
    </Router>
  );
}

export default App;
