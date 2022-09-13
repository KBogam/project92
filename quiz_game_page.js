function addUser()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
   
    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);
   
    window.location="quiz_game_page.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name + ": ";
document.getElementById("player2_name").innerHTML=player2_name + ": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : " + player2_name;




function send()
{
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    document.getElementById("question").innerHTML=num1 + "x" + num2;
    actual_answer = parseInt(num1) * parseInt(num2);
}


question_turn = "player1";

answer_turn = "player2";

function check()
{
    answer = num1 * num2;
    userAnswer = document.getElementById("answer").value;

    if(userAnswer==answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML="Question Turn : " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML="Question Turn : " + player1_name;
    }


    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("answer_turn").innerHTML="Answer Turn : " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("answer_turn").innerHTML="Answer Turn : " + player1_name;
    }
 document.getElementById("number1").innerHTML="";
 document.getElementById("number2").innerHTML="";
}