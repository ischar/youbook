import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />        
      </Routes>
    </Layout>
  );
}

export default App;
