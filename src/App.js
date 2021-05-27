import './App.css';
import {Provider} from 'react-redux'
import Posts from './Components/Posts';
import {getStore} from './store'
import UserNames from './Components/UserNames';


const store = getStore();


function App() {
  return (
    <div className="App">
    <h1>React Redux</h1>
    <Provider store={store}>
    <UserNames/>
    </Provider>
    
  
      
    </div>
  );
}

export default App;
