import { FaArrowDown, FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { LuSparkles } from "react-icons/lu"

function Hero({pageRefs}){

    return(
        <div ref={(ele) => pageRefs.current[0] = ele} className="sticky h-screen bg-white flex flex-col sm:flex-row items-center py-2 px-6 md:px-12 lg:px-16 justify-evenly md:justify-between">
            <div className="w-full flex flex-col gap-10">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-12">
                    <p className="">Hi. I'm Akash.</p>
                    <p className="">A web developer.</p>
                </div>
                <p className="text-base lg:text-xl font-semibold lg:max-w-[80%]">
                    As a web developer, I'm passionate about creating engaging, accessible,
                    and user-centric experiences that seamlessly blend functionality with
                    intuitive design.
                </p>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/akash-yadav-775726225/" target="_blank">
                        <FaLinkedin className="h-10 w-10 fill-blue-600"/>
                    </a>
                    <a href="https://github.com/developerakashy" target="_blank">
                        <FaGithub className="h-10 w-10 rounded-full"/>
                    </a>
                    <a href="mailto:developerakashy@gmail.com">
                        <IoMdMail className="h-10 w-10 fill-red-500"/>
                    </a>

                </div>
                <a className="flex w-fit items-center gap-2 px-4 py-2 bg-stone-100 text-black duration-200 rounded-full hover:bg-red-500 hover:text-white" href="https://drive.google.com/file/d/1KK3RBnmHj4ID-IfTiKzq34EqEqoGHVHT/view?usp=drive_link" download>Resume <FaArrowDown/></a>
            </div>

            <div className="w-4/5 sm:w-2/3 lg:w-1/2 p-12 flex items-center justify-center">
                <LuSparkles className="h-full w-full stroke-blue-500 fill-blue-500 stroke-1"/>
            </div>
        </div>
    )
}

export default Hero
