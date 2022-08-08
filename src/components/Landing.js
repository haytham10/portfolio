import React from 'react'

export default function Landing() {
  return (
    <div className="relative bg-black-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" color='#A693FF' opacity={0.95}/>
		  </svg> */}

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl tracking-normal font-roby font-semibold text-white sm:text-4xl md:text-5xl">
                <span className="block whitespace-pre xl:inline">Hello Guys!{'\n'}</span>
                <span className="block text-white xl:inline">I am</span>
                <span className="blcok text-purple-100 xl:inline"> Haytham Mokhtari</span>
              </h1>
			  <p className='py-3 font-sans font-normal text-gray-500'>Developer / Designer / Programmer</p>
			  <hr className='absolute border-2 rounded border-gray-300 w-80'/>
			  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
			  "Howdy, y'all! I am from Casablanca, Morocco. As the world began to see my work in Graphic Design, I started heading toward the 3D world, and Honestly, I was good at it, When I'm not working on my latest Art project, I might be playing a new video game, learning programming or volunteering at my school. If you like my work, please reach out by filling in the contact form below.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-6"
                  >
                    {<svg 
					xmlns="http://www.w3.org/2000/svg" 
					className="h-4 w-4 mr-2" 
					fill="none" 
					viewBox="0 0 24 24" 
					stroke="currentColor" 
					stroke-width="3">
  						<path 
						  stroke-linecap="round" 
						  stroke-linejoin="round" 
						  d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>}Download CV
                  </a>
				</div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center w-full">
        <img
          className="" 
          src={require('../Assets/Imgs/10.png')}
          alt="3d image"
		  width="500"
		  height="500"
		  layout="intrinsic"
		  loading="eager"
		  placeholder="blur"
        />
      </div>
    </div>
  )
}