//  clear storages 
function clearStorage(){
    sessionStorage.clear();
    localStorage.clear();
}
//   switch to result page 
function result(){
    var locate = window.location.href;
    window.location.assign("result.html");
}
// switch  to admin page 
function admin(){
    var locate = window.location.href;
    window.location.assign("admin.html");
}
//  switch to welcome page 
function students(){
    var locate = window.location.href;
    window.location.assign("welcome.html");
}
// switch to back page 
function back(){
    var locate = window.location.href;
    window.location.assign('index.html');
}
// switch to student page 
function students_page(){
    var locate = window.location.href;
    window.location.assign('student.html')
}
//  switch to questions page 
function Questions_page(){
    var locate = window.location.href;
    window.location.assign('questions.html')
}

//  check admin username and password 
function check(){
    //   admin input values 
    var admin_name = document.getElementById("admin_name").value ;
    var admin_pass = document.getElementById("admin_password").value ;
    // check for both 
    if(admin_name === "" && admin_pass === ""){
        alert ("write Something ....")
    }
    else if(admin_name === "arham" && admin_pass === "arham@123"){
        Questions_page()
    }
    else{
        alert("Wrong Username and Password")
    }
    // clear admin input 
    document.getElementById("admin_name").value = "";
    document.getElementById("admin_password").value = "";
}
    // admin input question 
var arham;
function add_Question(){
    // values get from admin input 
    var que = document.getElementById('question').value;
    var opt1 = document.getElementById('option1').value;
    var opt2 = document.getElementById('option2').value;
    var opt3 = document.getElementById('option3').value;
    var opt4 = document.getElementById('option4').value;
    var correct = document.getElementById('right-answer').value;
    var opts = [];
    // make array of all the options 
    opts.push(opt1,opt2,opt3,opt4);
    //   construct object from admin input values
    if(que,opt1,opt2,opt3,opt4 !== ""){
        function Questions_Obj(que,correct,opts){
            this.question = que
            this.correct = correct
            this.options =  opts
        }
    }
    else{
        alert("Write Question and all Options.....");
    } 
    // push object to variable arham 
    arham = new Questions_Obj(que,correct,opts);
    // clear admin input box 
    document.getElementById('question').value = "";
    document.getElementById('option1').value = "";
    document.getElementById('option2').value = "";
    document.getElementById('option3').value = "";
    document.getElementById('option4').value = "";
    document.getElementById('right-answer').value = "";
    // now call addArray function 
    addArray();
}
var arrray;
function addArray(){
    arrray = [{
        question: "Who is the founder Of Pakistan??",
        correct: "Muhammad Ali Jinnah",
        options: [
            "Muhammad Ali Jinnah",
            "Liaquat Ali Khan",
            "Fatima Jinnah",
            "Allama Iqbal",
        ]
    },{
        question: "Who is the Current Prime Minister Of Pakistan?",
        correct: "Imran Khan",
        options: [
            "Altaf Bhai",
            "Bhutto",
            "Nawaz Shareef",
            "Imran Khan",
        ]
    },{
        question: "Who is the Richest Man in the World??",
        correct: "Jeff Bazos",
        options: [
            "Bill Gates",
            "Mark Zukerberg",
            "Jeff Bazos",
            "Warren Buffett",
        ]
    },{
        question: "A country which has no tree??",
        correct: "Qatar",
        options: [
            "Qatar",
            "Norway",
            "United State of America",
            "South Africa",
        ]
    },{
        question: "_______ is known as leap day or leap year day??",
        correct: "Feb 29",
        options: [
            "Feb 29",
            "Feb 28",
            "March 01",
            "Feb 01",
        ]
    },{
        question: "Q. Who was the inventor of Ctrl+C (copy), Ctrl+V (Paste ) and Ctrl+X (Cut)??",
        correct: "Larry Tesler",
        options: [
            "Bill Gates",
            "Larry Tesler",
            "Christopher Latham Sholes",
            "David Sundstrand",
        ]
    },{
        question: "The first country to give a robot citizenship??",
        correct: "Saudi Arabia",
        options: [
            "UAE",
            "Saudi Arabia",
            "Qatar",
            "USA",
        ]
    },{
        question: "Where is the World’s longest sea bridge??",
        correct: "China",
        options: [
            "Japan",
            "Russia",
            "China",
            "South Africa",
        ]
    },{
        question: "According to the constitution of Pakistan,the most powerful person in Pakistan is??",
        correct: "Prime Minister",
        options: [
            "Prime Minister",
            "President",
            "Army Cheif",
            "Cheif Justice",
        ]
    }];
    // push object created from admin input to array 
    arrray.push(arham);
    // now save this array in localStorage (name: array)
    localStorage.setItem('array',JSON.stringify(arrray));
}

