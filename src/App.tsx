import CatCard from "./Card/catCard";


export const App  = () => {
    return (initCatCards())
}

function initCatCards(){
    const cilon : string = "Mucilon";
    const  cimgsrc : string  = "src/assets/cilon.jpeg";
    const cgifsrc : string = "src/assets/cilongif.gif";
    const cdescription : string = "TESTE";

    const mings = "Mingau";
    const mimgsrc = "src/assets/mings.jpg";
    const mgifsrc = "src/assets/mingsgif.gif";
    const mdescription = "TESTE";

    const nests = "Neston";
    const nimgsrc = "src/assets/nests.jpeg";
    const ngifsrc = "src/assets/nestsgif.gif"
    const ndescription = "TESTE"

    return(
    <div className="container-gatinhas">
        <CatCard name={cilon} imgsrc={cimgsrc} gifsrc={cgifsrc} description={cdescription}></CatCard>
        <CatCard name={nests} imgsrc={nimgsrc} gifsrc={ngifsrc} description={ndescription}></CatCard>
        <CatCard name={mings} imgsrc={mimgsrc} gifsrc={mgifsrc} description={mdescription}></CatCard>
    </div>)
}

export default App;