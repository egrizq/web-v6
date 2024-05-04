import ProjectList from "../components/project";
import Link from 'next/link';

export default function Project() {

    return (
        <>
            <main className="container mx-auto">
                <div className="flex justify-center">
                    <div className="flex flex-col w-11/12 sm:w-11/12 md:w-9/12 lg:w-3/5 xl:w-6/12 space-y-6 py-10">
                        <span className="text-3xl text-center pb-4">Projects</span>

                        <ProjectList />

                        <div className="text-xl text-end">
                            <Link href="/" className="hover:text-green-500">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}