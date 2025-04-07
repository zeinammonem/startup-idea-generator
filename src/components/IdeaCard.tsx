import React from 'react';

interface IdeaCardProps {
  title: string;
  pitch: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ title, pitch }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-950/30 to-purple-950/30 p-8 rounded-2xl shadow-xl border border-blue-500/20 backdrop-blur-md">
      <h2 className="text-4xl font-bold mb-6 text-white uppercase tracking-wide">
        {title}
      </h2>
      <p className="text-lg text-white/90 leading-relaxed">{pitch}</p>
    </div>
  );
};

export default IdeaCard;
