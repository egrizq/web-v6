"use client"
import { Transition } from "@headlessui/react"
import { useState } from "react"

interface Data {
    projectName: string,
    desc: string,
    link: string,
    requirement: string
}

const projects: Data[] = [
    {
        projectName: "Optimizing Data Processing within a seconds with Goroutine",
        desc: "Optimize process and store 15001 rows of CSV and 1000 JSON file into PostgreSQL database within a seconds with Goroutine's.",
        link: "https://github.com/egrizq/product-analysis-with-concurrency",
        requirement: "Golang | Postgres | Gorm | Gin"
    },
    {
        projectName: "CRUD API for Animal Grooming Services with Typescript",
        desc: "Building RESTful API for animal grooming services with TypeScript and Express.js. Leveraging Prisma ORM and MySQL, ensuring efficient database management. Implement JWT for secure authentication and Zod with data validation.",
        link: "https://github.com/egrizq/animal-grooming/blob/master/README.md",
        requirement: "Typescript | MySQL | Express.js |Prisma | Zod"
    },
    {
        projectName: "Text Summarization with Hugging Face Model",
        desc: "Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa.",
        link: "https://github.com/egrizq/text_summarization",
        requirement: "Python | JavaScript | Flask | Boostrap | HTML"
    },
    {
        projectName: "Build & Deploying CNN Model to Recognize Pizza and Pasta",
        desc: "Deploying a Convolutional Neural Networks (CNN) model with Flask to recognize pizza and pasta images in real-time on local development.",
        link: "https://github.com/egrizq/pizza_or_pasta/tree/master",
        requirement: "Python | Flask | Boostrap | HTML"
    },
    {
        projectName: "Exploring Bike Sharing System",
        desc: "Exploring the correlations between user behavior by season, weather, temperature, and hour to identify bike sharing patterns",
        link: "https://github.com/egrizq/bike_analysis/tree/master",
        requirement: "Python | Pandas | Numpy | Matplotlib | Seaborn"
    },
    {
        projectName: "Sentiment Analysis for Batik Air Airways",
        desc: "Implemented web scraping to collect the reviews. Utilized the Vader Sentiment for in-depth sentiment analysis and visualization through Word Cloud",
        link: "https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb",
        requirement: "Python | Beautiful Soup | Vader Sentiment | Seaborn"
    }
]

const FadeIn = ({ delay, children }: any) => (
    <Transition.Child
        enter={`transition-all ease-in-out duration-700 ${delay}`}
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        {children}
    </Transition.Child>
)

const ProjectItem = ({ data }: { data: Data }) => {
    const [show, setShow] = useState(false)

    return (
        <div className="border-b pb-2">
            <button
                className="text-lg font-bold italic pb-3 hover:text-green-500"
                onClick={() => setShow(!show)}
            >
                {data.projectName}
            </button>
            <Transition.Root show={show}>
                <FadeIn delay="delay-[0ms]">
                    <div className="text-md italic pb-3">
                        <p>{data.desc}</p>
                    </div>

                    <div className="flex justify-between pb-3">
                        <a href={data.link}
                            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px]
                                    after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                            Source Code
                        </a>
                        <span>{data.requirement}</span>
                    </div>
                </FadeIn>
            </Transition.Root>
        </div>
    )
}

export default function ProjectList() {
    return (
        <>
            {projects.map((project, index) => (
                <span key={index}>
                    <ProjectItem data={project} />
                </span>
            ))}
        </>
    )
}