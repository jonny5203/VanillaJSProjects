var localState = {
    userChoice: '',
    wins: 0,
    losts: 0
}

// Init firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
print(db);

function buttonClick(imageTag){
    switch(imageTag){
        case 'rock':
            changeImageURL('main-image', 'images/rock.png');
            break;
        case 'paper':
            changeImageURL('main-image', 'images/paper.png');
            break;
        case 'scissor':
            changeImageURL('main-image', 'images/scissor.png');
            break;
    }
}

function changeImageURL(idTag, imgUrl){
    document.getElementById(idTag).src = imgUrl;
}

function restart(){
    document.getElementById('main-image').src = 'empty/rock.png';
}

function displayWinOrLoose(){
    switch(win){
        case 0:
            changeText('win-text', '');
            break;
        case 1:
            changeText('win-text', 'You Win');
            break;
        case 2:
            changeText('win-text', 'You Loose');
            break;
        case 3:
            changeText('win-text', 'Draw');
            break;
    }
}

function changeText(idTag, text){
    document.getElementById(idTag).innerHTML = text;
}

function updateWinLost(win){
    if(win == 1){
        localState.wins++;
    }else if(win == 2){
        localState.losts++;
    }
}

function changeWinLostText(){
    changeText('win-lost-text', `Wins: ${localState.wins} Losts: ${localState.losts}`);
}

// create a session with firebase
function createSession(){
    let session = {
        id: '',
        players: {
            player1: {
                id: '',
                name: '',
                choice: '',
                sessionWinRate: 0,
                sessionLosts: 0,
            },
            player2: {
                id: '',
                name: '',
                choice: '',
                sessionWins: 0,
                sessionLosts: 0,
            }
        },
        currentWinner: ''
    }
}

