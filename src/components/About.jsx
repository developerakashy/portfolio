function About({pageRefs}){

    return(
        <div ref={(ele) => pageRefs.current[1] = ele} className="min-h-screen w-full bg-linear-to-b from-white to-red-100 flex flex-col justify-center items-center gap-10 px-6 sm:px-16">

                <div className="h-35 w-35 md:h-45 md:w-45 p-8 rounded-full bg-teal-200 flex items-center justify-center">
                    <img className="w-full" src="./vite.svg" alt="" />
                </div>
                <p className="text-4xl md:text-6xl font-extrabold">I'm Akash.</p>
                <p className="text-2xl md:text-4xl text-center font-bold">
                    I'm a Web Developer passionate about building
                    engaging, accessible, and user-centric experiences.
                </p>
                <p className="text-base md:text-xl text-center font-medium">
                    As a fresher, I've explored various aspects of web development,
                    including front-end development, UI/UX, and building interactive
                    applications. I'm eager to contribute and grow by crafting
                    seamless digital experiences that make a real impact.
                </p>

        </div>
    )

}

export default About
