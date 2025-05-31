import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "./cart";
import R from "../../screens/DesktopHome/rcircle.png"
export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070707]">
        <div className="max-w-[1440px] mx-auto px-[50px] py-[32px] flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8">
              Eclypse
            </div>
            <img
              className="w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
              alt="Vector"
              src={R}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-[32px]">
            <button className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[15px] hover:opacity-80">
              About
            </button>
            <button className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[15px] hover:opacity-80">
              Buy
            </button>
            <button 
              className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[15px] hover:opacity-80"
              onClick={() => setIsCartOpen(true)}
            >
              Cart
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};