import ProjectList from "../components/project";

export default function Project() {

    return (
        <>
            <main className="container mx-auto">
                <div className="flex justify-center py-10">
                    <div className="flex flex-col w-6/12 space-y-5">
                        <span className="text-3xl text-center pb-6">Projects</span>

                        <ProjectList />

                        <div className="sm:text-sm md:text-xl text-end">
                            <a href="/" className="hover:text-green-500">
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}