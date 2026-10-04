/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Ruler, Scissors, Truck, RefreshCw, MessageSquare } from 'lucide-react';

export default function ServicePage() {
  const [scheduled, setScheduled] = useState(false);
  const [scheduleData, setScheduledData] = useState({ name: '', phone: '', slot: 'Morning (10:00 AM - 1:00 PM)' });

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleData.name.trim() || !scheduleData.phone.trim()) return;
    setScheduled(true);
  };

  return (
    <div className="bg-[#FCF9F5] min-h-screen py-16 animate-fade-in text-left">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Service Title */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C7A86B] uppercase font-sans">EXPERIENCE LUXURY SERVICES</p>
          <h1 className="mt-2 font-serif text-4xl font-light tracking-tight text-[#4B315C] sm:text-5xl">
            BOUTIQUE <span className="font-serif font-semibold italic text-[#C7A86B]">SERVICES</span>
          </h1>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-[#C7A86B]/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Premium Service Offerings */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B]">
                <Scissors className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#4B315C]">
                  Custom Blouse Tailoring
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                  Provide your exact chest, neck, and shoulder depth measurements, and our master tailors will customize your sleeveless blouse using precise margin allowances and soft organic linings.
                </p>
              </div>
            </div>

            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B]">
                <Ruler className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#4B315C]">
                  Alterations & Elastic Margin Fittings
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                  Every blouse comes with double-sided pre-stitched 2-inch margins, letting you comfortably expand or alter the size as needed in under five minutes.
                </p>
              </div>
            </div>

            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B]">
                <Truck className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#4B315C]">
                  Free Delivery on Orders Over ₹2,000
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                  Fast and reliable shipping across India with major courier partners. Transit times: 2-3 days for metropolitan areas (Kolkata, Delhi, Mumbai, Bangalore).
                </p>
              </div>
            </div>

            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B]">
                <RefreshCw className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#4B315C]">
                  Boutique Handloom Exchange Promise
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                  Not a perfect fit? No worries. We support a direct 7-day hassle-free exchange on all unworn items from our standard catalog collections.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Virtual Stylist Consultation Booking */}
          <div className="md:col-span-5">
            <div className="border border-[#C7A86B]/30 bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7A86B]/15 text-[#C7A86B] mb-4">
                <Calendar className="h-5 w-5" />
              </div>
              
              <h3 className="font-serif text-lg font-bold text-[#4B315C] mb-1">
                Virtual Stylist Consulting
              </h3>
              <p className="text-xs text-[#4B315C]/70 mb-4">
                Schedule a complimentary 15-minute video call with a Sundaram stylist to discuss matching blouse necklines, saree drapes, and sizes.
              </p>

              {scheduled ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl p-4 text-center animate-scale-in">
                  <p className="font-bold">Consultation Slot Scheduled!</p>
                  <p className="mt-1">We will contact you on WhatsApp at <strong>{scheduleData.phone}</strong> to confirm your slot on <strong>{scheduleData.slot}</strong>.</p>
                  <button 
                    onClick={() => setScheduled(false)}
                    className="mt-4 text-xs underline font-semibold text-emerald-700 hover:text-emerald-950"
                  >
                    Reschedule Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={scheduleData.name}
                      onChange={(e) => setScheduledData(prev => ({ ...prev, name: e.target.value }))}
                      className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-[#FCF9F5] px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={scheduleData.phone}
                      onChange={(e) => setScheduledData(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-[#FCF9F5] px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#C7A86B] mb-1">
                      Preferred Booking Slot
                    </label>
                    <select
                      value={scheduleData.slot}
                      onChange={(e) => setScheduledData(prev => ({ ...prev, slot: e.target.value }))}
                      className="h-10 w-full rounded-lg border border-[#4B315C]/15 bg-[#FCF9F5] px-3 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:outline-none"
                    >
                      <option>Morning (10:00 AM - 1:00 PM)</option>
                      <option>Afternoon (1:00 PM - 4:00 PM)</option>
                      <option>Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-[#4B315C] text-white text-xs font-semibold tracking-wider hover:bg-[#C7A86B] transition-all"
                  >
                    BOOK APPOINTMENT
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
