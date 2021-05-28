import './App.css';
import {Provider} from 'react-redux'

import {getStore} from './saga_redux/store'
import  Post from './Components/Post';


const store = getStore();


function App() {
  return (
    <div className="App">
    <h1>React Redux</h1>
    <Provider store={store}>
    <Post/>
    </Provider>
    
  
      
    </div>
  );
}

export default App;
