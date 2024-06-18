"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import {Card, CardBody} from "@nextui-org/card";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCat, setSelectedCat] = useState('technical');
  const [overlayImage, setOverlayImage] = useState(null);


  const yearContent = {
    '2024': {
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/typo.png',
      logo: '/24logo.png',
      typography: '/pt.png',
      tagline: 'PARADOX’24 - Aagaram, Algorhythm and Adrenaline',
      trailer: 'https://www.youtube.com/embed/upwoG1u_FrY',
      aftermovie: 'https://www.youtube.com/embed/upwoG1u_FrY',
      categories: { // New object for category content
        technical: {
          image: '/header.JPG', // Image for technical category
          description: 'Description for Technical Events in 2022'
        },
        sports: {
          image: '/sports2022.jpg', // Image for sports category
          description: 'Description for Sports Events in 2022'
        },
        culturals: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Description for Cultural Events in 2022'
        },
        industry: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Description for Cultural Events in 2022'
        },
        interactive: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Description for Cultural Events in 2022'
        },
        Certificate: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Description for Cultural Events in 2022'
        },

      }
    },
    '2023': {
      description: "Paradox’23 was a four-day event held from the 25th of May to the 28th of May 2023. More than 2800 students from different parts of India visited the IIT Madras campus and participated in various interactive, technical, professional, cultural and sports activities curated for them. Paradox23 marked the formal distribution of BSc degree certificates to 9 students and diploma certificates to 258 students. The event also marked the distribution of awards to students with exemplary academic performance in the program for the first time. 23 students received this award at the event. ",
      image: '/23typo.png',
      logo: '/23logo.png',
      typography: '/23typo.png',
      tagline: 'PARADOX’23 - Mysteries & Beyond',
      trailer: 'https://www.youtube.com/embed/VEJn0QgZjEY', 
      aftermovie: 'https://www.youtube.com/embed/P7lLyTUTsHQ',
      categories: { // New object for category content
        technical: {
          image: '/technical2022.jpg', // Image for technical category
          description: 'Paradox’23 brought a plethora of technical events aimed at tickling the curious minds of the students. With events related to but not limited to coding challenges, game development, machine learning and data analysis and visualization, the students were in for a feast for curious minds. '
        },
        sports: {
          image: '/sports2022.jpg', // Image for sports category
          description: 'At Paradox’23, we put the physical abilities of our students with a variety of competitive and recreational sports events. From events like Zumba, IPL Auction, chess competitions and e-sporting events to football, volleyball, roller skating and running races, both physical and strategic abilities were tested.The morning of day three witnessed the Instructors versus Organizers Cricket match, in which the organizers came out on top.'
        },
        culturals: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Paradox’23 hosted a variety of cultural events where students could show off and exhibit their talents. With the classic Paradox events including but limited to Attire Spectra, Dream2Dance and Paradox Unwind, students were treated to nights of fashion, dance and music.'
        },
        'industry interaction': {
          description: 'In an engaging event titled "E-Conclave - Unveiling the Secrets of Startup Success," a panel of renowned experts gathered to share their insights on the factors that contribute to the triumph of startups. The event got kicked off with a keynote speech by Dr. Ashok Jhunjhunwala and the panelists included Prof. Jayraj Joseph, Dr. Shankar Raman, Moinak Banerjee, and Anant Mani, each bringing their unique perspectives from the realms of medtech innovations, incubator support, social entrepreneurship, and scaling challenges. Paradox 2023 also hosted an insightful panel discussion, moderated by Prof. Balaji Srinivasan and Mr. Jaidev Deshpande where industry experts and companies came together to explore the future of skills and cybersecurity. Representatives from renowned organizations such as Wipro, GAVS Technologies, LatentView Analytics, Cargill, Citi, Amadeus, Google, foundit, Microsoft, Encora Inc., and JPMorgan Chase & Co. shared their expertise. Students also had the opportunity to engage with the panelists, posing insightful questions on topics such as preparing students for the tech industry, relevant cybersecurity skills, the applicability of different ML models, and mitigating fraudulent practices associated with AI usage.'
        },
        'interactive session': {
          description: 'Students, at Paradox’23, had the opportunity to interact with their favorite faculty members and legends of education. Fun interactive sessions with Prof. Andrew Thangaraj, Prof. Madhavan Mukund, Prof. G Venkatesh and other favorites brought the students closer to the program. It also gave the professors the opportunity to pass on their wisdom to the students. '
        },
        'certificate distribution':{
          description: ' At Paradox’23, 23 students received awards for their exemplary academic performance in the program. The awards were categorized into three: Certificate of Merit, Certificate of Academic Distinction and Certificate of Academic Excellence. The event also marked the formal distribution of BSc degree certificates to 9 students and diploma certificates to 258 students. The students received their awards and certificates from Chief Guest, Mr. Venkat Viswanathan, Founder and Chairperson at LatentView Analytics and Prof. V Kamakoti, Director of IIT Madras.'
        }
      }
    },
    '2022': {
      description: "Organised by the students of IITM BS Degree Program at the IIT Madras Campus 20th, 21st & 22nd May 2022, 1500+ Programming & Data Science students of IIT Madras attended the first on-campus three day festival, which was fully curated and organised by the students. This was a huge platform for interaction between fellow students, faculty, industry experts, and companies. Paradox 22 also marked the formal distribution of provisional diploma certificates to 101 students, including 17 students from families of income less than ₹1 lakh per annum.",
      image: '/image2024.jpg',
      logo: '/22logo.png',
      typography: '/22typo.png',
      tagline: "PARADOX'22",
      trailer: 'https://www.youtube.com/embed/VEJn0QgZjEY',
      aftermovie: 'https://www.youtube.com/embed/-LBqP70pRwk',
      categories: { // New object for category content
        technical: {
          image: '/technical2022.jpg', // Image for technical category
          description: 'Description for Technical Events in 2022'
        },
        sports: {
          image: '/sports2022.jpg', // Image for sports category
          description: 'Description for Sports Events in 2022'
        },
        culturals: {
          image: '/cultural2022.jpg', // Image for cultural category
          description: 'Description for Cultural Events in 2022'
        }
      }
    },
  };

  //2024 - technical / sports /

  const images = {
    '2024': {
      technical: [
        'https://lh4.googleusercontent.com/igxczy2NuZJORDceGjhz0dONdK6aQTfuoRT27Y91YHxXKZa97asUPnKf9fe5QlRX3FGfago39IwqZ1x7YPsIn6UuVR7zdDsf7IAYlkY7su6PQhG_lVJMT-a_Xck2P--pRg=w1280',
        'https://lh5.googleusercontent.com/ZWQDHPlmxFJIRMg9_8E13ppbVOr_Xxtbm87FnMgrfxQt4CVP7OEz2ls4WNSiTFQvb6juDALfRyhM13JEs3LsmkOB7WwY4YdardMAEXOXOPNtMIiyHCLuXb5m1uEeTcxB3g=w1280',
        'https://lh4.googleusercontent.com/JPYUZNeESbMiYLBdUrbRGtgK_8en9qLai8Z0nrxJpTvNRSB35E77NiXpNBm2G5uwopsS0GPBxcWU1cksF0n-GUfuRoBy-RMqFFBRRKi8ME3k_DzdMTGLWXC1ASerjcq1Jw=w1280',
        'https://lh4.googleusercontent.com/igxczy2NuZJORDceGjhz0dONdK6aQTfuoRT27Y91YHxXKZa97asUPnKf9fe5QlRX3FGfago39IwqZ1x7YPsIn6UuVR7zdDsf7IAYlkY7su6PQhG_lVJMT-a_Xck2P--pRg=w1280',
        'https://lh5.googleusercontent.com/ZWQDHPlmxFJIRMg9_8E13ppbVOr_Xxtbm87FnMgrfxQt4CVP7OEz2ls4WNSiTFQvb6juDALfRyhM13JEs3LsmkOB7WwY4YdardMAEXOXOPNtMIiyHCLuXb5m1uEeTcxB3g=w1280',
        'https://lh4.googleusercontent.com/JPYUZNeESbMiYLBdUrbRGtgK_8en9qLai8Z0nrxJpTvNRSB35E77NiXpNBm2G5uwopsS0GPBxcWU1cksF0n-GUfuRoBy-RMqFFBRRKi8ME3k_DzdMTGLWXC1ASerjcq1Jw=w1280',
      ],
      sports: [
        'https://lh6.googleusercontent.com/RTeZGXWyZPtXUZKWtWqYiNAL9eM6LfJEDuBfdH3svFIxd35hPnOSQCuSg0zdUNPBXf11uXDwFtGJqg5m546UULlL1vm3_d9MO4MK7O9R0kLwFnrUAE_4GEdB0SGlJ4-7rA=w1280',
        'https://lh6.googleusercontent.com/xtqJIXO3o-mjCYdxWEuRNY5KlV6KIPM1PlD3RZ7DZ7-cfIpHWz8YhM5ouzZUyc3pTarNgh82Pk3WJKgt4QPY0IH188CE33ijFzznG2njFG4A6eyaLuLKmnrY9DzRcI7v5Q=w1280',
        'https://lh6.googleusercontent.com/avckOzYsdoZzOvgxW_ohSp6Lg_giT3j9oFJGY0T1IgGxH0iZuEYiXfpoeaF_-le4ndHehUQQmYn5wWHKnSCN07aaEPy54Oh-uZi525w87TyFPEABOAYqVvIwFELBfB2xOQ=w1280',
        'https://lh6.googleusercontent.com/y1KWJ4nRVIOQ4krzb0vKAsUGX8wAKWdUOHOFPNyZ7aqgrvsrBvBFU28zcAaXsrceIQutW6GBjPdnzN-vhmyng5ddtZSm43L2vj8e1G7LE761BHVR9jvjSq2nJ-NHiCGT=w1280',
      ],
      culturals: [
        'https://lh5.googleusercontent.com/qzLW7DnEOwSSzvcUlEDcSlnRTFKRjdAn2uuM_Wh37XreOHaegAtBnT1gt65lTWvX5Lu6EsdFvyVuPzHKFSKy_O8e1DkI7cCia9ubUxN1ZRZkuLndNzm6V7H7CzJJsBAYOg=w1280',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'industry interaction': [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'interactive session': [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'certificate distribution':[
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ]
    },
    '2023': {
      technical: [
        'https://lh4.googleusercontent.com/igxczy2NuZJORDceGjhz0dONdK6aQTfuoRT27Y91YHxXKZa97asUPnKf9fe5QlRX3FGfago39IwqZ1x7YPsIn6UuVR7zdDsf7IAYlkY7su6PQhG_lVJMT-a_Xck2P--pRg=w1280',
        'https://lh5.googleusercontent.com/ZWQDHPlmxFJIRMg9_8E13ppbVOr_Xxtbm87FnMgrfxQt4CVP7OEz2ls4WNSiTFQvb6juDALfRyhM13JEs3LsmkOB7WwY4YdardMAEXOXOPNtMIiyHCLuXb5m1uEeTcxB3g=w1280',
        'https://lh4.googleusercontent.com/JPYUZNeESbMiYLBdUrbRGtgK_8en9qLai8Z0nrxJpTvNRSB35E77NiXpNBm2G5uwopsS0GPBxcWU1cksF0n-GUfuRoBy-RMqFFBRRKi8ME3k_DzdMTGLWXC1ASerjcq1Jw=w1280',
      ],
      sports: [
        'https://lh6.googleusercontent.com/RTeZGXWyZPtXUZKWtWqYiNAL9eM6LfJEDuBfdH3svFIxd35hPnOSQCuSg0zdUNPBXf11uXDwFtGJqg5m546UULlL1vm3_d9MO4MK7O9R0kLwFnrUAE_4GEdB0SGlJ4-7rA=w1280',
        'https://lh6.googleusercontent.com/xtqJIXO3o-mjCYdxWEuRNY5KlV6KIPM1PlD3RZ7DZ7-cfIpHWz8YhM5ouzZUyc3pTarNgh82Pk3WJKgt4QPY0IH188CE33ijFzznG2njFG4A6eyaLuLKmnrY9DzRcI7v5Q=w1280',
        'https://lh6.googleusercontent.com/avckOzYsdoZzOvgxW_ohSp6Lg_giT3j9oFJGY0T1IgGxH0iZuEYiXfpoeaF_-le4ndHehUQQmYn5wWHKnSCN07aaEPy54Oh-uZi525w87TyFPEABOAYqVvIwFELBfB2xOQ=w1280',
        'https://lh6.googleusercontent.com/y1KWJ4nRVIOQ4krzb0vKAsUGX8wAKWdUOHOFPNyZ7aqgrvsrBvBFU28zcAaXsrceIQutW6GBjPdnzN-vhmyng5ddtZSm43L2vj8e1G7LE761BHVR9jvjSq2nJ-NHiCGT=w1280',
      ],
      culturals: [
        'https://lh5.googleusercontent.com/qzLW7DnEOwSSzvcUlEDcSlnRTFKRjdAn2uuM_Wh37XreOHaegAtBnT1gt65lTWvX5Lu6EsdFvyVuPzHKFSKy_O8e1DkI7cCia9ubUxN1ZRZkuLndNzm6V7H7CzJJsBAYOg=w1280',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'industry interaction': [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'interactive session': [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      'certificate distribution':[
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ]
    },
    '2022': {
      technical: [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      sports: [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      culturals: [
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  };
  
  //Capitalize the Words
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const imageGalleryRef = useRef(null);

  // Scroll to the beginning of the image gallery when the Category changes
  useEffect(() => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollLeft = 0;
    }
  }, [selectedCat]);
  

  return (
    <main className="bg-[#01081B] flex min-h-screen flex-col items-center relative">
      
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <img src="/blue-purple-1.svg" alt="Gradient" className="w-full h-full object-cover" />
        </div>

        {/* Header Card */}
        <div className="max-w-8xl w-full bg-white shadow-md overflow-hidden z-10 mb-8">
          {/* Image */}
          <div className="relative h-60">
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1 className="md:text-7xl text-4xl font-bold mb-2 text-white text-glow">PARADOX</h1>
              <p className="md:text-xl text-md text-white">Curated and organized by the IIT Madras BS Degree Programme Students</p>
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
            <Card>
              <CardBody>
                <p className='text-white font-bold'>{yearContent[selectedYear].tagline}</p>
              </CardBody>
            </Card>
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
                className="w-full h-64"
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
                className="w-full h-64"
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
              onClick={() => setSelectedCat(category)}
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
            {yearContent[selectedYear].categories[selectedCat].description}
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div ref={imageGalleryRef} className="w-full flex overflow-x-auto p-5">
        {(images[selectedYear] && images[selectedYear][selectedCat]) ? (
          images[selectedYear][selectedCat].map((img, index) => (
            <div
              key={index}
              className="relative w-64 h-64 bg-gray-800 shadow-md rounded-lg overflow-hidden flex-shrink-0 mr-4 cursor-pointer"
              onClick={() => setOverlayImage(img)}
            >
              <Image
                src={img}
                alt={`${selectedCat} event ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))
        ) : (
          <p className="text-white">No images available for this category.</p>
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

    </main>
  );
}