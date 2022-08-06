import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ExerciseOne from './pages/ExerciseOne';
import ExerciseTwo from './pages/ExerciseTwo';
import ExerciseThree from './pages/ExerciseThree';
import ExerciseFour from './pages/ExerciseFour';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ExerciseOne />} />
          <Route path="ExerciseTwo" element={<ExerciseTwo />} />          
          <Route path="ExerciseThree" element={<ExerciseThree />} />
          <Route path="ExerciseFour" element={<ExerciseFour />} />
          {/* <Route path="*" element={<NoPage />} />           */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);