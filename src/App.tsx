import CatCard from "./Card/catCard";


export const App  = () => {
    return (initCatCards())
}

function initCatCards(){
    const cilon : string = "Mucilon";
    const cimgsrc : string  = "/static/cilon.jpeg";
    const cgifsrc : string = "/static/cilongif.gif";
    const cdescription : string = "TESTE";

    const mings = "Mingau";
    const mimgsrc = "/static/mings.jpg";
    const mgifsrc = "/static/mingsgif.gif";
    const mdescription = "TESTE";

    const nests = "Neston";
    const nimgsrc = "/static/nests.jpeg";
    const ngifsrc = "/static/nestsgif.gif"
    const ndescription = "TESTE"

    return(
    <div className="container-gatinhas">
        <CatCard name={cilon} imgsrc={cimgsrc} gifsrc={cgifsrc} description={cdescription}></CatCard>
        <CatCard name={nests} imgsrc={nimgsrc} gifsrc={ngifsrc} description={ndescription}></CatCard>
        <CatCard name={mings} imgsrc={mimgsrc} gifsrc={mgifsrc} description={mdescription}></CatCard>
    </div>)
}

export default App;