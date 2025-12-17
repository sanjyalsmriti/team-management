import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import { ToastProvider } from './context/ToastContext';

function App(){
  return(
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users /> }/> 
          <Route path = "/add-users" element={<AddUser />}/>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}
export default App;