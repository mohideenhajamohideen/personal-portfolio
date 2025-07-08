'use client';

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | string>('...');

  useEffect(() => {
    // Simulate visitor count
    const timer = setTimeout(() => {
      setCount(Math.floor(Math.random() * 1000) + 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-40">
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
        <span>👁️</span>
        <span>{count} visitors</span>
      </div>
    </div>
  );
}
