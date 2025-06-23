'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardBody } from '@heroui/card'
import { Divider, Image } from '@heroui/react'
import { FacebookIcon, GithubIcon, GitLabIcon, InstagramIcon } from '@/components/icons'
import { useTheme } from 'next-themes'
import { Mail, Phone, Calendar } from "lucide-react";
import { motion } from 'framer-motion'

const LeftSide = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  return (
    <motion.div
      initial={{ opacity: 0.0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut", }}
    >
      <Card className="shadow-md dark:bg-slate-900 bg-gray-100">
        <CardBody className="p-6 flex flex-col space-y-6">
          <div className="relative">
            {currentTheme === "dark" ? (
              <Image
                alt="Joey Bonina"
                src="/information/me-dark.jpg"
                className="object-cover"
              />
            ) : (
              <Image
                alt="Joey Bonina"
                src="/information/me-light.jpg"
                className="object-cover"
              />
            )}

            <div className="absolute flex flex-row items-center bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-60 text-white text-xs px-2 lg:px-4 py-1 rounded-full">
              <div className='bg-green-500 h-2 w-2 rounded-full mr-2' />Available for work
            </div>
          </div>

          <div>
            {/* <p className="text-lg text-gray-600 dark:text-white">Hello, I am</p> */}
            <h1 className="text-2xl font-bold text-gray-600 dark:text-white">Hello, I am Joey Bonina</h1>
            <p className="text-md text-gray-700 dark:text-gray-300">Full Stack Developer</p>
          </div>
          
          <div className='py-4'> 
            <div className="flex h-5 items-center space-x-6 text-small">
              <a href="https://facebook.com" target="_blank">
                <FacebookIcon className="w-10 h-10 rounded-full p-2 text-gray-600 bg-gray-200 dark:text-neutral-400 dark:bg-[#020617] hover:text-gray-600 transition" />
              </a>

              <Divider orientation="vertical" />

              <a href="https://instagram.com" target="_blank">
                <InstagramIcon className="w-10 h-10 rounded-full p-2 text-gray-600 bg-gray-200 dark:text-neutral-400 dark:bg-[#020617] hover:text-gray-600 transition" />
              </a>

              <Divider orientation="vertical" />

              <a href="https://github.com" target="_blank">
                <GithubIcon className="w-10 h-10 rounded-full p-2 text-gray-600 bg-gray-200 dark:text-neutral-400 dark:bg-[#020617] hover:text-gray-600 transition" />
              </a>

              <Divider orientation="vertical" />

              <a href="https://github.com" target="_blank">
                <GitLabIcon className="w-10 h-10 rounded-full p-2 text-gray-600 bg-gray-200 dark:text-neutral-400 dark:bg-[#020617] hover:text-gray-600 transition" />
              </a>
            </div>
          </div>

          <Divider />
        
          <div className="space-y-3 text-sm">
          <a href="mailto:jdcbonina@gmail.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:underline"
            >
              <Mail className="w-5 h-5" />
              <span>jdcbonina@gmail.com</span>
            </a>

            <a href="tel:+639544297933"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:underline"
            >
              <Phone className="w-5 h-5" />
              <span>+63 954 429 7933</span>
            </a>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Calendar className="w-5 h-5 " />
              <span>04 July, 1997</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default LeftSide
