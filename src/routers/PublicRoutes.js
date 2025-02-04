import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LogIn } from '../pages/LogIn/LogIn';
import { signInWithEmail } from "../lib/firebaseAuth";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn signInWithEmail={signInWithEmail} />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}