// now get values of localStorage in variable to show on students 
var questions = JSON.parse(localStorage.getItem('array'));

// Question counter 
var question_counter = -1;
var check_result = -2;
function count(){
    question_counter++;
    check_result++;
    add_score(check_result);
    show(question_counter);
}
// questions and options counter (add questions and options to student page)
function show(e){
    var que = document.getElementById('Question');
    que.innerHTML = `<h2 style="color: darkgreen;"> ${questions[e].question} </h2>
    <ul class="list"> 
    <li class="option">${questions[e].options[0]}</li>
    <li class="option">${questions[e].options[1]}</li>
    <li class="option">${questions[e].options[2]}</li>
    <li class="option">${questions[e].options[3]}</li>
    </ul>`
    Active();
}

// target actice class property and remove when change 
function Active(){
    let active_li = document.querySelectorAll('li.option');
    for(let i = 0 ; i  < active_li.length ; i++){
        active_li[i].onclick = function(){
            for(let j = 0; j < active_li.length ; j++){
                if(active_li[j].classList.contains("active")){
                    active_li[j].classList.remove("active")
                }
            }
            active_li[i].classList.add('active');
        }
    }
}

// now get value of active class and match with question's correct answers (object)
var score = 0;
function add_score(e){
 var count_result = document.getElementsByClassName('active');
 for(let i = 0; i < count_result.length ; i++){
 if(count_result[i].firstChild.nodeValue === questions[e].correct){
     score += 10;
    //  save score on localStorage
     localStorage.setItem('score',score);
    }
}
}
 
// get username from welcome page and save in local storage 
function user_name(){
    var user_name = document.getElementById('user_name').value;
    localStorage.setItem('userName',user_name);
}

// now show the result to user on result page 
function result_show(){
    // get score value from localStorage
    var get_value = localStorage.getItem('userName');
    // get value of user_name from result page to show on result page 
    var show_username = document.getElementById('username');
    var push_username = `"Thank you for Attempting Our Quiz ${get_value}"`;
    // now push full name with thank you ;)
    show_username.innerHTML = push_username;
    var value = localStorage.getItem('score');
    // get value of score and check each condition according to remarks
    var text_value  = "";
    if(value >= 80 && value <= 100){
        text_value = "Congratulations!.. Keep Going"
    } 
    else if(value >= 60 && value <= 80){
        text_value = "Much Better!!.. Keep Going"
    }   
    else if(value >= 40 && value <= 60){
        text_value = "Need To Work Hard...!!"
    }   
    else if(value >= 20  && value <= 40){
        text_value = "Don't Waste your time ...."
    }   
    else if(value >= 10 && value <= 20){
        text_value = "Try Again Later ..."
    }
    // show results on given location on result page 
    var show_score = `Your Score is ${value}`
    var get_score = document.getElementById('user-score');
    get_score.innerHTML = show_score;
    // push remarks on behalf of given score 
    var push_text = document.getElementById('remarks');
    push_text.innerHTML = text_value;
    
}