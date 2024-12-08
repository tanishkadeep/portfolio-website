'use client'

import React, { useState } from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const DownloadResume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Tanishka_Deep.pdf'; // Updated path to the PDF file
    link.download = 'Tanishka_Deep.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  return (
    <button
      className="flex items-center justify-center px-3 py-2 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/10 shadow-lg transition-transform duration-300 hover:bg-white/30 hover:scale-105 hover:cursor-pointer font-medium"
      onClick={handleDownload}
      title="Download CV"
    >
      <div className="flex items-center text-sm lg:text-base 3xl:text-lg">
        <IoCloudDownloadOutline className="mr-2 " />
        <span>Download CV</span>
      </div>
    </button>
  );
};

export default DownloadResume;