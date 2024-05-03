import Link from 'next/link';

export default function Home() {
    return (
        <>
            <main className="container mx-auto font-mono">
                <div className="flex">

                    <div className="flex w-8/12">
                        <div className="flex h-screen items-center justify-start pl-16">
                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-col sm:text-lg md:text-2xl xl:text-4xl">
                                    <div className="flex items-center space-x-1">
                                        <span>Hi, my name is</span>
                                        <span className="bg-gradient-to-t from-green-500 to-50% rounded-md px-2 py-1">
                                            Rizq Ramadhan
                                        </span>
                                    </div>
                                    <p className="my-1">I'm a Back-End Developer,</p>
                                    <p className="my-1">Student and Cat Lover.</p>
                                </div>

                                <div className="flex text-xl">
                                    <a href="/CV_Muhammad Rizq Ramadhan.pdf"
                                        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px]
                                 after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" download>
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-4/12 flex-col">
                        <div className="flex justify-end">
                            <div className="flex pr-16 pt-10">
                                <Link href="/projects"
                                    className="p-2 border border-white rounded-md hover:text-black hover:bg-white">
                                    <span className="text-xl">Projects</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-end mt-auto">
                            <div className="flex pr-16 pb-10">
                                <div className="flex flex-rows space-x-4  text-xl">

                                    <div className="flex items-center">
                                        <a href="https://medium.com/@rizq.ramadhan17">
                                            <img src="medium.png" alt="Medium icon" width="55" height="auto" />
                                        </a>
                                    </div>

                                    <div className="flex items-center">
                                        <a href="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/">
                                            <div className="py-1 px-2 border-white border-2 rounded-md">
                                                <span>In</span>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="flex">
                                        <a href="https://github.com/egrizq">
                                            <img src="git.png" alt="Github icon" width="55" height="auto" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
