'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivded = document.getElementById('result-area');
const tweetDivded = document.getElementById('tweet-area');

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

userNameInput.onkeydown = (event) => {
    if (event.key == 'Enter') {
        assessmentButton.onclick();
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;

    if (userName.length == 0) {
        return;
    }

    removeAllChildren(resultDivded);
    removeAllChildren(tweetDivded);

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivded.appendChild(header);
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivded.appendChild(paragraph);
/*
    const tweet = document.createElement('p')
    tweet.innerText = 'Test';
    tweetDivded.appendChild(tweet);
    tweetDivded.appendChild(tweet);

    <a href="https://twitter.com/intent/tweet?button_hashtag=Test&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="test" data-show-count="false">Tweet #Test</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
*/

    const anchor = document.createElement('a');
    const hrefValue = "https://twitter.com/intent/tweet?button_hashtag=" + encodeURIComponent('ツイートテスト') + "&ref_src=twsrc%5Etfw";

    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    const script = document.createElement('script');
    script.setAttribute('src', "https://platform.twitter.com/widgets.js")
    tweetDivded.appendChild(script);
    anchor.innerText = 'Tweet #Test';

    tweetDivded.appendChild(anchor);
    
    
}


const answers = [
    '{userName}はミニーと仲良し！',
    '{userName}は白雪姫と仲良し！',
    '{userName}はシンデレラと仲良し！',
    '{userName}はオーロラと仲良し！',
    '{userName}はアリエルと仲良し！',
    '{userName}はベルと仲良し！',
    '{userName}はジャスミンと仲良し！',
    '{userName}はポカホンタスと仲良し！',
    '{userName}はムーランと仲良し！',
    '{userName}はティアナと仲良し！',
    '{userName}はラプンツェルと仲良し！',
    '{userName}はメリダと仲良し！',
    '{userName}はエルサと仲良し！',
    '{userName}はアナと仲良し！',
    '{userName}はモアナと仲良し！',
    '{userName}はヴァネロペと仲良し！'
];



function assessment(userName) {
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode += userName.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    console.log(userName);
    console.log(result);

    return result;
}

console.assert(
    assessment('aaa') === assessment('aaa'),
    'Test NG'
);




