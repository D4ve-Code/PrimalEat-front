import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
