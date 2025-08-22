'use client'

import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const resourcesTop = [
  { title: 'SWAYAM', href: 'https://swayam.gov.in/', img: '/Swayam.jpg' },
  { title: 'NAD', href: 'https://nad.gov.in/', img: '/NAD.jpg' },
  { title: 'UG/PG MOOCs', href: 'https://ugcmoocs.inflibnet.ac.in/', img: '/moocs.png' },
  { title: 'SHODHGANGA', href: 'https://shodhganga.inflibnet.ac.in/', img: '/SodhGanga-1.png' },
  { title: 'e-PG PATHSHALA', href: 'https://epgp.inflibnet.ac.in/', img: '/ePGPathshala.jpg' },
  { title: 'SWAYAM PRABHA', href: 'https://www.swayamprabha.gov.in/', img: '/SwayamPrabha.jpg' },
]

const resourcesBottom = [
  { title: 'EXAMINATION', href: '#',img: '/examination.png' },
  { title: 'ADMISSION', href: '#', img: '/Icon_admission.png' },
  { title: 'SCHOLARSHIP', href: '#',img: '/icon_scholarship.png' },
  { title: 'REQUIREMENT' , href: '#',img: '/YJU.png' },
  { title: 'IQAC', href: '#',img: '/icon_iqac.png' },
  { title: 'TENDERS', href: '#', img: '/icon_tender.png' },
]


const ResourceCard = ({ title, href, img }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-2 bg-white hover:shadow-xl w-full shadow-md hover:scale-105 transform transition duration-300 rounded-xl"
      >
        <div className="relative w-20 h-16 sm:w-24 sm:h-20">
          <Image src={img} alt={title} fill className="object-contain" />
        </div>
        <span className="text-black font-bold font-serif text-center text-[15px] mt-1">
          {title}
        </span>
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="w-full bg-white py-6">
      {/* Top Resource Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6 px-4 sm:px-6 md:px-10">
        {resourcesTop.map((res, i) => (
          <ResourceCard key={i} {...res} />
        ))}
      </div>

      {/* Marquee Bar */}
      <div className="w-full bg-gray-200 mb-6 border-8 border-[#8b0a52] shadow-xl">
        <div className="max-w-screen-xl p-2 mx-auto">
          <Marquee pauseOnHover gradient={false} speed={50}>
            <Link
              href="/university-logo.jpg"
              className="text-black font-semibold underline mr-10"
              target="_blank"
            >
              University Logo Download
            </Link>
            <Link
              href="https://unikbp.ac.in/bba_recruitment/"
              className="text-black font-semibold underline"
              target="_blank"
            >
              BBA Recruitment
            </Link>
          </Marquee>
        </div>
      </div>

      {/* Bottom Resource Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4 sm:px-6 md:px-10">
        {resourcesBottom.map((res, i) => (
          <ResourceCard key={i} {...res} />
        ))}
      </div>
    </div>
  )
}
