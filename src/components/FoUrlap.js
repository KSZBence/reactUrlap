import { adatLeiras } from "../adatLeiras";

export default function FoUrlap(props){
    const adat = {}
    function beKuld(event){
        event.preventDefault()
    }
    
    function adatValt(event) {
        adat[event.target.id]=event.target.value
        props.adatKap(adat)
    }
    const listItems = Object.keys(adatLeiras).map((adat) =>
    
    <div className="form-group">
    <label for={adatLeiras[adat].megjelenes}>nev</label>
    <input type="email" className="form-control" id={adatLeiras[adat].megjelenes} aria-describedby="emailHelp"
     placeholder={adatLeiras[adat].placeholder} onChange={adatValt}></input>
    </div>
    );
 
    return(
        <form onSubmit={beKuld}>
  <div className="form-group">
    <label for="nev">nev</label>
    <input type="email" className="form-control" id="nev" aria-describedby="emailHelp" placeholder="Név" onChange={adatValt}></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}