import devices from '../../store/images/image-devices.png';
const Access = () => {

    return(
  <section className="section-container space-y-40 mt-60">
    <article className='space-y-20'>
      <h1 className=" font-semibold text-7xl text-gray-600 font-sans">
        Access Clipboard Anywhere
      </h1>
      <p className="section-content text-3xl text-gray-400 leading-normal">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
    </article>
        <img src={devices} alt="devices" className='w-4/5 mx-auto'/>
  </section>
    )
};
export default Access;
