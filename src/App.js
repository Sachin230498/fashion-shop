import './App.css';
import LoginSignup from './pages/LoginSignup';


let val=process.env.BASEURL

console.log(val)

function App() {
return(
  <>
  <LoginSignup/>
  </>
)
  
}

export default App;
