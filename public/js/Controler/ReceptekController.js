import ReceptekView from '../View/ReceptekView.js';
import ReceptekModel from '../Model/ReceptekModel.js'

class ReceptekController{
    #model;
    #view;
    constructor(){
        const token = $('meta[name="csrf-token"]').attr("content");
        this.#model = new ReceptekModel(token);
        this.app();
    }

    app(){
        this.display();

        this.#model.getKategoriak((reKa)=>{
            this.#view.reloadCategory(reKa);
        });
        this.#model.getReceptek((reRe)=>{
            this.#view.reloadReceptek(reRe);
        })

        
    }


    display(){
        this.#view = new ReceptekView();
    }
}

export default ReceptekController;