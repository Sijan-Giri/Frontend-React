import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SingleCard from './pages/SingleCard.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditBlog from './pages/EditBlog.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/blogDetail/:id' element={<SingleCard />} />
    <Route path='/addProduct' element={<AddProduct />}/>
    <Route path='/editBlog/:id' element={<EditBlog />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
