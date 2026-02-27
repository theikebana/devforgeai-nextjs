"use client";

import { motion } from "framer-motion";
import { Search, FileText } from "lucide-react";

export default function ThinkDocsMiniAnimationCard() {
  return (
    <div className="mt-4 w-full rounded-xl border border-sky-400/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-sky-950/40 px-3 py-3">
      
      <div className="space-y-3">
        
        {/* Animated Search Bar */}
        <motion.div
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <Search className="h-4 w-4 text-sky-300" />
          <span className="text-xs text-white/60">
            Find the contract with expiry in June 2027
          </span>
        </motion.div>

        {/* Documents List */}
        <div className="space-y-2">
          {[
            { label: "Contract_2027.pdf", tag: "Legal" },
            { label: "Q3_Compliance.pdf", tag: "Compliance" },
            { label: "Board_deck.docx", tag: "Summary" },
          ].map((doc, idx) => (
            <motion.div
              key={doc.label}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-300" />
                <span className="text-sm text-white/85 truncate max-w-[120px]">
                  {doc.label}
                </span>
              </div>

              <span className="text-[10px] px-2 py-[2px] rounded-full bg-sky-500/20 text-sky-200">
                {doc.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}