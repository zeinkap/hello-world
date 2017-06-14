var userQuestion = 'Should I become a officer?';
var randomNumber = Math.floor(Math.random() * 7);
var eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Oh boy, emptiness is sadness';
    break;
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3: 
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict it now';
    break;
  case 5:
    eightBall = 'Don\'t count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Shake again';
    break;
                    }
console.log('You asked: ' + userQuestion);
console.log('Eight ball answers: ' + eightBall);
