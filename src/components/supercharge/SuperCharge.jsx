import blacklist from '../../store/images/icon-blacklist.svg';
import text from '../../store/images/icon-text.svg';
import preview from '../../store/images/icon-preview.svg';
import ListItem from './ListItem';
const DUMMY_DATA = [{
    id : 0,
    svg:blacklist,
    head: "Create Blacklists",
    body: "Easily search your snippets by content, category, web address, application, and more."
},{
    id : 1,
    svg: text,
    head: "Plain Text Snippets",
    body: "Remove unwanted formatting from copied text for a consistent look."
},
{
    id : 2,
    svg: preview,
    head: "Sneak Preview    ",
    body: "Quick preview of all snippets on your Clipboard for easy access."
}]
const SuperCharge = () => {

    const lisItem = DUMMY_DATA.map( data => (
        <ListItem 
        key={data.id}
        svg={data.svg}
        head={data.head}
        body={data.body}
        />
    ))
  return (
    <section className="section-container my-20 space-y-40">
      <article className="space-y-20">
        <h1 className=" font-semibold text-7xl text-gray-600 font-sans">
        Supercharge your workflow
        </h1>
        <p className="section-content text-3xl text-gray-400 leading-normal">
        We've got the tools to boost your productivity
        </p>
      </article>
      <div className='flex flex-col md:flex-row  space-y-40 md:space-y-0 md:space-x-8 items-center justify-between'>
        {lisItem}
      </div>
    </section>
  );
};
export default SuperCharge;
