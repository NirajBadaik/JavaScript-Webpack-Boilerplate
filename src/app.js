//to check if async wait is working//
class Fetcher{
    constructor(){
        this.url = 'https://jsonplaceholder.typicode.com/todos'
    }
    async getData(){
        const response = await fetch(this.url);
        const data = response.json();
        return data;
    }
}

export {Fetcher as default};