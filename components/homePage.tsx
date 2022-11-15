import Image from "next/image";
import Head from 'next/head';


export const HomePage =() => {
    return (
        <>
            <div className="h-screen w-screen bg-gray-50">
                <div className="tablet:grid place-items-center desktop:grid place-items-center " >
                    <Image src="/Portfolio-Logo.png" width={500} height={500} alt="/" />
                </div>
                <div>
                    <div className="text-teal-600 mobile:text text-center font-pageFont pr-7 pl-5 tablet:pr-8 pl-8 -mt-10 desktop:mr-10 ml-10 ">
                        <h1 className="text-xl mb-3">
                            About Me!
                        </h1>
                        <h2>
                           ADD BIO HERE!!
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}