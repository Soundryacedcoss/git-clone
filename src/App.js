import './App.css';
import { LandingPage } from './LandingPage';
import { Provider } from 'react-redux';
import store from './Store';
import { Route, Routes } from 'react-router-dom';
import { Overview } from './Overview';
function App() {
  return (
    <div className="App">
    
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Overview' element={<Overview/>}/>
        </Routes>
      </Provider>
     
    </div>
  );
}

export default App;
