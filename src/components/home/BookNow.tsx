import { useState } from "react"
import { Button } from "../Button"
import { toast } from "react-toastify";

export const BookNow = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Appointment booked");
        }, 1000)
    }

    return (
        <section className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Look?</h2>
            <p className="text-gray-700 mb-6">
                Book your appointment today and experience the best in beauty care.
            </p>
            <Button className="mx-auto w-40" type="button" onClick={handleClick} isLoading={loading}>
                Book Now
            </Button>
        </section>
    )
}