import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import Automation from './components/Automation';
import PostAutomation from './components/PostAutomation';
import Process from './components/Process';
import Duration from './components/Duration';

function App() {

  // let a = [1, 2, 3, 4, 5]
  // for (let k = 0; k < a.length; k++) {
  //   console.log(a[k])
  // }
  return (
    <>
      <MyNav />
      <MyHeader />
      <Automation />
      <PostAutomation />
      <Process />
      <Duration />
    </>
  );
}

export default App;
