import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Register,
  Profile,
  NotFound,
  Homepage,
} from '../pages/index.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
