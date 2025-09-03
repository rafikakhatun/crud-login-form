import './App.css'
import Login from './component/Login'
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <Login></Login>

    </>
  )
}

export default App
