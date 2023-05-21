var localState = {
    userChoice: '',
    win: 0,
}

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