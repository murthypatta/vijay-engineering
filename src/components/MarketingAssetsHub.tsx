import React, { useState } from 'react';
import { MARKETING_ASSETS_DATA } from '../data/marketingAssets';
import { Copy, Check, X, Download, Share2, Sparkles, Megaphone, FileText } from 'lucide-react';

interface MarketingHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketingAssetsHub: React.FC<MarketingHubProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('google_ads');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentGroup = MARKETING_ASSETS_DATA.find((g) => g.category === selectedCategory) || MARKETING_ASSETS_DATA[0];

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(id);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2200);
  };

  const handleDownloadAll = () => {
    let fullText = `# VIJAY ENGINEERING WORKS — INDUSTRIAL GEAR MANUFACTURING\n`;
    fullText += `Location: Kakinada, Andhra Pradesh, India\n`;
    fullText += `Generated Strategy & Copy Assets\n\n`;

    MARKETING_ASSETS_DATA.forEach((group) => {
      fullText += `===============================================\n`;
      fullText += `SECTION: ${group.title.toUpperCase()}\n`;
      fullText += `${group.subtitle}\n`;
      fullText += `===============================================\n\n`;

      group.items.forEach((item) => {
        fullText += `--- ${item.title} ---\n`;
        if (item.description) fullText += `Context: ${item.description}\n\n`;
        fullText += `${item.content}\n\n`;
      });
    });

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vijay_Engineering_Works_Marketing_Strategy_Kit.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full p-5 sm:p-7 space-y-6 max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col justify-between">
        
        {/* Top Header */}
        <div>
          <div className="flex items-start justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                <Megaphone className="w-4 h-4 text-amber-400" />
                B2B Marketing & Advertising Asset Suite
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Copy-Ready Marketing Strategy & Campaigns
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Ready-to-deploy Google Ads, LinkedIn thought leadership, WhatsApp outreach templates, and SEO meta tags for Vijay Engineering Works (Kakinada, AP).
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex items-center gap-2 overflow-x-auto py-3 border-b border-slate-800/80 scrollbar-none text-xs font-medium">
            {MARKETING_ASSETS_DATA.map((group) => {
              const isActive = group.category === selectedCategory;
              return (
                <button
                  key={group.category}
                  onClick={() => setSelectedCategory(group.category)}
                  className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {group.title.split('(')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-5 py-2 overflow-y-auto pr-1">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">{currentGroup.title}</h3>
            <p className="text-xs text-slate-400">{currentGroup.subtitle}</p>
          </div>

          <div className="space-y-5">
            {currentGroup.items.map((item, idx) => {
              const uniqueId = `${selectedCategory}-${idx}`;
              const isCopied = copiedIndex === uniqueId;

              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 relative group hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-2.5">
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                      {item.description && (
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.description}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.tags && item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}

                      <button
                        onClick={() => handleCopy(item.content, uniqueId)}
                        className={`px-3 py-1 text-xs font-semibold rounded transition-all flex items-center gap-1.5 ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Pre-formatted Copy Area */}
                  <div className="bg-slate-900 rounded-lg p-3 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto border border-slate-800/80 selection:bg-amber-500 selection:text-slate-950">
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-400">
            Tailored for Vijay Engineering Works · Kakinada, Andhra Pradesh
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadAll}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download Full Marketing Kit (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded transition-colors"
            >
              Close Hub
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
