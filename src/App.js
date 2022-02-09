import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
import UpdateUser from './components/UpdateUser';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<AllUsers />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/updateuser/:id" element={<UpdateUser />} />
            </Routes>
        </div>
    );
};

export default App;
