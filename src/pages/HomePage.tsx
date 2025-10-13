import { AboutStudio } from "../components/home/AboutStudio";
import { BookNow } from "../components/home/BookNow";
import { ClientsReview } from "../components/home/ClientsReview";
import { StudioServices } from "../components/home/StudioServices";
import { WhyChoose } from "../components/home/WhyChoose";

export const HomePage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold bg-amber-200 py-4">Welcome to Beauty Studio!</h1>
            <div className="px-4 py-8 flex flex-col justify-center gap-8">
                <AboutStudio />
                <StudioServices />
                <WhyChoose />
                <ClientsReview />
                <BookNow />
            </div>
        </div>
    )
}