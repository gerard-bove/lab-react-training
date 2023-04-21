/* import { Children } from "react"; */

function Greetings({lang, children}) {
    let greating = "";
    if(lang === "de") greating = "Hallo";
    else if(lang === "en") greating = "Hello";
    else if(lang === "es") greating = "Hola";
    else if(lang === "fr") greating = "Bonjour";
    
    return (
        <div className="card user-card">
            <p>{greating} {children}</p>
        </div>
    )
}

export default Greetings;