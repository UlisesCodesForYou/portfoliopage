import Image from "next/image";



export const HomePage =() => {
    return (
        <>
            <div className="h-screen w-screen bg-gray-50">
                <div className="md:grid place-items-center ">
                    <Image src="/Portfolio-Logo.png" width={450} height={450} alt="/" className="mb-5"/>
                </div>
                <div className="-mt-10 px-9 md:px-9 -pt-10 -mt-10 lg:px-16 -pt-4">
                    <div className="text-teal-600 font-pageFont text-center mb-3">
                        <h1 className="text-xl mb-3 underline underline-offset-1 ">
                            About Me
                        </h1>
                        <h2>
                           Hi, I am Ulises!  I am a former Chef turned web developer. I enjoy creating creating apps and websites.  I believe that both the Culinary and Software development
                            industries have the same root value; they both deal with providing a great user/guest experiences.
                        </h2>
                        <h1 className="text-xl mb-3 mt-4 underline underline-offset-1 ">
                           Below are a few of the technologies I have used:
                        </h1>
                        <ul>
                            <li>REACT</li>
                            <li>Next Js</li>
                            <li>Typescript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>Mantine</li>
                            <li>Chakra Ui</li>
                        </ul>
                        <div>
                            <div>
                                <h1>
                                    My work
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}