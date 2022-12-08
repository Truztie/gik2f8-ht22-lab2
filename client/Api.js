class Api {
    url = "";

    constructor(url){
        this.url = url;
    }

    /*create = POST */
    create(data){
        const JSONData = JSON.stringify(data);
        console.log(`Sending ${JSONData} to ${this.url}`);

        const request = new Request(this.url, {
            method: "POST",
            body: JSONData,
            headers:{
                "content-type": "application/json"
            }
        });

        return fetch(request)
            .then((result) => result.json())
            .then((data) => data)
            .catch((err) => console.log(err));
    }
    /*read = GET */
    getAll(){
        return fetch(this.url)
        .then(result => result.json())
        .then((data) => data);
    }

    /*delete = DELETE */
    remove(id){
        console.log(`Removing task with id ${id}`);

        return fetch(`${this.url}/${id}`,{
            method: "DELETE"
        })
            .then((result) => result)
            .catch((err) => console.log(err));
    }
}