const ListItem = ({ head, body, svg }) => {
  return (
    <figure className="space-y-20 flex flex-col md:w-[25%]  items-center">
      <img src={svg} alt=""  className="w-[5rem]"/>
      <figcaption className="space-y-10">
        <h1 className="text-4xl font-semibold">{head}</h1>
        <p className="text-gray-400 text-[1.9rem] section-content ">{body}</p>
      </figcaption>
    </figure>
  );
};
export default ListItem;
