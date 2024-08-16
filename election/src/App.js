import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Navbar from './component/Navbar';

import Login from './pages/Loginpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminEdit from './pages/admin/AdminEditParty';
import AdminRoute from './protected/AdminRoute';
import UserRoute from './protected/UserRoute';
import ProfileCard from './pages/Profilecard';
import Footer1 from './component/Footer1';
import AdminPartyDashboard from './pages/admin/AdminPartyDashboard';
import PartiesPeople from './pages/PartiesPeople';
import Ranking from './pages/Ranking';
import ProgressPage from './pages/ProgressPage';
import VoteList from './pages/admin/VoteDashboard';
import AdminCreateProgress from './pages/admin/AdminCreateProgress';
import AnalysisBoard from './pages/AnalysisBoard';
import Forgetpassword from './pages/ForgetPassword';
import Dashboard from './pages/admin/Dashboard';

 
function App() {
  return (
    <Router>

      <Navbar/>
      <ToastContainer/>
      <Routes>

      <Route path='/login' element={<Login/>}/>
      <Route path ='/dashboard' element ={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path ='/forgetPassword' element={<Forgetpassword/>}/>
      

        {/* Admin Route */}
        <Route element ={<AdminRoute/>}>
        <Route path='/adminP' element={<AdminPartyDashboard/>}/>

        <Route path ='admin/edit/:id' element ={<AdminEdit/>}/>
        <Route path ="/voteList" element={<VoteList/>}/>
        <Route path='/progressAD' element={<AdminCreateProgress/>}/>
        {/* <Route path ='/dashboard' element ={<Dashboard/>}/> */}
        </Route>

{/* User ROute */}
        <Route element ={<UserRoute/>}>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/profile' element={<ProfileCard/>}></Route>
        <Route path ='/partiesP' element={<PartiesPeople/>}/>
        <Route path ='/ranking' element={<Ranking/>}/>
        <Route path ='/progress' element={<ProgressPage/>}/>
        <Route path ="/profile" element ={<ProfileCard/>}></Route>
        <Route path ="/analysis" element ={<AnalysisBoard/>}></Route>

        </Route>
      </Routes>
      <Footer1/>
      


    </Router>

  
    
  );
}
export default App;
 