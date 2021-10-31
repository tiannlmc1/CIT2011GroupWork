var PlayersData;
var is_generateWebsite = false;
var correctAns;


// Task 2
function Register(){

        //Validate Inputs ar
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    age = calculateAge();
    email = document.getElementById("email").value;
    gender =  document.getElementById('gender').value;

    PlayersData = [fName,lName,age,gender,email];
    // Apart Task 3
    disableInput();

}

function disableModal(){
    var endBtn = document.getElementById('modalBg');
    endBtn.classList.remove('activateModal');
}

// Apart of Task 2
function calculateAge(){
    dob = document.getElementById('dob').value;
    var birthDate = new Date(dob);
    var currentDate = new Date();
    age = (currentDate.getFullYear() - birthDate.getFullYear());
    return age;
}

// Apart Task 3
function disableInput(){
    var input =document.getElementsByName('fform');
    var startButton = document.getElementById("startBtn");
    var usrAns = document.getElementById('usrAns');

    input.disabled = true;

    for(i=0;i<input.length;i++){
        input[i].disabled=true;
    }   
    startButton.disabled = false;
}

//Task 4
function PlayGame() {

    document.getElementById('modalBg').className += ' activateModal';

    var seed1 = Math.floor(Math.random()*9)+1;
    var seed2 = Math.floor(Math.random()*5)+1;
    var answer = seed1 * seed2;

    document.getElementById("numvalue1").value = seed1;
    document.getElementById("numvalue2").value = seed2;

    var is_correct = checkAnswer(answer); 

}



function checkAnswer(answer){
    usrAns = document.getElementById('usrAns').value;
    if(usrAns = answer){
        return true;
    }else{
        return false;
    }
}
