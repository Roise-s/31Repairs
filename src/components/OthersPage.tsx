import { DialogDemo } from "./Book"

const OthersPage = () => {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl text-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col">
            <div className="mb-1.5">
                <img
                src="/other.jpg"
                className="rounded"
                alt=""
                />
            </div>

            <div>
                <div className="max-w-prose md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Android Repair Pricing Notice
                </h2>

                <p className="mt-4 text-gray-700">
                    Please note that every Android phone is built differently, so pricing will differ. Click the button below to book a repair
                </p>
                <div className="mt-2">
                    <DialogDemo />
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default OthersPage
