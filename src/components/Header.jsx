import { useEffect, useRef, useState } from "react"

function Header({activeTab, setActiveTab, pageRefs}){
    const [sliderPosition, setSliderPosition] = useState({})
    const navRefs = useRef({})

    const navItems = [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About'},
        {path: '/tech', label: 'Expertise'},
        {path: '/projects', label: 'Projects'},
        {path: '/footer', label: 'Contact'}
    ]


    const handleNavClick = (tab, index) => {
        setActiveTab(tab)
        console.log(navRefs.current[tab])

        if(pageRefs.current[index]){
            pageRefs.current[index].scrollIntoView()
        }
    }

    useEffect(() => {
        const updateSliderPosition = () => {
            const currentTab = navRefs.current[activeTab]

            if(currentTab){
                setSliderPosition({
                    width: `${navRefs.current[activeTab].offsetWidth}px`,
                    left: `${navRefs.current[activeTab].offsetLeft}px`
                })
            }
        }

        updateSliderPosition()

    }, [activeTab])

    return(
        <>
            <div className="hidden fixed z-40 top-0 right-0 left-0 sm:flex justify-between py-2 px-16 items-center">
                <div className="h-10 w-10 rounded-full p-[6px] bg-white/50 backdrop-blur-md flex items-center justify-center">
                    <img className="" src="./vite.svg" alt="photo" />
                </div>

                <div className="relative p-2 rounded-full backdrop-blur-sm bg-red-100/50">
                    <nav className="flex gap-2 relative rounded-full">
                        {navItems.map((navItem, index) =>
                            <button
                                key={navItem.label}
                                onClick={(e) => handleNavClick(navItem.path, index)}
                                className="cursor-pointer z-10 px-4 py-1 rounded-full font-medium text-lg text-gray-800"
                                ref={(element) => (navRefs.current[navItem.path] = element)}
                            >

                                    {navItem.label}

                            </button>
                        )}

                        <div
                            className="absolute pointer-events-none h-full z-0 backdrop-blur-md bg-white rounded-full transition-width transition-left duration-250"
                            style={sliderPosition}
                        />

                    </nav>
                </div>

                <div className="h-10 w-10">

                </div>
            </div>

            {/* mobile view */}
            <div className="hidden fixed z-20">
                <div className="h-10 w-10 rounded-full p-[6px] bg-white/50 backdrop-blur-md flex items-center justify-center">
                    <img className="" src="./vite.svg" alt="photo" />
                </div>

                <div className="">

                </div>

            </div>
        </>
    )
}

export default Header
