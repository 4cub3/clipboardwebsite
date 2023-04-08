import desktop from "../../store/images/image-computer.png";
const Features = () => {
  return (
    <section className="section-container flex flex-col md:flex-row space-y-40 md:space-x-10    md:space-y-0 items-center">
      <figure className="w-full">
        <img src={desktop} alt="desktop" className="w-full" />
      </figure>
      <article className="space-y-10">
        <div className="space-y-3 flex flex-col md:items-start w-full">
          <h2 className="text-5xl font-semibold ">Quick Search</h2>
          <p className="text-gray-400 text-3xl section-content md:text-left">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="space-y-3 flex flex-col md:items-start w-full">
          <h2 className="text-5xl font-semibold ">iCloud Sync</h2>
          <p className="text-gray-400 text-3xl section-content md:text-left">
          Instantly saves and syncs snippets across all your devices.
          </p>
        </div>
        <div className="space-y-3 flex flex-col md:items-start w-full">
          <h2 className="text-5xl font-semibold ">Completely History</h2>
          <p className="text-gray-400 text-3xl section-content md:text-left">
          Retrieve any snippets from the first moment you started using the app.
          </p>
        </div>
      </article>
    </section>
  );
};
export default Features;
