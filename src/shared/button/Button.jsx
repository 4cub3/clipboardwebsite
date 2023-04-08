 const Button = ({children, className})=>{
    return(
        <button className={`px-6 py-8 ${className? className : ''}`}>{children}</button>
    )
 }
 export default Button;