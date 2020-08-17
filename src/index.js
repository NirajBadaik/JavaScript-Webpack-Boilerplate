import './test.css';
import Fetcher from './app';

console.log('hello world');


const fetcher = new Fetcher();

fetcher.getData()
.then(data=>console.log(data))
.catch(err=>console.log(err));