let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    //default value
    /*
    score = null then:
    !score -> true
    score === null -> true (it can also written like that using falsy value condition)
    */

    /* using default operator(||) : if the left side is falsy(null) it uses the right side as default value.
        if (!score) {
          score = {
            wins: 0,
            losses: 0,
            ties: 0
          };
        }
    */


    function playGame(playerMove) {
      const computerMove = pickcomputermove();

      let result = '';

      if (playerMove === 'Scissors') {

        if (computerMove === 'Scissors') {
          result = 'tie';
        } else if (computerMove === 'Rock') {
          result = 'you lose!';
        } else if (computerMove === 'Paper') {
          result = 'you won';
        }

      } else if (playerMove === 'Paper') {

        if (computerMove === 'Paper') {
          result = 'tie';
        } else if (computerMove === 'Scissors') {
          result = 'you lose!';
        } else if (computerMove === 'Rock') {
          result = 'you won';
        }

      } else if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
          result = 'tie';
        } else if (computerMove === 'Paper') {
          result = 'you lose!';
        } else if (computerMove === 'Scissors') {
          result = 'you won';
        }
      }

      if (result === 'you won') {
        score.wins += 1;
      } else if (result === 'you lose!') {
        score.losses += 1;
      } else if (result === 'tie') {
        score.ties += 1;
      }

      /*
      localstorage (it store the value locally so that after refreshing the windows/tab values doesn't reset)
      -> it only support STRINGS
      */

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = `${result}`;

      document.querySelector('.js-move').innerHTML = `(you)
    <img src="${playerMove}-emoji.png" class="move-icon">...  
    <img src="${computerMove}-emoji.png" class="move-icon"> (computer)`;

      /*(no need)
      alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
*/

    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML =
        `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }

    function pickcomputermove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
      } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'Paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
      }

      return computerMove;
    }