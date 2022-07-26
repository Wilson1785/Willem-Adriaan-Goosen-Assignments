function playRound(){
    for (let i = 0; i < 5; i++){
        var playerSelection = window.prompt("Do you choose rock, paper or scissors ?");
    
        var computerSelection = Math.random();
    
        var computerSelection = computerSelection < 0.34 ? "rock" : ( computerSelection > 0.67 ? "scissors" : "paper" ) ;
    
        var mess = { 
            rock : { scissors : 'You Win!, Rock smashes scissors!', paper : 'You lose!, Paper covers rock!'} ,
            paper : { rock : 'You Win!, Paper covers rock!', scissors : 'You lose!, Scissors cut paper!' },
            scissors : { paper : 'You Win!, Scissors cut paper!', rock : 'You lose!, Rock smashes scissors!' }
        }
    
        if ( computerSelection === playerSelection)
            result = "It's a tie!" ; 
         
        else if ( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" )
            result = "Invalid choice! Choose from rock, paper, or scissors" ;
    
        else
            result = mess[playerSelection][computerSelection] ;
    
        console.log( 'you chose ' + playerSelection + ' and computer chose ' + computerSelection + ' ( ' + result + ' ) ') ;
    }
}
