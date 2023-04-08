import google from '../../store/images/logo-google.png';
import ibm from '../../store/images/logo-ibm.png';
import microsoft from '../../store/images/logo-microsoft.png';
import hp from '../../store/images/logo-hp.png';
import vg from '../../store/images/logo-vector-graphics.png';
const References = ()=>{
return(
    <section className="section-container my-60 flex flex-col items-center space-y-40 md:space-y-0 justify-between md:flex-row">
        <figure>
            <img src={google} alt="google" className='w-full' />
        </figure>
        <figure>
            <img src={ibm} alt="ibm" className='w-full' />
        </figure>
        <figure>
            <img src={microsoft} alt="microsoft" className='w-full' />
        </figure>
        <figure>
            <img src={hp} alt="hp" className='w-full' />
        </figure>
        <figure>
            <img src={vg} alt="vg" className='w-full' />
        </figure>
    </section>
)
}
export default References;