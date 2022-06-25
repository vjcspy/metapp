import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const Hello = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-3xl font-bold underline">Test tailwind</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
