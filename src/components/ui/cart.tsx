import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './button';
import { Separator } from './separator';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white p-6 shadow-xl overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-xl font-semibold">Cart</Dialog.Title>
              <Dialog.Close asChild>
                <button className="rounded-full p-1 hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* Cart Items */}
            <div className="flex-1">
              <div className="rounded-lg border p-4 mb-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md" />
                  <div className="flex-1">
                    <h3 className="font-medium">Silhouette No. 1 – Vermilion</h3>
                    <p className="text-sm text-gray-500">Size: M</p>
                    <p className="mt-2 font-medium">₹ 7,999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-auto">
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹ 7,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>₹ 200</span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹ 8,199</span>
                </div>
              </div>
              <Button 
                onClick={handleCheckout}
                className="w-full mt-6 h-12 text-base"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};