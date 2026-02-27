// FeatureCardMolecule.tsx
import React from "react";

interface FeatureCardMoleculeProps {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
}

const FeatureCardMolecule: React.FC<FeatureCardMoleculeProps> = ({
  title,
  description,
  content,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4  rounded-2xl 
      bg-[#000]/32 backdrop-blur-md border border-white/4  glass-card
      w-auto max-w-xs ${className}`}
     
    >
     <div className="bg-black/4 rounded-2xl p-2 flex items-center justify-center w-full h-full backdrop-blur-4xl">
     {content}
     </div>

      <div className="text-center p-2 pt-0">
        <h4 className="text-white text-md font-medium">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCardMolecule;