import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginBg from "@/assets/login-bg.png";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await axios.post("https://my-backend-warq.onrender.com/api/login", {
        username,
        password
      });

      // go to OTP page
      if (res.data.firstTime) {
        navigate("/verify", {
          state: {
            username,
            qr: res.data.qr
          }
        });
      } else {
        navigate("/verify", {
          state: { username }
        });
      }
    } catch (error) {

      alert("Invalid username or password");

    }

  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[380px] text-white">

        <h2 className="text-3xl font-semibold text-center mb-8 tracking-wide">
          Admin Login
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;