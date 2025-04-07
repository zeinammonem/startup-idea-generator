import React, { useState, useEffect } from "react";
import IdeaCard from "./IdeaCard";
import { motion } from "framer-motion";
import { openAIRequest, StartupIdea } from "../services/OpenAIService";

const IdeaGenerator: React.FC = () => {
  const [industry, setIndustry] = useState<string>("");
  const [trend, setTrend] = useState<string>("");
  const [startUpIdea, setStartUpIdea] = useState<StartupIdea>();
  const [typedPitch, setTypedPitch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateIdea = async (): Promise<void> => {
    setStartUpIdea(undefined);
    setTypedPitch("");
    setLoading(true);

    try {
      const response = await openAIRequest(industry, trend);
      setStartUpIdea(response);

    } catch (error) {
      console.error('Error generating idea:', error);

    } finally {
      setLoading(false);
    }
  };

  // Typing effect
  useEffect(() => {
    if (startUpIdea?.pitch) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedPitch(startUpIdea.pitch.slice(0, index + 1));
        index++;
        if (index === startUpIdea.pitch.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [startUpIdea?.pitch]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full bg-gradient-to-br from-blue-950/40 to-purple-950/40 p-8 rounded-2xl shadow-xl border border-blue-500/20 backdrop-blur-md transition-all duration-300 hover:shadow-blue-500/20">
        <div className="space-y-4">
          <input
            className="p-4 w-full rounded-full border-2 border-blue-500/30 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/5 text-white placeholder-white/50 transition-all duration-300 hover:border-blue-400/50"
            placeholder="Industry (e.g. Food)"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            
          />
          <input
            className="p-4 w-full rounded-full border-2 border-blue-500/30 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/5 text-white placeholder-white/50 transition-all duration-300 hover:border-blue-400/50"
            placeholder="Trend (e.g. AI)"
            value={trend}
            onChange={(e) => setTrend(e.target.value)}
          />
          <button
            onClick={generateIdea}
            disabled={loading}
            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed font-semibold tracking-wide"
          >
            {loading ? "Generating..." : "Generate Idea"}
          </button>
        </div>
      </div>

      {loading && (
        <motion.div
          className="w-full bg-gradient-to-br from-blue-950/40 to-purple-950/40 p-6 rounded-2xl shadow-xl border border-blue-500/20 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full border-4 border-blue-500/30"></div>
              <div className="w-8 h-8 rounded-full border-4 border-purple-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
            </div>
            <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 font-semibold">
              ✨ Thinking of something brilliant...
            </span>
          </div>
        </motion.div>
      )}

      {startUpIdea && <IdeaCard title={startUpIdea.startUpIdea} pitch={typedPitch} />}
    </div>
  );
};

export default IdeaGenerator;
