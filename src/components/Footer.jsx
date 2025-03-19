import { FaRegCopyright } from "react-icons/fa"
import { IoHeart } from "react-icons/io5"

function Footer({pageRefs}){

    return(
        <div ref={(ele) => pageRefs.current[4] = ele} className="sticky px-16 flex flex-col justify-between text-white h-screen w-full bg-black">
            <p className="text-white">Footer page</p>

            <div className="">

            </div>

            <div className="flex justify-between py-4">
                <div className="flex gap-2 items-center">
                    <FaRegCopyright className=""/>
                    <p>Akash Yadav</p>
                </div>

                <div className="flex gap-2 items-center">
                    <p>Built by Akash with</p>
                    <IoHeart className="fill-red-500"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
