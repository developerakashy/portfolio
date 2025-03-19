import { useState } from "react"
import { GoArrowDownRight, GoArrowRight } from "react-icons/go"

function Projects({pageRefs}){
    const [showMore, setShowMore] = useState(false)


    const projects = [
        {
            img: '../src/assets/bluesky.png',
            name: 'BlueSky',
            tech: 'React - ReactRouter - Tailwind - Express - WebSocket',
            type: 'Fullstack Project',
            url: 'https://blue-sky-lyart.vercel.app/'
        },
        {
            img: '../src/assets/agecalculator.png',
            name: 'Age Calculator',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://age-calculator-azure-omega.vercel.app'
        },
        {
            img: '../src/assets/stopwatch.png',
            name: 'Stop Watch',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://stop-watch-lyart-pi.vercel.app/'
        },
        {
            img: '../src/assets/quiz.png',
            name: 'Quiz App',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://quiz-app-2393.vercel.app'
        },
        {
            img: '../src/assets/currencyconvertor.png',
            name: 'Currency Convertor',
            tech: 'React - Tailwind',
            type: 'Mini Project',
            url: 'https://convertmycurrency.vercel.app/'
        },
        {
            img: '../src/assets/financetracker.png',
            name: 'Finance Tracker',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://finance-tracker-flax.vercel.app/'
        },
        {
            img: '../src/assets/productandcartpage.png',
            name: 'Product And Cart Page',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://product-and-cart-page.vercel.app/'
        },
        {
            img: '../src/assets/todo.png',
            name: 'TODO App',
            tech: 'HTML - CSS - Javascript',
            type: 'Mini Project',
            url: 'https://todo-using-js.vercel.app'
        },
    ]

    const handleShowMore = () => {
        setShowMore(prev => !prev)
    }

    return(
        <div ref={(ele) => pageRefs.current[3] = ele} className="sticky w-full bg-blue-600 py-16">
            <div className="flex items-end justify-center">
                <p className="text-5xl sm:text-8xl text-white">Projects</p>
                <GoArrowDownRight className="h-10 w-10 sm:h-20 sm:w-20 fill-white"/>
            </div>

            <div className="flex flex-wrap flex-2 gap-8 justify-center py-12">
                {
                    projects.slice(0, showMore ? projects.length : 4).map((project) =>
                        <a key={project.name} href={project.url} target="_blank" className=" w-[85%] lg:basis-[42vw] cursor-pointer group overflow-hidden ">
                            <div className="bg-blue-100 borde border-gray-200 max-w-full rounded-3xl sm:rounded-4xl  overflow-hidden flex items-center relative">
                                <img className="w-full  group-hover:scale-102 duration-200" src={project.img} alt="" />
                                <p className="py-1 px-3 bg-green-200 text-xs rounded-xl absolute bottom-4 left-4">{project.type}</p>
                            </div>
                            {/* <p className=" ml-1 text-white font-medium">{project.tech}</p> */}
                            <button className="cursor-pointer relative flex items-center gap-1 text-2xl sm:text-3xl font-semibold text-white -translate-x-6 sm:-translate-x-8">
                                <GoArrowRight className="group-hover:translate-x-8 duration-300 ease-in-out"/>
                                <p className="group-hover:translate-x-10 duration-300 mt-2">{project.name}</p>
                            </button>
                        </a>
                    )
                }



            </div>

            <div className="text-center px-26">
                <button className={`cursor-pointer mr-12 mb-6 px-3 py-1 rounded-lg bg-blue-800 hover:bg-blue-500 text-white `} onClick={handleShowMore}>{showMore ? 'Show less' : 'Show All...'}</button>
            </div>
        </div>
    )
}

export default Projects
