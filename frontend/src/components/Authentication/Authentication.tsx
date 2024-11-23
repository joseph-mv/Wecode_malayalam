
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./loginPopup/LoginPopup";
import { useState } from "react";
import Signup from "./SignupPopup/SignupPopup";

type Auth={ isOpen?: boolean;
    onClose?: () => void;}

export const Authentication = ({ onClose, isOpen }:Auth) => {
    const [isLogin,setIsLogin]=useState(false)
  if (!isOpen) return null;
    

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl relative overflow-hidden mt-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-black text-2xl hover:text-gray-700 transition-colors z-10"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="text-center pt-8 pb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 rounded-t-3xl">
          <h1 className="text-3xl font-bold mb-2">WeCode Malayalam</h1>
          <p className="text-purple-100">Welcome back to our community</p>
        </div>
        {isLogin?<Login setIsLogin={setIsLogin} />:<Signup setIsLogin={setIsLogin}/> }
        

      </div>
    </div>
  );
};
