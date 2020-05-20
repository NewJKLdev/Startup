var fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
//const getAsync = promisify(client.set).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub(){

    let resultCount = 1, onPage = 0;
    const allJobs = [];

// fetchin' all pages
    while(resultCount >0){
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }

    console.log('got', allJobs.length, 'jobs total');

    // filter algorithm
    const juniorJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
       

        // algorithm logic here!
        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ){
            return false
        }

        return true;
    })

    console.log('filtered down to', juniorJobs.length);


    // set for redis
    console.log('got', allJobs.length, 'jobs')
    const success = await setAsync('github', JSON.stringify(juniorJobs));

    console.log({success});
}
 //fetchGithub();

module.exports = fetchGithub;