import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import loginBg from "@/assets/login-bg.png";

const OTPVerify = () => {

  const [otp, setOtp] = useState("");
  const [qr, setQr] = useState("");
  const [timer, setTimer] = useState(30);

  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username;
  const qrFromLogin = location.state?.qr;

  /* ======================
     LOAD QR FROM LOGIN
  ====================== */
  useEffect(() => {

    // ❌ If no username → go back
    if (!username) {
      navigate("/admin-login");
      return;
    }

    // ✅ Only show QR if first time
    if (qrFromLogin) {
      setQr(qrFromLogin);
    }

  }, [username, qrFromLogin]);

  /* ======================
     TIMER (UI ONLY)
  ====================== */
  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [timer]);

  /* ======================
     VERIFY OTP
  ====================== */
  const handleVerify = async () => {

    try {

      const res = await axios.post(
        "https://my-backend-warq.onrender.com/api/verify-otp",
        { username, otp }
      );

      
      // ✅ SUCCESS NAVIGATION
      navigate("/admin-sangam@9822");

    } catch (error) {

      alert(error.response?.data?.message || "Invalid OTP");

    }

  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-[380px] text-white">

        <h2 className="text-2xl font-semibold text-center mb-4">
          Verify OTP
        </h2>

        {/* ✅ SHOW QR ONLY FIRST TIME */}
        {qr && (
          <>
            <div className="flex justify-center mb-4">
              <img src={qr} alt="QR Code" className="w-32 h-32 rounded-lg" />
            </div>

            <p className="text-center text-xs mb-4 text-gray-300">
              Scan QR in Google Authenticator (only once)
            </p>
          </>
        )}

        {!qr && (
          <p className="text-center text-sm mb-4 text-gray-300">
            Enter OTP from Google Authenticator
          </p>
        )}

        {/* OTP INPUT */}
        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit code"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-center text-lg tracking-widest focus:outline-none"
        />

        {/* VERIFY BUTTON */}
        <button
          onClick={handleVerify}
          className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition"
        >
          Verify
        </button>

        {/* TIMER INFO */}
        <div className="text-center mt-4 text-xs text-gray-400">
          OTP refreshes every 30 seconds in Google Authenticator
        </div>

      </div>
    </div>
  );
};

export default OTPVerify;