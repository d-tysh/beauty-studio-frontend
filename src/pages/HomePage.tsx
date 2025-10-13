import { H1 } from "../components/H1";
import { AboutStudio } from "../components/home/AboutStudio";
import { BookNow } from "../components/home/BookNow";
import { ClientsReview } from "../components/home/ClientsReview";
import { StudioServices } from "../components/home/StudioServices";
import { WhyChoose } from "../components/home/WhyChoose";

export const HomePage = () => {
    return (
        <div>
            <H1>Welcome to Beauty Studio!</H1>
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