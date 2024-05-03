"Use Client"
export default function Project() {
    const projects = [
        ["Optimizing Data Processing within a Seconds by Golang Goroutine’s", "https://github.com/egrizq/product-analysis-with-concurrency/blob/master/README.md"],
        ["CRUD API for Animal Grooming Services with Typescript", "https://github.com/egrizq/animal-grooming/blob/master/README.md"],
        ["Text Summarization with Hugging Face Model", "https://github.com/egrizq/text_summarization"],
        ["Build & Deploying CNN Model to Recognize Pizza and Pasta", "https://github.com/egrizq/pizza_or_pasta/tree/master"],
        ["Exploring Bike Sharing System", "https://github.com/egrizq/bike_analysis/tree/master"],
        ["Sentiment Analysis for Batik Air Airways", "https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb"],
        ["Alphabet Recognition with CNN Model", "https://www.kaggle.com/code/rizqramadhan/german-alphabet-recognition"]
    ]
    
    return (
        <>
            <main className="container mx-auto">
                <div className="flex justify-center pt-16">
                    <div className="flex flex-col space-y-10 p-2">
                        <span className="text-3xl text-center">Projects</span>

                        <div className="font-semibold sm:text-sm md:text-xl italic space-y-4 font-mono">
                            {projects.map((project, index) => (
                                <div className="border-b pb-2">
                                    <a className="hover:text-green-500" href={project[1]} key={index}>
                                        {project[0]}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <span className="text-end sm:text-sm md:text-xl">
                            <a href="/" className="hover:text-green-500">Back</a>
                        </span>
                    </div>
                </div>

            </main>
        </>
    )
}