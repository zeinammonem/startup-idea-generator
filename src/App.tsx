import React from 'react';
import IdeaGenerator from "./components/IdeaGenerator";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-purple-950 to-black">
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-purple-950/70 to-black/70 backdrop-blur-sm">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="font-mono p-10 max-w-[600px] mx-auto text-center relative z-10">
          <h1 className="text-6xl font-black mb-6 p-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 tracking-wide uppercase letter-spacing-wider drop-shadow-lg">
            Startup Idea Generator
          </h1>
          <IdeaGenerator />
        </div>
      </div>
    </div>
  );
};

export default App;
