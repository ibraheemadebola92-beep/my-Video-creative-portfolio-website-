'use client';

import React, { useState } from 'react';

export default function StudioPage() {
  const [tool, setTool] = useState<string>('editor');

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Creative Studio</h1>
        
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setTool('editor')}
            className={`p-4 rounded-lg font-semibold transition ${
              tool === 'editor'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setTool('effects')}
            className={`p-4 rounded-lg font-semibold transition ${
              tool === 'effects'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Effects
          </button>
          <button
            onClick={() => setTool('export')}
            className={`p-4 rounded-lg font-semibold transition ${
              tool === 'export'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Export
          </button>
          <button
            onClick={() => setTool('gallery')}
            className={`p-4 rounded-lg font-semibold transition ${
              tool === 'gallery'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Gallery
          </button>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-2">Welcome to {tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
            <p className="text-gray-400">Select a tool to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}