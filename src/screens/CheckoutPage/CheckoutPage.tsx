import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/ui/navbar";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: ""
  });

  const [addressSaved, setAddressSaved] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const isFilled = Object.values(form).every((val) => val.trim() !== "");
    if (!isFilled) {
      alert("Please fill in all fields");
      return;
    }
    setAddressSaved(true);
    alert("Address saved successfully!");
  };

  const handlePlaceOrder = () => {
    if (!addressSaved) {
      alert("Please save the address before placing the order.");
      return;
    }
    alert("Order placed successfully!");
    navigate('/');
  };

  // Price details
  const itemPrice = 7999;
  const shipping = 200;
  const beforeTax = 6599;
  const tax = 1400;
  const total = itemPrice + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-lg font-medium mb-8 hover:opacity-80 transition-opacity"
        >
          ← Back to Shopping
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Address Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 rounded-full bg-red-600 mr-2" />
                <span className="font-medium text-lg">Add New Address</span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                  />
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                  />
                </div>

                <input 
                  type="text" 
                  name="street" 
                  placeholder="Street Address" 
                  value={form.street} 
                  onChange={handleChange} 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    name="apt" 
                    placeholder="Apt Number" 
                    value={form.apt} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                  />
                  <input 
                    type="text" 
                    name="state" 
                    placeholder="State" 
                    value={form.state} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                  />
                  <input 
                    type="text" 
                    name="zip" 
                    placeholder="Zip" 
                    value={form.zip} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black/20 focus:outline-none" 
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/')}
                    className="flex-1 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="flex-1 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Save This Address
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-6">
                By placing your order, you agree to our company{" "}
                <button className="underline hover:text-gray-900">Privacy policy</button> and{" "}
                <button className="underline hover:text-gray-900">Conditions of use</button>.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span>Items - Silhouette No. 1 – Vermilion</span>
                  <span>₹ {itemPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Shipping and handling:</span>
                  <span>₹ {shipping}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Before tax:</span>
                  <span>₹ {beforeTax}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Tax Collected:</span>
                  <span>₹ {tax}</span>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-medium text-lg">
                    <span>Order Total:</span>
                    <span>₹ {total.toLocaleString()}</span>
                  </div>

                  <button 
                    onClick={handlePlaceOrder}
                    className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;