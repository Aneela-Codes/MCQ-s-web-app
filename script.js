let questions=[
    {
        id : 1,
        question:  "What is the full form of RAM",
        answer : "Random Access Memory",
        option: [
            "Random Access Memory",
            "Running Actual Memory",
            "Run Accept Memory",
            "None Of these"
        ]
    },

    {
        id : 2,
        question : "What is full form of CSS",
        answer : "Cascading Style Sheets",
        option:[
            "Cascading Style Sheets",
            "Classy Style Sheets",
            "Combined style sheets",
            "None Of these"
        ]
    },

    {
        id : 3,
        question : "What is DOM",
        answer : "Document Object Model",
        option:[
            "Dance On Motor",
            "Data object model",
            "Document Object Model",
            "None Of these"
        ]
    },
    {
        id : 4,
        question : "Sum of 2 + 2 = ?",
        answer : "4",
        option:[
            "3",
            "4",
            "0",
            "None Of these"
        ]
    },
]
// -----------------------------------------------------------------
let counter = 0;
let points = 0;

window.onload = function(){
    show(0);
}

const startGame=(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    // console.log(name)
    sessionStorage.setItem('Player', name);
    location.href = "game.html";
}

const next = () => {
    let userAnswer = document.querySelector('li.option.active').innerText;
    if(userAnswer == questions[counter].answer){
    points +=10;
    sessionStorage.setItem('points', points);
    console.log(points)
   }
    if(counter == questions.length -1){
        sessionStorage.setItem('time', `${minutes} and ${seconds} seconds` )
        clearInterval(endInterval)
        location.href = "end.html";
        return;
    }

    counter++
    show(counter)
}
function show(count){
    let queries = document.getElementById("questions");
    queries.innerHTML= ` <h2>${questions[count].question}</h2>
    <li class="option"> ${questions[count].option[0]}</li>
    <li class="option">${questions[count].option[1]} </li>
     <li class="option">${ questions[count].option[2]} </li>
     <li class="option">${questions[count].option[3]}</li>`
    toggleActive()
}
// function show(count){
//     questions.map(function (eachQuestion){
//         ` <h2>${eachQuestion}</h2>
//      <li class="option"> ${eachQuestion.option[0]}</li>
//      <li class="option">${eachQuestion.option[1]} </li>
//      <li class="option">${eachQuestion.option[2]} </li>
//      <li class="option">${eachQuestion.option[3]}</li>`

//     })
// }

const toggleActive=()=>{
    let options = document.querySelectorAll('li.option');
    for(let i=0; i<options.length; i++){
        options[i].onclick = function(){
            for(let j=0; j<options.length; j++){
               if( options[j].classList.contains('active')){
                   options[j].classList.remove('active');
               }
            }
            options[i].classList.add('active');
        }
    }

}
