import ProjectList from "../components/project";
import Link from 'next/link';

export default function Project() {

    return (
        <>
            <main className="container mx-auto">
                <div className="flex justify-center py-10">
                    <div className="flex flex-col w-6/12 space-y-5">
                        <span className="text-3xl text-center pb-5">Projects</span>

                        <ProjectList />

                        <div className="sm:text-sm md:text-xl text-end">
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