function About({pageRefs}){

    return(
        <div ref={(ele) => pageRefs.current[1] = ele} className="min-h-screen w-full bg-linear-to-b from-white to-red-100 flex flex-col justify-center items-center gap-10 px-6 md:px-12 lg:px-16">

                <div className="h-45 w-45 md:h-55 md:w-55 rounded-full bg-teal-200 flex items-center justify-center">
                    <img className="object-cover rounded-full" src="./profile1.png" alt="" />
                </div>
                <p className="text-4xl md:text-6xl font-extrabold">I'm Akash.</p>
                <p className="text-2xl md:text-4xl text-center font-bold">
                    I'm a Web Developer passionate about building
                    engaging, accessible, and user-centric experiences.
                </p>
                <p className="text-base md:text-xl text-center font-medium">
                    Hi, I'm Akash. I completed my Bachelor of Science in Computer Science from a college affiliated
                    with Mumbai University. I'm a self-taught web developer who learns by breaking things down and
                    understanding how they work. My passion for technology started in childhood, from installing
                    custom ROMs on my phone to now developing websites.
                </p>

        </div>
    )

}

export default About
