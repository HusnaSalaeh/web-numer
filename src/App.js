import './App.css'
import {NavBar} from './NavBar';
import Bisection from'./RootOfEquation/Bisection';
import FalsePosition from'./RootOfEquation/FalsePosition';
import Onepoint from'./RootOfEquation/Onepoint';
import Newton from './RootOfEquation/Newton';
import Secant from './RootOfEquation/Secant';
import CramersRule from './LinearAlgebra/CramersRule';
import GaussEliminate from './LinearAlgebra/GaussEliminate';
import MatrixInverse from './LinearAlgebra/MatrixInverse';
import Jacobi from './LinearAlgebra/Jacobi';
import GaussSeidal from './LinearAlgebra/GaussSeidal';
import Mytest from './RootOfEquation/Mytest';
import Test from './LinearAlgebra/Test';
import Conjugate from './LinearAlgebra/Conjugate';
import NewtonsDiv from './Interpolation/NewtonsDiv';
import Lagrande from './Interpolation/Lagrande';
import Exam from './LinearAlgebra/Exam';
import Linear from './Regression/Linear';
import Polynomial from './Regression/Polynomial';
import Multipoly from './Regression/Multipoly';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/bisection' element={<Bisection/>}/>
        <Route path='/falsePosition' element={<FalsePosition/>}/>
        <Route path='/onepoint' element={<Onepoint/>}/>
        <Route path='/newton' element={<Newton/>}/>
        <Route path='/secant' element={<Secant/>}/>
        <Route path='/mytest' element={<Mytest/>}/>
        <Route path='/cramer' element={<CramersRule/>}/>
        <Route path='/gaussEliminate' element={<GaussEliminate/>}/>
        <Route path='/matrixInverse' element={<MatrixInverse/>}/>
        <Route path='/jacobi' element={<Jacobi/>}/>
        <Route path='/gaussSeidal' element={<GaussSeidal/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/conjugate' element={<Conjugate/>}/>
        <Route path='/newtondiv' element={<NewtonsDiv/>}/>
        <Route path='/lagrange' element={<Lagrande/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/linear' element={<Linear/>}/>
        <Route path='/polynomial' element={<Polynomial/>}/>
        <Route path='/multipoly' element={<Multipoly/>}/>
    
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
