import { Login } from "./pages/Auth/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Logout } from "./pages/Auth/Logout";
import { SignUp } from "./pages/Auth/SignUp";
import { Posts } from "./pages/Posts/Posts";
import { UserProfile } from "./pages/Profile/UserProfile";
import { StartUpProfile } from "./pages/Profile/StartUpProfile";
import { Home } from "./pages/Home/Home";

function App() {
  return (
      <div>
          <Router>
              <Routes>
                <Route path="/login" element= {<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/profile" element={<UserProfile />} />
                <Route path="/startUp/profile" element={<StartUpProfile />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
