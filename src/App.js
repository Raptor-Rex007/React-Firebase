//import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';


function App() {
  return (
    <>
    
    
      <SignUp onClick={SignIn}/>
      <AuthDetails />
      
    
    </>
      
    
  );
}

export default App;
