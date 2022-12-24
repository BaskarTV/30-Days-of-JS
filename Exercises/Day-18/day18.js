// Promise Syntax

/* const promise = new Promise((resolve, reject) => {
     resolve('success')
     reject('failure')
  })*/


// Promise Settled with resolve  

 const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
     const skills = ['HTML','CSS','JS','React']
     if(skills.length > 0){
        resolve(skills)
     }else{
        reject('Something wrong has happened')
     }
    },2000)
 }) 

 
 .then(result => {console.log(result)})
 .catch(error => {console.log(error)})


// Promise Settled with reject

const doPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    const skills = ['HTML','CSS','JS','React']
    if(skills.includes('Node')){
        resolve('FullStack Developer')
    }else{
        reject('Not FullStack Developer')
    } 
  },2000)
})

.then(result => {console.log(result)})
.catch(error => {console.log(error)})


// *****Fetch API *******

const url ='https://restcountries.com/v2/all'

setTimeout(() => {
    fetch(url)
.then(response => response.json())
.then(data => {console.log(data)})
.catch(error =>{console.log('Something went wrong in Data')})
},2000)



// ****** Fetch API Using async & await*******

const fetchData = async () => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    }catch (err){
        console.log(err)
    }
}

console.log('==========async and await')
fetchData()


// ************* Exercises ********************

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// ************ Exercises: Level 1 *************

// 1.Read the countries API using fetch and print the name of country, capital, languages, population and area.

const fetchCountries = async () => {
    try{
        const response = await fetch(countriesAPI)
        const countries = await response.json()
       return countries
    }catch(err){
        console.log(err)
    }
}

fetchCountries().then(response => {
    let countries = response.map(countries => `CountryName-: ${countries.name},capital-: ${countries.capital},languages-: ${countries.languages[0].name},Population-: ${countries.population},Araea-: ${countries.area}`)

    console.log(countries)
})


// ************** Exercises: Level 2 ***************

// 1.Print out all the cat names in to catNames variable.

const fetchCat = async () => {
    try{
       const response = await fetch(catsAPI);
       const  catData = await response.json()
       return catData
    }catch(err){
     console.log(err)
    }
}

fetchCat().then(response => {
    let catNames = response.map(cat => cat.name)
    console.log(catNames)
})


// **************** Exercises: Level 3 *******************

// 1.Read the cats api and find the average weight of cat in metric unit.

const weightCat = async () => {
    try{
        const response = await fetch(catsAPI);
        const catData = await response.json()
        return catData
    }catch(err){
        console.log(err)
    }
}


weightCat().then(response => {
   let catWeight = response.map(cat => cat.weight.metric).sort((a,b) => b - a)
   
   console.log('Weight',catWeight)


})

// 2.Read the countries api and find out the 10 largest countries

const findTopTen = async() => {
    try{
       const response = await fetch(countriesAPI);
       const topCountry = await response.json()
       return topCountry
    }catch(err){
    console.log(err)
    }
}

