// Step 1: Install print-js if not already installed
// Run this command: npm install print-js

// Step 2: Create your React component
import React from 'react';
import printJS from 'print-js';

const PrintPage = () => {
  const handlePrint = () => {
    printJS({
      printable: 'print-section', // ID of the element to print
      type: 'html',
      css: [
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', // External CSS for Tailwind
      ],
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">React Print Page Example</h1>
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Print Page
      </button>
      
      <div
        id="print-section"
        className="mt-6 p-4 border border-gray-300 bg-white rounded shadow-md"
      >
        <h2 className="text-xl font-semibold">Content to Print</h2>
        <p className="mt-2 text-gray-700">
          This section will be printed when you click the "Print Page" button.
          You can add more elements and styles as needed.
        </p>
      </div>
    </div>
  );
};

export default PrintPage;
