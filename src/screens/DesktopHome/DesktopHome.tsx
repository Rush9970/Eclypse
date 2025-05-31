import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Navbar } from "../../components/ui/navbar";


import TopA from "./to-top.png"
import HeroImage from "./Hero_mp4.png";
import Frame19 from "./Frame_19.png";
import Frame18 from "./Frame_18.png";
import Frame18_1 from "./Frame_18_(1).png";
import Frame18_2 from "./abc.png";
import Frame11 from "./Frame_11.png";
import Frame12 from "./Frame12.png";
import Frame13 from "./Frame_13.png";
import Rectangle2 from "./Rectangle.png";
import E1 from "./Ellipse_3.png";
import E2 from "./Ellipse_4.png";
import E3 from "./Ellipse_5.png";
import GroupIcon from "./group.png";
import Group1Icon from "./group-1.png";
import ArrowRight from "./arrow-right.png";
import Vector1 from "./Vector.png";
import Vector3 from "./vector-3.svg";
import SocialIcon from "./vector-2.svg";
import R from "./rcircle.png"
export const DesktopHome = (): JSX.Element => {
  const navigate = useNavigate();

  // Size options data
  const sizeOptions = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  // Accordion items data
  const accordionItems = [
    { id: "size-fit", title: "Size & Fit" },
    { id: "delivery-returns", title: "Delivery & Returns" },
    { id: "how-made", title: "How This Was Made" },
  ];

  // Footer navigation links
  const footerLinks = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Buy" },
    { id: 4, text: "Our Customers" },
    { id: 5, text: "Contacts" },
  ];

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
        <Navbar />

        {/* Buy Button (Fixed) */}
        

        {/* Brand Name and Logo */}
        <div className="relative w-[385px] h-[129px] mt-[154px] ml-[59px]">
          <h1 className="absolute top-0 left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[107.1px] tracking-[-1.07px]">
            Eclypse
          </h1>
          <img 
  src={R} 
  alt="Eclypse logo mark" 
  className="absolute w-[27px] h-[26px] top-7 left-[356px]" 
