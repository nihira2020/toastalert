import logo from './logo.svg';
import './App.css';
import {toast,ToastContainer,Slide,Bounce, Flip, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notify=()=>{
   toast("Basic Notification");
   toast.info("Info Notification");
   toast.success("success Notification");
   toast.warning("warning Notification");
   toast.error("error Notification");

   toast("Basic Notification",{position:toast.POSITION.TOP_LEFT,theme:'colored'});
   toast.info("Info Notification",{position:toast.POSITION.TOP_LEFT,theme:'colored'});
   toast.success("success Notification",{position:toast.POSITION.TOP_LEFT,theme:'colored'});
   toast.warning("warning Notification",{position:toast.POSITION.TOP_LEFT,theme:'colored'});
   toast.error("error Notification",{position:toast.POSITION.TOP_LEFT,theme:'colored'});

   toast("Basic Notification",{position:toast.POSITION.TOP_CENTER,theme:'dark'});
   toast.info("Info Notification",{position:toast.POSITION.TOP_CENTER,theme:'dark'});
   toast.success("success Notification",{position:toast.POSITION.TOP_CENTER,theme:'dark'});
   toast.warning("warning Notification",{position:toast.POSITION.TOP_CENTER,theme:'dark'});
   toast.error("error Notification",{position:toast.POSITION.TOP_CENTER,theme:'dark'});
  };
  return (
    <div className="App">
        <h1>Welcome to Nihira Techiees</h1>
        <button onClick={notify}>Notify!</button>
        <ToastContainer theme='colored' transition={Zoom} autoClose={20000} hideProgressBar={true}></ToastContainer>
    </div>
  );
}

export default App;
