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
    var input =document.getElementsByTagName('input');
    var registerButton = document.getElementById("registerButton");
    var startButton = document.getElementById("startButton");
    var endButton = document.getElementById("endButton");
    registerButton.disabled = true;
    for(i=0;i<input.length;i++){
        input[i].disabled=true;
    }   
    startButton.disabled = false;
    endButton.disabled = false;



}

//Task 4
function PlayGame() {
    // window.location.href.match("playgame.html");
    //if(!is_generateWebsite){
      //  generateWebsite();
   // }

    for(i=0;true;i++){
        generateWebsite();
        var seed1 = Math.floor(Math.random()*9)+1;
        var seed2 = Math.floor(Math.random()*5)+1;
        var answer = seed1 * seed2;
        document.getElementById("numvalue1").value = seed1;
        document.getElementById("numvalue2").value = seed1;

        var is_correct = checkAnswer(answer); 
        if(is_correct){
            document.write(`Correct!<br>`);
        }else{
            document.write(`Wrong<br>`);
        }
        

    // document.write(`${seed1} X ${seed2}<br>
    //                 <input id="usrAns" type='number'>
    //                 <input
    // `).innerHtml;

    }
}

function generateWebsite(){

    is_generateWebsite = true;

    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Play</title>
    </head>
    <body>
    
        <div class="main">
            <form>
                <input id="numvalue1" type='number' disabled> X  <input type='number id="numvalue1" disabled'><br><br>
                <input type='number' id='usrAns'>

                <button onclick='PlayGame()'>Accept</button>
                <button onclick='PlayGame()'>Next</button>
    
            </form>
        </div>
    </body>
    </html>
    `).innerHtml 
}

function checkAnswer(answer){
    usrAns = document.getElementById('usrAns').value;

    if(usrAns = answer){
        return true;
    }else{
        return false;
    }
}