
class ReceptekModel{
    #receptek;
    #kategoriak;
    #token
    constructor(token){
        this.#receptek = [];
        this.#kategoriak = [];
        this.#token=token;
    }

    getReceptek(func){
        fetch('/receptek',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN":this.#token
            }
        }).then((response)=>response.json()).then((data)=>{
            this.#receptek = data;

            func(this.#receptek);
        }).catch(error => {
            console.log(error);
        });
    }

    getKategoriak(func){
        fetch('/kategoriak',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN":this.#token
            }
        }).then((response)=>response.json()).then((data)=>{
            this.#kategoriak = data;
            func(this.#kategoriak);
        }).catch(error => {
            console.log(error);
        });
    }

    createRecept(recept, func){
        fetch('/recept',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN":this.#token
            },
            body:JSON.stringify(recept)
        }).then(func).catch(error => {
            console.log(error);
        });
    }

    removeRecept(id, func){
        fetch('/destroy/'+id,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN":this.#token
            },
        }).then(func).catch(error => {
            console.log(error);
        });
    }

    receptByCategory(kategoria,func){
        fetch('/receptByCategory',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN":this.#token
            },
            body:JSON.stringify(kategoria)
        }).then(func).catch(error => {
            console.log(error);
        });
    }
}

export default ReceptekModel;