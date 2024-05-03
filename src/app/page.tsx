export default function Home() {
  return (
    <>
    <main className="container mx-auto">
        <div className="flex">

            <div className="flex w-8/12">
                <div className="flex h-screen items-center justify-start pl-16">
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col sm:text-4xl md:text-4xl xl:text-5xl space-y-1">
                            <div>
                                <span className="pr-1">
                                    Hi, my name is     
                                </span>
                                <span className="bg-gradient-to-t from-green-500 to-50% rounded-md px-2 py-1">
                                    Rizq Ramadhan
                                </span>
                            </div>
                            <p>I'm a Back-End Developer,</p>
                            <p>Student and Cat Lover.</p>
                        </div>

                        <div className="flex text-xl">
                            <a href="/CV_Muhammad Rizq Ramadhan.pdf" className="border-b pb-1 hover:text-green-500" download>
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-4/12 flex-col">
                <div className="flex justify-end">
                    <div className="flex pr-16 pt-10">
                        <a href="/projects" 
                            className="p-2 border border-white rounded-md hover:text-black hover:bg-white">
                            <span className="text-xl">Projects</span>
                        </a>
                    </div>
                </div>

                <div className="flex justify-end mt-auto">
                    <div className="flex pr-16 pb-10">
                        <div className="flex flex-rows space-x-4  text-xl">

                            <div className="flex items-center">
                                <a href="https://medium.com/@rizq.ramadhan17">
                                    <img src="medium.jpg" 
                                        alt="Medium icon" width="55" height="auto" />
                                </a>
                            </div>

                            <div className="flex items-center">
                                <a href="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/">
                                    <div className="py-1 px-2 border-white border-2 rounded-md hover:text-black hover:bg-white">
                                        <span>In</span>
                                    </div>
                                </a>
                            </div>
    
                            <div className="flex">
                                <a href="https://github.com/egrizq">
                                    <img src="github.jpg" 
                                        alt="Github icon" width="55" height="auto" />
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
