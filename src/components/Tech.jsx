import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPostman, SiReactrouter, SiSocketdotio, SiTailwindcss } from "react-icons/si"
import TechCard from "./TechCard"
import { RiNodejsLine } from "react-icons/ri"
import { VscVscode } from "react-icons/vsc"

function Tech({pageRefs}){

    const frontendTech = [
        {
            label: 'HTML',
            element: <FaHtml5 className="h-7 w-7 fill-orange-600"/>
        },
        {
            label: 'CSS',
            element: <FaCss3Alt className="h-7 w-7 fill-indigo-500"/>
        },
        {
            label: 'Javascript',
            element: <FaJsSquare className="h-7 w-7 fill-yellow-300"/>
        },
        {
            label: 'React',
            element: <FaReact className="h-7 w-7 fill-blue-400"/>
        },
        {
            label: 'React Router',
            element: <SiReactrouter className="h-7 w-7 fill-red-500"/>
        },
        {
            label: 'Tailwind CSS',
            element: <SiTailwindcss className="h-7 w-7 fill-sky-400"/>
        },
    ]

    const backendTech = [
        {
            label: 'NodeJS',
            element: <RiNodejsLine className="h-7 w-7 fill-green-600"/>
        },
        {
            label: 'Express',
            element: <SiExpress className="h-7 w-7"/>
        },
        {
            label: 'MongoDB',
            element: <SiMongodb className="h-7 w-7 fill-green-500"/>
        },
        {
            label: 'Socket.io',
            element: <SiSocketdotio className="h-7 w-7"/>
        },
    ]

    const versionTech = [
        {
            label: 'Git',
            element: <FaGitAlt className="h-7 w-7 fill-orange-600"/>
        },
        {
            label: 'GitHub',
            element: <FaGithub className="h-7 w-7"/>
        },
        {
            label: 'Vs Code',
            element: <VscVscode className="h-7 w-7 fill-blue-500"/>
        },
        {
            label: 'Postman',
            element: <SiPostman className="h-7 w-7 fill-orange-500"/>
        }
    ]

    return(
        <div ref={(ele) => pageRefs.current[2] = ele} className="sticky py-16 px-6 md:px-12 lg:px-16 w-full bg-blue-600 flex flex-col items-center justify-center">
            <div className="md:w-120 sm:w-100 min-w-75 text-5xl sm:text-6xl md:text-7xl font-semibold text-white">
                <p className="text-start">Area of</p>
                <p className="text-end">Expertise</p>
            </div>

            <div className="flex justify-center flex-wrap items-center py-12 gap-8">
                {<TechCard TechName={'Frontend'} TechArray={frontendTech}/>}

                {<TechCard TechName={'Backend'} TechArray={backendTech}/>}

                {<TechCard TechName={'Tools'} TechArray={versionTech}/>}
            </div>


        </div>
    )
}

export default Tech
