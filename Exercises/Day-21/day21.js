// //  Accessing Elements by TagName

// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles)
// console.log(allTitles.length)

// for(const tag of allTitles){
//    console.log(tag)
// }


// // Accessing Element by ClassName

// const titleClass = document.getElementsByClassName('title');

// console.log('ClassTag',titleClass)
// console.log(titleClass.length)

// for(const  cName of titleClass){
//     console.log(cName)
// }


// // Accessing Element by IdName

// const titleId = document.getElementById('first-title')

// console.log(titleId)


// // Accessing Element by QuerySelector

// const queryTitles = document.querySelectorAll('h1');

// const classTitles = document.querySelectorAll('.title')
// console.log(queryTitles.length)

// queryTitles.forEach(title =>console.log(title))

// classTitles.forEach(title => console.log('ClassTag :',title))


// // Adding Attributes 

// // Adding attributes can not work for all elements

// const addAtt = document.querySelectorAll('h1')
// addAtt[3].className = 'title'
// addAtt[3].id ='fourth-title'

// // Setting Attributes

// addAtt[3].setAttribute = ('class','title')
// addAtt[3].setAttribute = ('id','fourth-title')


// // Adding class using classList

// addAtt[3].classList.add('title','header-title')


// // Removing class Using remove

// addAtt[3].classList.remove('title','header-title');


// // Adding Text to HTML element

// // Adding Text content using textContent

// addAtt[3].textContent = 'Fourth-Title'


// // Adding InnerHTML innerHtml can add a text or HTML element or elements as child

// const lists = `
//   <li>30 Days of JavaScript Challenge ongoing</li>
//   <li>Challenges Completed</li></li>
//   <li>Upcomming Challenges</li>
//   <li>Upcomming Projects</li>
// `

// const ul = document.querySelectorAll('ul')
// ul.innerHTML = lists

// console.log(ul)


// // Adding style

// const tagTitles = document.querySelectorAll('h1')

// tagTitles.forEach((title, i) => {
//     title.style.fontSize = '24px'
//     if(i % 2 === 0){
//         title.style.color = 'green'
//     }else{
//         title.style.color = 'red'
//     }
// })


// // Adding Style Background Color

// const colTitles = document.querySelectorAll('h1')

// colTitles.forEach((title, i) => {
//     title.style.fontSize = '24px'
//     if(i % 2 === 0){
//         title.style.backgroundColor = 'green'
//     }else{
//         title.style.backgroundColor ='red'
//     }
// })


// // Adding Style Font Size

// const fonTitle = document.querySelectorAll('h1')

// fonTitle.forEach((title,i) => {
//     title.style.fontsize = '24px'
//     if(i % 2 === 0){
//         title.style.fontSize = '20px'
//     }else{
//         title.style.fontSize = '30px'
//     }
// })


// ***************** Exercises ************************

// ********* Exercises Level-1 ******************

// 1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const firstPara = document.querySelector('p');

console.log(firstPara)

// 2.Get each of the the paragraph using document.querySelector('#id') and by their id

const firstP = document.querySelector('#first-title');
const secondP = document.querySelector('#second-title');
const thirdP = document.querySelector('#third-title');
const fourthP = document.querySelector('#fourth-title')

console.log(firstP)
console.log(secondP)
console.log(thirdP)

// 3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const allTag = document.querySelectorAll('p')

console.log('allTag',allTag)


// 4.Loop through the nodeList and get the text content of each paragraph

 
allTag.forEach(x => console.log(x.textContent))


// 5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph

allTag[3].textContent = 'Fourth Title'

// 6.Set id and class attribute for all the paragraphs using different attribute setting methods

// method -1 

allTag.forEach(x => x.classList.add('paragaraph'))


// method-2

firstP.setAttribute('class','first-class')
secondP.setAttribute('class','second-class')

// method-3

thirdP.className =('third-class')
fourthP.className =('fourth-class')


console.log(firstP)
console.log(secondP)
console.log(thirdP)
console.log(fourthP)


// **************** Exercise: Level 2 *****************

// 1.Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

allTag.forEach(para => {
    para.style.color ='red',
    para.style.backgroundColor = 'black',
    para.style.fontSize ='24px',
    para.style.fontFamily = 'Tangerine'
    para.style.fontWeight ='bold'
}) 


// 2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

allTag.forEach((title,i) => {
 if(i % 2 === 0){
    title.style.color = 'green'
 }else{
    title.style.color = 'red'
 }
})


// 3.Set text content, id and class to each paragraph

let a = 1 

for (const text of allTag){
    if(a == 1){
        text.textContent = `${a}st Paragraph`
    }
    else if(a == 2){
        text.textContent = `${a}nd Paragraph`
    } 
    else if(a == 3 ){
        text.textContent = `${a}rd Paragraph`
    }
    else{
        text.textContent = `${a}th Paragraph`
    }
    text.setAttribute('id',`${a}-Paragarph`)
    text.setAttribute('class','Paragraph')
    a++
}

console.log(allTag)

