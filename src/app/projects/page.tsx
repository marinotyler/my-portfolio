/* eslint-disable react/jsx-key */
'use client'
import React from 'react'
import "@/styles.css"
import Tilt from "react-parallax-tilt"
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
    const projects =[
        "project 1",
        "project 2", 
        "project 3", 
        "project 4",
        "project 5", 
        "project 6" 
    ]   
  return (
    <>
        <h1 className='text-6xl'>Projects</h1>
        <div className="container">
            {projects.map((project) =>(
                <Tilt
                tiltEnable= {true}
                perspective={1500}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionSpeed={3000}
                reset = {true}
                glareEnable={true}
                glareColor="lightgreen"
                >
                    <div className='project-container'>
                        <div className="project-header text-2xl"> 
                            <h1>{project}</h1> 
                        </div>
                            <Link
                                href="https://github.com/marinotyler?tab=repositories">
                                <Image
                                className='project-link-icon'
                                src='/github-icon.png'
                                width="25"
                                height="25"
                                alt='github icon'
                                />
                            </Link>
                    </div>
                    
                </Tilt>
                
            ))
            }
        </div>
    </>
  )
}
