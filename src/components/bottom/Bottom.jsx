import Button from "../../shared/button/Button";
const Bottom = ()=>{
    return(
        <section className="section-container space-y-20">
        <h1 className=" text-7xl font-semibold text-gray-600 font-sans">
        Clipboard for iOS and MacOS
        </h1>
        <p className="section-content text-4xl text-gray-400 leading-normal">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-8 items-center justify-center">
          <Button className="bg-strongCyan text-3xl text-white w-full md:w-3/12 rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300">Download for IOS</Button>
          <Button className="bg-blue-500 text-3xl text-white w-full md:w-3/12 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300">Downlod for Mac</Button>
        </div>
      </section>
    )
}
export default Bottom;