//import HomeScreen from './components/homescreen/HomeScreen'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import SignUpScreen from './components/getstarted/SignUpScreen';
import LoginScreen from './components/getstarted/loginScreen';
import HomeScreen from './components/homescreen/HomeScreen'
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/route/PrivateRoute';
import ResetPassword from './components/getstarted/resetPassword';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route path="/signup" element={<SignUpScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>    
      </AuthProvider>
    </Router>
    
    //<HomeScreen />
    
  );
}

export default App;
