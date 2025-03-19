function TechCard({TechName, TechArray}){

    return(
        <>
            <div className="bg-white w-full min-[400px]:w-fit min-h-121 p-8 rounded-2xl flex flex-col">
                <p className="text-4xl min-[400px]:w-72 w-full font-semibold">{TechName}</p>
                <div className="py-3">
                    {
                        TechArray.map((tech, index) =>
                            <div key={tech.label} className={`py-3 flex justify-between ${index === (TechArray.length - 1) ? '' : 'border-dashed border-b border-blue-600'}`}>
                                <p className="text-lg">{tech.label}</p>
                                {tech.element}
                            </div>
                        )
                    }
                </div>
                <p className="text-4xl text-end font-semibold mt-auto">{TechName}</p>
            </div>
        </>
    )
}

export default TechCard
