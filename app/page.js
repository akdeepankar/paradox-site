"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/card";
import Spline from '@splinetool/react-spline/next';

const yearContent = {
  '2024': {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    image: '/typo.png',
    logo: '/24logo.png',
    typography: '/pt.png',
    tagline: 'PARADOX’24 - Aagaram, Algorhythm and Adrenaline',
    trailer: 'https://www.youtube.com/embed/upwoG1u_FrY',
    aftermovie: 'https://www.youtube.com/embed/upwoG1u_FrY',
    categories: {
      technical: {
        description: 'Description for Technical Events in 2024',
        events: [
          {
            name: 'Coding Challenge',
            images: ['https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
            videos: [,'https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview','https://drive.google.com/file/d/1k5Sh0cxIUwRSkZ-ZiDFsvQQPRCKDXDzV/preview'],
            description: 'Join the ultimate coding challenge...'
          },
          {
            name: 'AI Workshop',
            images: ['https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm','https://drive.google.com/uc?export=view&id=1hUdjcDJeMTmfpMyp02Wg9c_ryN48HSzm', ],
            videos: [''],
            description: 'Learn about AI in this workshop...'
          }
        ]
      },
      sports: {
        description: 'Description for Sports Events in 2024',
        events: [
          {
            name: 'Football Match',
            images: [],
            videos: [''],
            description: 'Enjoy the football match...'
          },
          {
            name: 'Basketball Tournament',
            images: ['/event7.jpg', '/event8.jpg'],
            videos: [''],
            description: 'Compete in the basketball tournament...'
          }
        ]
      },
      culturals: {
        description: 'Description for Cultural Events in 2024',
        events: [
          {
            name: 'Dance Competition',
            images: ['/event9.jpg', '/event10.jpg'],
            videos: ['https://example.com/video5.mp4'],
            description: 'Show your moves in the dance competition...'
          },
          {
            name: 'Music Fest',
            images: ['/event11.jpg', '/event12.jpg'],
            videos: [],
            description: 'Enjoy the music fest...'
          }
        ]
      }
      // Add more categories as needed
    }
  },
'2023': {
}
};

export default function Home() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCat, setSelectedCat] = useState('technical');
  const [selectedEvent, setSelectedEvent] = useState(yearContent['2024'].categories['technical'].events[0].name);
  const [tab, setTab] = useState('images'); // State for tabs (images/videos)
  const [overlayImage, setOverlayImage] = useState(null);
  const [invalidImages, setInvalidImages] = useState({});
  const [invalidVideos, setInvalidVideos] = useState({});

  const handleImageError = (index) => {
    setInvalidImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index) => {
    setInvalidVideos((prev) => ({ ...prev, [index]: true }));
  };


  const imageGalleryRef = useRef(null);

  // Reset tab to 'images' when the category changes
  useEffect(() => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollLeft = 0;
    }
    setTab('images');
  }, [selectedCat]);

  // Update selectedEvent when selectedCat changes
  useEffect(() => {
    setSelectedEvent(yearContent[selectedYear].categories[selectedCat].events[0].name);
  }, [selectedCat, selectedYear]);

  // Reset tab to 'images' when the selectedEvent changes
  useEffect(() => {
    setTab('images');
  }, [selectedEvent]);

  // Get the current event details
  const currentEvent = yearContent[selectedYear].categories[selectedCat].events.find((event) => event.name === selectedEvent);

  return (
    <main className="bg-[#08011B] flex min-h-screen flex-col items-center relative">
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <img src="/blue-purple-1.svg" alt="Gradient" className="w-full h-full object-cover" />
      </div>

         {/* Header Card */}
         <div className="relative w-full h-screen bg-white shadow-md overflow-hidden z-10 mb-8">
  {/* Image */}
  <div className="relative w-full h-full">
    <Image
      src="/header.png"
      alt="Header Image"
      layout="fill"
      objectFit="cover"
      className="dark:invert"
      priority
    />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="absolute top-4 left-4 z-30">
      <Image
        src="/iitmlogo.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center text-center z-20">
      <div>
        <h1 className="md:text-7xl text-4xl font-bold mb-2 text-white text-glow">PARADOX</h1>
        <p className="md:text-xl text-md text-white">Curated and organized by the IIT Madras BS Degree Programme Students</p>
      </div>
    </div>
  </div>
</div>


      {/* Year Tabs */}
      <div className="w-full flex justify-center mb-8">
        <div className="flex space-x-4 p-3 bg-gray-800 rounded-3xl shadow-lg">
          {Object.keys(yearContent)
            .sort((a, b) => b - a)
            .map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedCat(Object.keys(yearContent[year].categories)[0]);
                }}
                className={`px-4 py-2 rounded-3xl ${
                  selectedYear === year ? 'bg-[#01081B] text-white' : 'bg-[#525b70] text-black'
                }`}
              >
                {year}
              </button>
            ))}
        </div>
      </div>

      {/* Description and Content */}
      <div className="w-full flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 pr-5 pl-5 pb-5">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row w-full justify-center">
          {/* Logo Card */}
          <div className="relative w-full sm:w-1/3 bg-[#ffffff14] shadow-md rounded-lg overflow-hidden sm:mb-0 flex items-center justify-center neon-border">
            <div className="absolute top-0 left-0 bg-[#293e7d] text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              Logo
            </div>
            <div className="flex items-center justify-center m-4">
              <Image
                src={yearContent[selectedYear].logo}
                alt={`Logo for ${selectedYear}`}
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* Description Card */}
          <div className="relative w-full sm:w-1/3 bg-[#ffffff14] shadow-md rounded-lg overflow-hidden mb-4 sm:mb-0 flex items-center justify-center">
            <div className="absolute top-0 left-0 bg-[#293e7d] text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              About
            </div>
            <div className="text-center m-4">
              <p className="mb-4 text-white text-md">{yearContent[selectedYear].description}</p>
            </div>
          </div>

          {/* Typography Card */}
          <div className="relative w-full sm:w-1/3 bg-[#ffffff14] shadow-md rounded-lg overflow-hidden mb-4 sm:mb-0 flex items-center justify-center">
            <div className="absolute top-0 left-0 bg-[#293e7d] text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              Typography
            </div>
            <div className="flex items-center justify-center m-4">
              <Image
                src={yearContent[selectedYear].typography}
                alt={`Typography for ${selectedYear}`}
                width={525}
                height={175}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trailer and AfterMovie */}
      <div className="w-full flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 pr-5 pl-5 pb-5">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row w-full justify-center">
          {/* Trailer Card */}
          <div className="relative w-full sm:w-1/2 bg-[#ffffff14] shadow-md rounded-lg overflow-hidden sm:mb-0 flex items-center justify-center">
            <div className="absolute top-0 left-0 bg-[#293e7d] text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              Trailer
            </div>
            <div className="flex items-center justify-center m-4">
              <iframe
                className="w-full h-64 rounded-lg shadow-md"
                src={yearContent[selectedYear].trailer}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Trailer"
              ></iframe>
            </div>
          </div>

          {/* AfterMovie Card */}
          <div className="relative w-full sm:w-1/2 bg-[#ffffff14] shadow-md rounded-lg overflow-hidden sm:mb-0 flex items-center justify-center">
            <div className="absolute top-0 left-0 bg-[#293e7d] text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              AfterMovie
            </div>
            <div className="flex items-center justify-center m-4">
              <iframe
                className="w-full h-64 rounded-lg shadow-md"
                src={yearContent[selectedYear].aftermovie}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AfterMovie"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tab */}
      <div className="pl-5 pr-5 w-full overflow-x-auto flex md:justify-center">
        <div className="flex space-x-4 mb-5 w-max p-3 bg-gray-800 rounded-3xl shadow-lg">
          {Object.keys(yearContent[selectedYear].categories).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCat(category);
                // Reset the tab to 'images' when the category changes
                setTab('images');
              }}
              className={`px-4 py-2 rounded-3xl whitespace-nowrap ${
                selectedCat === category ? 'bg-[#01081B] text-white' : 'bg-[#525b70] text-black'
              }`}
            >
              {capitalizeWords(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Category Content */}
      <div className="bg-[#0E1426] shadow-md rounded-lg overflow-hidden ml-5 mr-5 mb-2 sm:mb-0 flex items-center justify-center">
        <div className="text-center m-4">
          <p className="text-white">
            {yearContent[selectedYear].categories[selectedCat]?.description || 'No description available'}
          </p>
        </div>
      </div>

      {/* Event Tab */}
      <div className="pt-5 pl-5 pr-5 w-full overflow-x-auto flex md:justify-center">
        <div className="flex space-x-4 mb-5 w-max p-3 bg-gray-800 rounded-3xl shadow-lg">
          {yearContent[selectedYear].categories[selectedCat]?.events.map((event) => (
            <button
              key={event.name}
              onClick={() => {
                setSelectedEvent(event.name);
                // Reset the tab to 'images' when the event changes
                setTab('images');
              }}
              className={`px-4 py-2 rounded-3xl whitespace-nowrap ${
                selectedEvent === event.name ? 'bg-[#01081B] text-white' : 'bg-[#525b70] text-black'
              }`}
            >
              {capitalizeWords(event.name)}
            </button>
          ))}
        </div>
      </div>

{/* Event Content */}
<div className="flex flex-col items-center">
  {/* Tabs for Images and Videos */}
  <div className="w-full flex justify-center mb-4">
    <div className="flex space-x-4 p-3 bg-gray-800 rounded-3xl shadow-lg">
      <button
        onClick={() => setTab('images')}
        className={`px-4 py-2 rounded-3xl ${
          tab === 'images' ? 'bg-[#01081B] text-white' : 'bg-[#525b70] text-black'
        }`}
      >
        Images
      </button>
      <button
        onClick={() => setTab('videos')}
        className={`px-4 py-2 rounded-3xl ${
          tab === 'videos' ? 'bg-[#01081B] text-white' : 'bg-[#525b70] text-black'
        }`}
      >
        Videos
      </button>
    </div>
  </div>

    {/* Content based on selected tab */}
    <div className="w-full flex flex-col items-center">
        {tab === 'images' ? (
          currentEvent?.images?.length > 0 ? (
            <div className="w-full overflow-x-auto px-2">
              <div className="flex space-x-4">
                {currentEvent.images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 pb-5">
                    {!invalidImages[index] ? (
                      <Image
                        className="rounded-lg shadow-md"
                        src={image}
                        alt={`Event Image ${index}`}
                        layout="intrinsic"
                        width={300} // Adjust width as needed
                        height={400} // Adjust height as needed
                        onClick={() => setOverlayImage(image)}
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <p className="text-gray-500"></p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No images available</p>
          )
        ): (
      currentEvent?.videos?.length > 0 ? (
        <div className="flex overflow-x-scroll space-x-4 pr-2 pl-2 pb-4">
          {currentEvent.videos.map((video, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
              {!invalidVideos[index] ? (
                <iframe
                  className="w-full h-48 sm:h-56 md:h-45 lg:h-45 rounded-lg shadow-md"
                  width="560"
                  height="315"
                  src={video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Event Video ${index}`}
                  onError={() => handleVideoError(index)}
                ></iframe>
              ) : (
                <p className="text-gray-500">Video not available</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No videos available</p>
      )
    )}
  </div>

  {/* Image Overlay */}
  {overlayImage && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setOverlayImage(null)}>
      <div className="relative">
        <button
          className="absolute top-0 right-0 m-4 text-white"
          onClick={() => setOverlayImage(null)}
        >
          Close
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={overlayImage}
            alt="Overlay"
            width={800}
            height={800}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )}

</div>
    </main>
  );
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
