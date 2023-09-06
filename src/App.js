import { useEffect } from 'react';
import './App.css';
import Routing from './routes/Routing';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useEffect(()=>{
    AOS.init(
     { offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,}
    )
  })
  return (
    <>
      <ToastContainer />
      <Routing/>
    </>
  );
}

export default App;
