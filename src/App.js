import './App.css';
import User from './Components/User';
import {Provider} from 'react-redux'
import store from './redux/User/Store'


function App() {
  return (
    <div className="App">
    <h1>React Redux</h1>
    <Provider store={store}>
    <User/>
    </Provider>
    
  
      
    </div>
  );
}

export default App;
