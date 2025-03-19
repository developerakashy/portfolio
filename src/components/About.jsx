function About({pageRefs}){

    return(
        <div ref={(ele) => pageRefs.current[1] = ele} className="sticky min-h-screen w-full bg-linear-to-b from-white to-red-100 flex flex-col justify-center items-center gap-16 p-4 px-24">
            <p className="text-6xl font-extrabold">I'm Akash.</p>
            <div className="flex gap-10">
                <div className="w-1/2 pt-18 p-5 rounded-t-full bg-teal-200 flex items-center justify-center">
                    <img className="w-[80%]" src="./vite.svg" alt="" />
                </div>
                <div className="flex flex-col h-full gap-6 mt-8">
                    <p className="text-4xl font-bold">
                        I'm a Web Developer passionate about building
                        engaging, accessible, and user-centric experiences.
                    </p>
                    <p className="text-xl font-medium">
                        As a fresher, I've explored various aspects of web development,
                        including front-end development, UI/UX, and building interactive
                        applications. I'm eager to contribute and grow by crafting
                        seamless digital experiences that make a real impact.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default About
