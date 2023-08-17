import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Detail";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase-react/src/supabaseClient";

function Router() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const session = localStorage.getItem("session");

    async function checkAuthentication() {
      if (!session) {
        navigate("/login");
      } else {
        // Check authentication using your magic link OTP verification logic
        const { data: user, error } = await supabase.auth.api.getUser(session);

        if (error) {
          // Handle error, maybe clear session or show error message
          localStorage.removeItem("session");
          navigate("/login");
        } else if (location.pathname === "/login") {
          navigate("/");
        }
      }
    }

    checkAuthentication();
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default Router;
