/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Product } from '../data/products';
import ProductSVGArt from './ProductSVGArt';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  // Checkout form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  // Calculating pricing totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingThreshold = 2000;
  const shippingFee = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 150;
  const totalAmount = subtotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s]{10,14}$/.test(formData.phone)) {
      errors.phone = 'Enter a valid 10-digit Indian phone number';
    }
    if (!formData.address.trim()) errors.address = 'Full delivery address is required';
    if (!formData.postalCode.trim()) {
      errors.postalCode = 'Postal PIN code is required';
    } else if (!/^[0-9]{6}$/.test(formData.postalCode)) {
      errors.postalCode = 'Enter a valid 6-digit Indian PIN code';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate placing order
    const randomId = 'BHD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderConfirmed(true);
  };

  const handleResetCartAndClose = () => {
    onClearCart();
    setCheckoutMode(false);
    setOrderConfirmed(false);
    setFormData({ name: '', phone: '', address: '', postalCode: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FCF9F5] shadow-2xl h-full flex flex-col justify-between border-l border-[#4B315C]/15 animate-slide-left">
        
        {/* Header Zone */}
        <div className="h-20 px-6 border-b border-[#4B315C]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#4B315C]" />
            <h3 className="font-serif text-lg font-semibold text-[#4B315C]">
              {orderConfirmed ? 'ORDER RECIEVED' : checkoutMode ? 'DELIVERY DETAILS' : 'SHOPPING BAG'}
            </h3>
            {!orderConfirmed && !checkoutMode && (
              <span className="text-xs bg-[#4B315C]/5 text-[#4B315C] font-semibold px-2 py-0.5 rounded-full tabular-nums">
                {cartItems.length}
              </span>
            )}
          </div>
          <button
            onClick={orderConfirmed ? handleResetCartAndClose : onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#4B315C]/10 text-[#4B315C] transition-all"
            aria-label="Close cart panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {orderConfirmed ? (
            /* ==================================================
               POST-ORDER CONFIRMED VIEW (Order Confirmation)
               ================================================== */
            <div className="text-center py-6 animate-scale-in">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6 border border-emerald-200">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              
              <h4 className="font-serif text-xl font-bold text-[#4B315C]">
                Order Confirmed
              </h4>
              <p className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md inline-block mt-2 font-semibold">
                Preparing Shipment — Cash on Delivery
              </p>

              <div className="mt-6 border border-[#4B315C]/10 bg-white rounded-xl p-5 text-left text-xs space-y-3 shadow-inner">
                <p className="flex justify-between font-semibold border-b border-[#4B315C]/5 pb-2">
                  <span className="text-[#4B315C]/60 uppercase tracking-wider text-[10px]">Order ID:</span>
                  <span className="font-mono text-[#4B315C]">{orderId}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#4B315C]/60 font-medium">Customer Name:</span>
                  <span className="font-semibold text-[#4B315C]">{formData.name}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#4B315C]/60 font-medium">Phone Number:</span>
                  <span className="font-semibold text-[#4B315C]">{formData.phone}</span>
                </p>
                <p className="flex flex-col">
                  <span className="text-[#4B315C]/60 font-medium mb-1">Shipping Address:</span>
                  <span className="font-semibold text-[#4B315C] bg-[#FCF9F5] p-2 rounded border border-[#4B315C]/5">
                    {formData.address}, Pin: {formData.postalCode}
                  </span>
                </p>
                <div className="border-t border-[#4B315C]/10 pt-3 flex justify-between text-sm font-bold">
                  <span>Grand Total (COD):</span>
                  <span className="font-mono text-[#C7A86B] text-base">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-[#4B315C]/60 leading-relaxed max-w-sm mx-auto">
                Thank you for shopping with Sundaram. Our weaving artisans in Hooghly and weavers in Shantipur are preparing your elegant apparel. We will dispatch within 24 hours.
              </p>

              <button
                onClick={handleResetCartAndClose}
                className="mt-8 w-full h-11 bg-[#4B315C] text-white text-xs font-semibold tracking-wider hover:bg-[#C7A86B] transition-all"
              >
                CONTINUE SHOPPING
              </button>
            </div>

          ) : checkoutMode ? (
            /* ==================================================
               CHECKOUT DETAILS FORM VIEW
               ================================================== */
            <div className="animate-fade-in">
              <button
                onClick={() => setCheckoutMode(false)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#C7A86B] hover:text-[#4B315C] mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Shopping Bag
              </button>

              <h4 className="font-serif text-lg font-medium text-[#4B315C] mb-4">
                Verify Your Address
              </h4>
              
              <div className="bg-[#C7A86B]/10 border border-[#C7A86B]/30 rounded-xl p-4 text-xs text-[#4B315C] mb-6 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#C7A86B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Cash on Delivery (COD) Enabled</p>
                  <p className="mt-1 text-[#4B315C]/80">No advance payment required. Verify your phone and pin-code to confirm shipment.</p>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Chaitali Sen"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-white px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
                  />
                  {formErrors.name && <p className="text-[10px] text-red-600 mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1.5">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9830012345"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-white px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
                  />
                  {formErrors.phone && <p className="text-[10px] text-red-600 mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1.5">
                    Full Delivery Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Apartment, Street Name, Kolkata Neighbourhood"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-white px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
                  />
                  {formErrors.address && <p className="text-[10px] text-red-600 mt-1">{formErrors.address}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1.5">
                    Postal PIN Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    placeholder="6-digit PIN code (e.g., 700019)"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-white px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
                  />
                  {formErrors.postalCode && <p className="text-[10px] text-red-600 mt-1">{formErrors.postalCode}</p>}
                </div>

                <div className="pt-4 border-t border-[#4B315C]/10 mt-6 space-y-2 text-xs">
                  <div className="flex justify-between text-[#4B315C]/70">
                    <span>Order Subtotal:</span>
                    <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#4B315C]/70">
                    <span>Shipping Fee:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#4B315C] pt-2 border-t border-[#4B315C]/5">
                    <span>Total Bill (COD):</span>
                    <span className="font-mono text-[#C7A86B]">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#4B315C] text-white text-xs font-semibold tracking-widest hover:bg-[#C7A86B] transition-all mt-6"
                >
                  CONFIRM CASH ON DELIVERY ORDER
                </button>
              </form>
            </div>
          ) : cartItems.length === 0 ? (
            /* ==================================================
               EMPTY BAG STATE
               ================================================== */
            <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4B315C]/5 text-[#C7A86B] mb-4">
                <ShoppingBag className="h-6 w-6 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#4B315C]">Your Bag is Empty</h4>
              <p className="text-xs text-[#4B315C]/60 font-sans mt-1 max-w-xs leading-relaxed">
                Add beautiful sleeveless blouses and handcrafted kurtis to start expressing modern Bengali elegance.
              </p>
              <button
                onClick={onClose}
                className="mt-6 border border-[#4B315C] px-6 py-2.5 text-[11px] font-semibold tracking-wider text-[#4B315C] hover:bg-[#4B315C] hover:text-white transition-all"
              >
                BROWSE COLLECTION
              </button>
            </div>
          ) : (
            /* ==================================================
               STANDARD CART ITEMIZED LIST VIEW
               ================================================== */
            <div className="space-y-6 animate-fade-in">
              
              {/* Shipping Progress bar */}
              <div className="bg-[#4B315C]/5 border border-[#4B315C]/5 rounded-xl p-4 text-xs text-[#4B315C]/95">
                {subtotal >= shippingThreshold ? (
                  <p className="font-semibold text-emerald-700 flex items-center gap-1.5">
                    <span>🎉</span> You qualify for <strong>FREE Delivery</strong> across India!
                  </p>
                ) : (
                  <div>
                    <p>
                      Add <strong>₹{(shippingThreshold - subtotal).toLocaleString('en-IN')}</strong> more to qualify for <strong>FREE Delivery</strong>.
                    </p>
                    <div className="mt-2 w-full h-1.5 bg-[#4B315C]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#C7A86B] transition-all duration-500" 
                        style={{ width: `${(subtotal / shippingThreshold) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Itemized list of cards */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 border-b border-[#4B315C]/5 pb-4"
                  >
                    
                    {/* Tiny thumbnail frame */}
                    <div className="h-20 w-16 overflow-hidden rounded-lg border border-[#4B315C]/10 bg-white shrink-0 aspect-[3/4]">
                      <div className="h-full w-full scale-[1.3] transform origin-center">
                        <ProductSVGArt artType={item.product.svgArt} />
                      </div>
                    </div>

                    {/* Metadata & controls */}
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex justify-between">
                          <h5 className="font-serif text-sm font-semibold text-[#4B315C] line-clamp-1 pr-2">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.size)}
                            className="text-[#4B315C]/40 hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4 stroke-[1.5]" />
                          </button>
                        </div>
                        
                        {/* Dynamic unboxed tag specs (No capsules!) */}
                        <div className="flex items-center gap-2 text-[11px] text-[#4B315C]/50 mt-0.5">
                          <span>Size: {item.size}</span>
                          <span aria-hidden="true">·</span>
                          <span className="capitalize">{item.product.type}</span>
                        </div>
                      </div>

                      {/* Stepper block */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#4B315C]/15 rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                            className="p-1 text-[#4B315C]/60 hover:text-[#4B315C]"
                            aria-label="Decrement quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2.5 font-mono text-xs font-semibold text-[#4B315C] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                            className="p-1 text-[#4B315C]/60 hover:text-[#4B315C]"
                            aria-label="Increment quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <span className="font-mono text-xs font-semibold text-[#4B315C] tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Footer Billing Area */}
        {!orderConfirmed && cartItems.length > 0 && (
          <div className="border-t border-[#4B315C]/10 bg-white p-6 space-y-4">
            
            {!checkoutMode && (
              <>
                <div className="space-y-1.5 text-xs text-left text-[#4B315C]">
                  <div className="flex justify-between text-[#4B315C]/70">
                    <span>Bag Subtotal:</span>
                    <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#4B315C]/70">
                    <span>Shipping Fee:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#4B315C] pt-2 border-t border-[#4B315C]/5">
                    <span>Total Amount (COD):</span>
                    <span className="font-mono text-base text-[#C7A86B]">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutMode(true)}
                  className="w-full h-12 bg-[#4B315C] text-white text-xs font-semibold tracking-widest hover:bg-[#C7A86B] transition-all"
                >
                  PROCEED TO VERIFY & CHECKOUT
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#4B315C]/50 uppercase font-sans">
                  <span>Standard Shipping 2-3 Days</span>
                  <span>·</span>
                  <span>Easy Exchange</span>
                </div>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