/>
        </div>

        {/* Year Indicator */}
        <div className="absolute w-[53px] h-[18px] top-[309px] left-[1339px] flex items-center">
          <div className="w-[11px] h-[11px] bg-[url(/group-1.png)] bg-[100%_100%] mr-2" />
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px]">
            2025
          </div>
        </div>

        {/* Hero Banner */}
          <div className="relative w-[1339px] h-[530px] mt-[353px] mx-auto rounded-[5px] overflow-hidden">
    <img src={HeroImage} alt="Hero banner" className="w-full h-full object-cover" />
    <div className="absolute bottom-[32px] right-[170px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[34.6px] tracking-[-0.69px]">
      A silhouette worth remembering
    </div>
  </div>
        {/* Brand Philosophy */}
        <div className="w-[800px] mt-[183px] ml-[50px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-normal">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </div>

        {/* Learn More Link */}
        <div className="w-[312px] h-[41px] mt-[71px] ml-[50px] relative">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px]">
            Learn more about Eclypse
          </div>
          <Separator className="w-[301px] mt-2 bg-white/50" />
          <img
            className="absolute w-[39px] h-[39px] top-0 right-0"
            alt="Arrow right"
            src={ArrowRight}
          />
        </div>

        {/* Product Gallery Grid */}
        <div className="mt-[119px] ml-[50px] grid grid-cols-12 gap-6">
    <div className="col-span-8 h-[489px] rounded-[5px] overflow-hidden">
      <img src= {Frame18_1}alt="Product 1" className="w-full h-full object-cover" />
    </div>
    <div className="col-span-4 h-[489px] rounded-[5px] overflow-hidden">
      <img src={Frame18_2} alt="Product 2" className="w-full h-full object-cover" />
    </div>

    <div className="col-span-4 h-[397px] rounded-[5px] overflow-hidden">
      <img src={Frame18} alt="Product 3" className="w-full h-full object-cover" />
    </div>
    <div className="col-span-4 h-[397px] rounded-[5px] overflow-hidden">
      <img src={Frame19} alt="Product 4" className="w-full h-full object-cover" />
    </div>
    <div className="col-span-4 h-[397px] rounded-[5px] overflow-hidden">
      <img src={Frame13} alt="Product 5" className="w-full h-full object-cover" />
    </div>
  </div>


        {/* Product Title */}
        <h2 className="w-[800px] mt-[183px] ml-[43px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px]">
          Silhouette No. 1 – Vermilion
        </h2>

        {/* Product Details Section */}
        <div className="w-full mt-[60px] bg-[#f6f6f6] flex">
          {/* Product Image */}
           <img
    className="w-[704px] h-[912px] object-cover"
    alt="Vermilion garment"
    src={Rectangle2}
  />

          {/* Product Info */}
          <div className="flex-1 p-[53px] pl-[32px]">
            {/* Product Description */}
            <p className="w-[539px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-normal">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </p>

            {/* Product Gallery */}
            <div className="flex gap-6 mt-[85px]">
    <div className="w-52 h-[199px] rounded-[5px] overflow-hidden">
      <img src={Frame12} alt="Product detail 1" className="w-full h-full object-cover" />
    </div>
    <div className="w-52 h-[199px] rounded-[5px] overflow-hidden">
      <img src={Frame11} alt="Product detail 2" className="w-full h-full object-cover" />
    </div>
    <div className="w-52 h-[199px] rounded-[5px] overflow-hidden">
      <img src={Frame13} alt="Product detail 3" className="w-full h-full object-cover" />
    </div>
  </div>

            {/* Price Section */}
            <div className="mt-[103px]">
              <Separator className="mb-[54px]" />
              <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px]">
                ₹ 7,999
              </div>
              <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px] ml-[128px] -mt-[24px]">
                MRP incl. of all taxes
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-[62px]">
              <div className="flex justify-between items-center mb-[30px]">
                <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px]">
                  Please select a size
                </div>
                <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline">
                  Size chart
                </div>
              </div>

              <div className="flex gap-[32px]">
                {sizeOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className={`w-[82px] h-[49px] rounded bg-[#d9d9d9] border-none ${
                      option.size === "M"
                        ? "bg-black text-[#f6f6f6]"
                        : "text-[#767676]"
                    }`}
                  >
                    <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]">
                      {option.size}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="mt-[53px]" />

            {/* Action Buttons */}
            <div className="flex gap-8 mt-[86px]">
              <Button
                variant="outline"
                className="flex-1 h-[66px] rounded-[8.71px] border-2 border-[#c2c2c2]"
                onClick={() => navigate("/cart")}
              >
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
                  Add to Cart
                </span>
              </Button>
              <Button className="flex-1 h-[66px] bg-black rounded-[8.71px]">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]">
                  Buy
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="w-[1342px] mt-[159px] ml-[50px]">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-t border-white/20"
              >
                <AccordionTrigger className="py-6">
                  <h3 className="w-[800px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] text-left">
                    {item.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-white/70 pb-4">
                    Content for {item.title}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Separator className="w-[1342px] mt-[40px] ml-[50px] bg-white/20" />

        {/* Testimonial Section */}
        <section className="w-[1341px] mt-[124px] ml-[50px] relative">
          <h4 className="[font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px]">
            OUR CUSTOMERS
          </h4>

          <div className="relative mt-[92px]">
            <span className="absolute top-0 left-4 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px]">
              &quot;
            </span>
            <p className="w-[750px] ml-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl leading-[52.3px]">
              Understated, but unforgettable. It feels like it was made for me
            </p>
            <img
              className="absolute w-4 h-7 top-[54px] right-[203px]"
              alt="Vector"
              src={Vector1}
            />
          </div>

          <div className="mt-[70px] ml-[82px]">
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl">
              Random Woman
            </p>
            <p className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base mt-2 ml-2">
              NY, USA
            </p>
          </div>

          <div className="absolute right-[136px] top-[97px]">
            <img
              className="w-[126px] h-[126px]"
              alt="Customer"
              src={E1}
            />
          </div>

          <div className="absolute right-[108px] top-[253px]">
            <img
              className="w-[69px] h-[69px]"
              alt="Customer"
              src={E2}
            />
          </div>

          <div className="absolute right-[108px] top-[343px]">
            <img
              className="w-[69px] h-[69px]"
              alt="Customer"
              src={E3}
            />
          </div>
        </section>

        <Separator className="w-[1342px] mt-[40px] ml-[50px] bg-white/20" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 mt-[72px] ml-[50px] bg-[#090808]">
          <div className="flex flex-col items-start gap-[67px]">
            {/* Brand Logo */}
            <div className="flex items-start gap-2">
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
            <nav className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <React.Fragment key={link.id}>
                    <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm">
                      {link.text}
                    </div>
                    {index < 2 && (
                      <div className="opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm">
                        /
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div className="opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm">
                  /
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm">
                  Our Customers
                </div>
                <div className="opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm">
                  /
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm">
                  Contacts
                </div>
              </div>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start justify-end gap-8 flex-1 self-stretch">
            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px]">
                CONTACT
              </div>
              <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px]">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px]">
                EMAIL
              </div>
              <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Social and Copyright */}
          <div className="flex flex-col items-end justify-between flex-1 self-stretch">
            <div className="w-10 h-10 bg-white rounded-[20px] flex items-center justify-center">
              <img
                className="w-[13px] h-[15px]"
                alt="Social icon"
                src={TopA}
              />
            </div>

            <div className="opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px]">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px]">
                ©
              </span>
              <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};