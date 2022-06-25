import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './meta/base/components/layout/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}
