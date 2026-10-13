import React, { useState, useEffect } from 'react';
import { GEAR_CATALOG } from '../data/gearData';
import { GearCategory, RfqFormState } from '../types';
import { X, Send, FileText, CheckCircle2, AlertTriangle, Calculator, Printer, Phone, MessageSquare } from 'lucide-react';
import { VijayLogo } from './VijayLogo';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGear?: GearCategory;
  initialUrgent?: boolean;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  initialGear = 'spur',
  initialUrgent = false,
}) => {
  const [formData, setFormData] = useState<RfqFormState>({
    gearType: initialGear,
    sourcingMethod: 'drawing',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Kakinada / Andhra Pradesh',
    machineryContext: '',
    quantity: 1,
    teethCount: '',
    moduleOrDP: '',
    outerDiameter: '',
    faceWidth: '',
    boreDiameter: '',
    keywaySize: '',
    materialPreference: 'Alloy Steel (EN19 / EN24)',
    heatTreatment: 'Case Carburized / Induction Hardened',
    isUrgentBreakdown: initialUrgent,
    notes: '',
    uploadedFileName: '',
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [calculatedPCD, setCalculatedPCD] = useState<string | null>(null);

  useEffect(() => {
    if (initialGear) {
      setFormData((prev) => ({ ...prev, gearType: initialGear }));
    }
    if (initialUrgent) {
      setFormData((prev) => ({ ...prev, isUrgentBreakdown: true }));
    }
  }, [initialGear, initialUrgent]);

  // Auto-calculate Pitch Circle Diameter: PCD = Module * Teeth
  useEffect(() => {
    const mod = parseFloat(formData.moduleOrDP || '0');
    const z = parseInt(formData.teethCount || '0', 10);
    if (!isNaN(mod) && !isNaN(z) && mod > 0 && z > 0) {
      setCalculatedPCD((mod * z).toFixed(2));
    } else {
      setCalculatedPCD(null);
    }
  }, [formData.moduleOrDP, formData.teethCount]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `VEW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(generatedId);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*New Gear Inquiry - Vijay Engineering Works (Kakinada)*\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Contact:* ${formData.contactPerson} (${formData.phone})\n` +
      `*City/Plant:* ${formData.city}\n` +
      `*Gear Type:* ${formData.gearType.toUpperCase()}\n` +
      `*Sourcing Method:* ${formData.sourcingMethod.toUpperCase()}\n` +
      `*Machinery/Application:* ${formData.machineryContext || 'Not specified'}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Specs:* Teeth=${formData.teethCount || 'N/A'}, Mod/DP=${formData.moduleOrDP || 'N/A'}, OD=${formData.outerDiameter || 'N/A'}, Bore=${formData.boreDiameter || 'N/A'}\n` +
      `*Material:* ${formData.materialPreference}\n` +
      `*Urgent Breakdown:* ${formData.isUrgentBreakdown ? 'YES - MACHINERY STOPPED' : 'Standard Delivery'}\n` +
      `*Notes:* ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/919848028234?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setSubmittedId(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full p-5 sm:p-7 space-y-6 max-h-[92vh] overflow-y-auto relative shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <VijayLogo size="md" />
            <div className="hidden sm:block border-l border-slate-800 pl-3">
              <h2 className="text-base font-bold text-white">
                Request a Gear Manufacturing Quote
              </h2>
              <p className="text-[11px] text-slate-400">
                Kakinada Facility · Manufactured from drawings or physical samples
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedId ? (
          /* Submission Confirmation View */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
                Inquiry Logged Successfully
              </div>
              <h3 className="text-xl font-bold text-white">
                RFQ Tracking Reference: #{submittedId}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactPerson}</strong>. Our engineering desk at Kakinada is reviewing your {formData.gearType} gear specifications.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg max-w-lg mx-auto text-left text-xs space-y-2">
              <div className="font-bold text-amber-400 uppercase font-mono text-[11px]">Next Steps:</div>
              {formData.sourcingMethod === 'sample' && (
                <p className="text-slate-300">
                  📦 <strong>Sample Courier:</strong> Please dispatch your physical worn/broken sample to: <em>Vijay Engineering Works, Industrial Area, Kakinada - 533001, AP</em>. Reference RFQ #{submittedId} on the package.
                </p>
              )}
              {formData.sourcingMethod === 'drawing' && (
                <p className="text-slate-300">
                  📐 <strong>Drawing Verification:</strong> Our design engineer will verify center distance, tooth profile module, and core hardness requirements.
                </p>
              )}
              {formData.isUrgentBreakdown && (
                <p className="text-red-400 font-semibold">
                  🚨 <strong>Emergency Flagged:</strong> Your request has been queued for immediate priority review to reduce machinery downtime.
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Directly via WhatsApp</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded border border-slate-700 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print RFQ Spec Sheet</span>
              </button>

              <button
                onClick={resetForm}
                className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Submit Another Requirement
              </button>
            </div>
          </div>
        ) : (
          /* Main RFQ Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Urgent Breakdown Banner Toggle */}
            <div
              onClick={() => setFormData({ ...formData, isUrgentBreakdown: !formData.isUrgentBreakdown })}
              className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                formData.isUrgentBreakdown
                  ? 'bg-red-950/30 border-red-500/80 text-red-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${formData.isUrgentBreakdown ? 'text-red-400 animate-pulse' : 'text-slate-500'}`} />
                <div>
                  <div className={`text-xs font-bold ${formData.isUrgentBreakdown ? 'text-red-300' : 'text-slate-300'}`}>
                    Machinery Currently Stopped / Emergency Breakdown Priority
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Flag this inquiry to expedite technical feasibility review & machining schedule.
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={formData.isUrgentBreakdown}
                onChange={() => {}}
                className="w-4 h-4 accent-red-500 pointer-events-none"
              />
            </div>

            {/* Sourcing Pathway Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                1. How Will You Provide Gear Details?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'drawing', label: 'Technical Drawing', sub: 'PDF / CAD file' },
                  { id: 'sample', label: 'Physical Sample', sub: 'Worn / broken gear' },
                  { id: 'dimensions', label: 'Dimensions', sub: 'Teeth, OD, Bore' },
                  { id: 'urgent_breakdown', label: 'Photos & Call', sub: 'Fast consultation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, sourcingMethod: item.id as any })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.sourcingMethod === item.id
                        ? 'bg-amber-500/10 border-amber-500 text-white font-semibold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-slate-200 font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gear Type & Quantity Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                  2. Gear Category
                </label>
                <select
                  value={formData.gearType}
                  onChange={(e) => setFormData({ ...formData, gearType: e.target.value as GearCategory })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                >
                  {GEAR_CATALOG.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name} — ({g.machineryType.split(',')[0]})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                  Quantity Required
                </label>
                <input
                  type="number"
                  min="1"
                  max="10000"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value || '1', 10) })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-amber-500 outline-none font-mono"
                />
              </div>
            </div>

            {/* Technical Dimensional Parameters (Optional or as available) */}
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                  3. Known Dimensions (Leave blank if submitting sample or drawing)
                </span>
                {calculatedPCD && (
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                    Est. Pitch Diameter: {calculatedPCD} mm
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Teeth Count (Z)</label>
                  <input
                    type="number"
                    placeholder="e.g. 36"
                    value={formData.teethCount}
                    onChange={(e) => setFormData({ ...formData, teethCount: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Module / DP</label>
                  <input
                    type="text"
                    placeholder="e.g. 4.0 Module or 6 DP"
                    value={formData.moduleOrDP}
                    onChange={(e) => setFormData({ ...formData, moduleOrDP: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Outer Diameter (OD, mm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 152 mm"
                    value={formData.outerDiameter}
                    onChange={(e) => setFormData({ ...formData, outerDiameter: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Face Width (mm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 45 mm"
                    value={formData.faceWidth}
                    onChange={(e) => setFormData({ ...formData, faceWidth: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Bore Diameter (mm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 50 mm H7"
                    value={formData.boreDiameter}
                    onChange={(e) => setFormData({ ...formData, boreDiameter: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Keyway Size</label>
                  <input
                    type="text"
                    placeholder="e.g. 14 x 9 mm"
                    value={formData.keywaySize}
                    onChange={(e) => setFormData({ ...formData, keywaySize: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Material preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Material Preference</label>
                  <select
                    value={formData.materialPreference}
                    onChange={(e) => setFormData({ ...formData, materialPreference: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs outline-none"
                  >
                    <option>Alloy Steel (EN19 / EN24 Toughened)</option>
                    <option>Case Hardening Steel (20MnCr5 / EN353)</option>
                    <option>Medium Carbon Steel (EN8 / EN9)</option>
                    <option>Phosphor Bronze (PB2 / Worm Wheels)</option>
                    <option>Cast Iron (FG 260)</option>
                    <option>Recommend based on application</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Machinery / Engine Application</label>
                  <input
                    type="text"
                    placeholder="e.g. Rice mill polisher, Marine winch, Sugar mill drive"
                    value={formData.machineryContext}
                    onChange={(e) => setFormData({ ...formData, machineryContext: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Drawing File simulation or Notes */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                Attach Drawing, Photo or Technical Notes
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Drawing file reference (dwg/pdf), or specify sample delivery date"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-3">
              <div className="text-xs font-mono uppercase text-amber-400 font-semibold">
                4. Contact & Plant Location
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Company / Factory Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sri Krishna Agro Mills"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Murthy / Plant Engineer"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98480 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Kakinada, Samalkot, Rajahmundry, Vizag"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                Workshop in Kakinada, Andhra Pradesh · Quick response for machinery maintenance.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex-1 sm:flex-initial px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp RFQ</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
