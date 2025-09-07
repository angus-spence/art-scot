import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 font-libertinus-700 min-h-screen">
      <div className="flex flex-row p-4">
        <div className="bg-gray-900 rounded-xl w-full h-64 relative overflow-hidden">
          <Image
            src="/background.webp"
            alt="Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-left ml-4">
            <Image
              src="/Logo.webp"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-end mr-4">
            <h1 className="text-xl text-white p-2">Home</h1>
            <h1 className="text-xl text-white p-2">Archive</h1>
            <h1 className="text-xl text-white p-2">Exhibition</h1>
            <h1 className="text-xl text-white p-2">Projects</h1>
            <h1 className="text-xl text-white p-2">About</h1>
            <h1 className="text-xl text-white p-2">Contact</h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="p-4">
          <h1 className="text-4xl text-gray-700">Issue Thirteen</h1>
          <p className="text-gray-700 text-lg mt-4">
            Issue 13 arrives almost three years to the day since our first issue. With a gently raised glass, four regular contributors survey our Scottish art world from typically different perspectives. Jane Adamson walks us around The McManus' A Weather Eye exhibition and gives outside visitors a little window into Scottish art; Robert De Mey explores Luffness Priory with artist, Rose Strang, along with the grandfather of the house, Richard Demarco; Douglas Erskine talks to young contemporary painter, Rachel Stanley, about forging a distinct visual language: while Roger Spence celebrates the life and work of one of Scotland's foremost printmakers, Robert Shaw.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-4 w-full">
            <div className="border border-gray-300 p-2 rounded-xl">
              <div className="overflow-hidden relative h-64">
                <Image
                  src="/robert-shaw.webp"
                  alt="Robert Shaw"
                  fill
                  className="rounded-xl"
                />
              </div>
              <h1 className="text-2xl text-gray-700 mt-2">
                Robert Shaw
              </h1>
              <p className="text-gray-700">
                The printmaker and painter has pictured human figures for over fifty years. Roger Spence meets him and explores his life's artistic work.
              </p>
            </div>
            <div className="border border-gray-300 p-2 rounded-xl">
              <div className="overflow-hidden relative h-64">
                <Image
                  src="/rachel_stanley.jpg"
                  alt="Rachel Stanley"
                  fill
                  className="rounded-xl"
                />
              </div>
              <h1 className="text-2xl text-gray-700 mt-2">
                Rachel Stanley
              </h1>
              <p className="text-gray-700">
                The young painter is out to create a distinctive language, treating the landscape with an abstract touch. She talks to Douglas Erskine about her progress to date.
              </p>
            </div>
            <div className="border border-gray-300 p-2 rounded-xl">
              <div className="overflow-hidden relative h-64">
                <Image
                  src="/a-weather-eye-header.png"
                  alt="Rachel Stanley"
                  fill
                  className="rounded-xl"
                />
              </div>
              <h1 className="text-2xl text-gray-700 mt-2">
                A Weather Eye
              </h1>
              <p className="text-gray-700">
                Jane Adamson sends a letter to America, telling a story about Scottish art inspired by the McManus' exhibition A Weather Eye.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}