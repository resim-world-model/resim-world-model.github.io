"use client"

import React, { useState } from 'react';

const aOptions = ['a1', 'a2', 'a3'];
const bOptions = ['b1', 'b2', 'b3'];

function DoubleTabSelector() {
  const [selectedA, setSelectedA] = useState('a1');
  const [selectedB, setSelectedB] = useState('b1');

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">选择 A 组</h2>
        <div className="flex gap-2">
          {aOptions.map((a) => (
            <button
              key={a}
              onClick={() => setSelectedA(a)}
              className={`px-4 py-2 rounded-md border ${
                selectedA === a
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">选择 B 组</h2>
        <div className="flex gap-2">
          {bOptions.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedB(b)}
              className={`px-4 py-2 rounded-md border ${
                selectedB === b
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md text-center text-xl font-bold">
        当前内容：{selectedA}-{selectedB}
      </div>
    </div>
  );
}

export default DoubleTabSelector;
