'use client'

import React from 'react'
import { Card, CardBody } from '@heroui/card'
import { Divider, ScrollShadow } from '@heroui/react'

const skills = ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'ESLint & Prettier', 'Expo', 'React Hooks', 'JavaScript', 'VS Code', 'Prisma', 'Git', 'React Native', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'Laravel', 'Photoshop', 'Figma', 'Adobe After Effects']

const RightSide = () => {
  return (
    <ScrollShadow
      orientation="vertical"
      className="h-full"
      hideScrollBar
      offset={100}
    >
      <Card className="dark:bg-slate-900 bg-gray-100 rounded-2xl min-h-[1000px] shadow-2xl">

        <CardBody className="p-8 space-y-8 mb-16">
          {/* About */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-100">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a software developer with over 2 years of hands-on experience building scalable and reliable web applications. I&apos;ve worked extensively with technologies like Next.js, React, TypeScript, Node.js, and TailwindCSS. I enjoy creating clean, responsive interfaces and solving real-world problems through code. Whether it&apos;s front-end development or working on the back-end, I focus on writing maintainable code and building products that are both functional and user-friendly.
            </p>
          </div>

          <Divider className="my-4" />

          {/* Skills */}
          <div className='space-y-4'>
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-100">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-gray-600 dark:bg-blacksection text-white py-2 px-4 rounded-xl shadow-sm hover:bg-opacity-80 transition"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider className="my-4" />

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Experience</h2>
            
            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Service Crew</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">McDonald&apos;s</p>
              </div>

              <div className="text-right">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Jul 2017 – Apr 2018</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Parañaque City - Palañag Branch</p>
              </div>
            </div>

            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Technical Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Atlas Shippers International</p>
              </div>

              <div className="text-right">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">June 2018 – January 2020</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Las Piñas City - Main Office</p>
              </div>
            </div>

            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Software Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">LOGO Inc. (Longares Global Operations, Inc.)</p>
              </div>

              <div className="text-right">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">May 2020 – Present</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Las Piñas City - Main Office</p>
              </div>
            </div>
          </div>

          <Divider className="my-4" />
            
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Certificates</h2>
            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div className='space-y-2'>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Zuitt Coding Bootcamp <span className='font-normal text-sm'>(01/2020 - 03/2020)</span></h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">A web development bootcamp focusing on both frontend technologies such us HTML, CSS and Bootstrap; and backend technologies such as Javascript PHP, MySQL, Laravel, MongoDB, Express and Node JS</p>
              </div>
            </div>
          </div>

          <Divider className="my-4" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Education</h2>
            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">High School</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Las Piñas East National High School - Equitable Village Annex</p>
              </div>

              <div className="text-right">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">June 2010 – April 2014</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Las Piñas City</p>
              </div>
            </div>

            <div className="flex justify-between items-start p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Bachelor of Science in Information Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">College of Saint Adeline</p>
              </div>

              <div className="text-right">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">June 2015 – April 2019</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Parañaque City</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </ScrollShadow>
  )
}

export default RightSide
