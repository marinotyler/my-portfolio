/* eslint-disable react/jsx-key */
'use client'
import React, { useState } from 'react'
import "@/styles.css"
import Tilt from "react-parallax-tilt"
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {

    const [tilt, setTilt] = useState(true)

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
                <div className='project-container'>
                <Tilt
                tiltEnable= {tilt}
                perspective={1000}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                transitionSpeed={3000}
                reset = {true}
                glareEnable={true}
                glareColor="lightgreen"
                >
                        <div className="project-card text-2xl"> 
                            <h1>{project}</h1> 
                            <Link
                            className="text-xs"
                                href="https://github.com/marinotyler?tab=repositories">
                                <Image 
                                className='project-link-icon '
                                src='/github-icon.png'
                                width="25"
                                height="25"
                                alt='github icon'
                                onMouseOver= {() => setTilt(!tilt)}
                                onMouseLeave={()=> setTilt(!tilt)}
                                />Repo
                            </Link>
                        </div>
                    </Tilt>
                 </div>
                
            ))
            }
        </div>
    </>
  )
}
