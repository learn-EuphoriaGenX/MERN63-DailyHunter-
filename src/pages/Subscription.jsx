import Button from "../components/Button"
import Card from "../components/Card"

let data = [
    {
        title: "Noteworthy technology acquisitions 2021",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        buttonText: "View More",
    },
    {
        title: "New multi-million dollar investment in AI",
        description: "AI is changing the world, click here to learn more. This is a wider card with supporting text below as a natural lead-in to additional content.",
        buttonText: "Read More",
    },
    {
        title: "New Movie Release in 2021! are you ready?",
        description: "Hello Guyss The new movie is coming soon. Are you ready to watch it?",
        buttonText: "Watch Now",
    }
]
function SubscripTtion() {
    return (
        <div className="flex justify-center gap-10 py-10">

            {
                data.map((item, id) =>
                    <div key={id} className="flex flex-col justify-center items-center gap-5 bg-gray-500 p-5 rounded-lg shadow-md">
                        <Card title={item.title} description={item.description} />
                        <Button text={item.buttonText} />
                    </div>)
            }
        </div>
    )
}
export default SubscripTtion
