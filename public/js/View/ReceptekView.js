import ReceptView from './ReceptView.js';

class ReceptekView {

    constructor() {
        $('main').html(`
            <form id="selector">
            <select><select>
            </form>
            <table class="table" id="receptek">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Név</th>
            <th scope="col">Kategória</th>
            <th scope="col">Leírás</th>
            <th scope="col">Dátum</th>
            </tr>
            </table>
        `);
        
    }

    reloadReceptek(receptek) {
        receptek.forEach(recept => {
            new ReceptView(recept, '#receptek');
        });
    }

    reloadCategory(kategoriak) {
        kategoriak.forEach(kategoria => {
            $('#selector select').append(`<option value="${kategoria.id}">${kategoria.nev}</option>`);
        });

    }

    


}

export default ReceptekView;