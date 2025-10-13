export const ClientsReview = () => {
    return (
        <section className="mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-amber-100 p-6 rounded-xl shadow-md">
                    <p>"Amazing service! My hair has never looked better."</p>
                    <span className="block mt-4 font-semibold">– Sarah J.</span>
                </div>
                <div className="bg-amber-100 p-6 rounded-xl shadow-md">
                    <p>"The staff is professional and friendly, highly recommend."</p>
                    <span className="block mt-4 font-semibold">– Emily R.</span>
                </div>
                <div className="bg-amber-100 p-6 rounded-xl shadow-md">
                    <p>"I love coming here, it's a true relaxation experience."</p>
                    <span className="block mt-4 font-semibold">– Olivia M.</span>
                </div>
            </div>
        </section>
    )
}