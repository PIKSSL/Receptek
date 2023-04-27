
class ReceptView{

    constructor(recept, parent){
        $(parent).append(
            `
            <td scope="col">${recept.id}</td>
            <td scope="col">${recept.nev}</td>
            <td scope="col">${recept.kat_nev}</td>
            <td scope="col">${recept.leiras}</td>
            <td scope="col">${recept.datum == null ? "-":recept.datum}</td>
            `
        );
    }
}

export default ReceptView;