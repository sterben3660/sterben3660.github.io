// 定義每段對話
const dialogues = [
    "玩法："+"\n玩家會先在美濃窯門口獲得邀請函（背面可填寫線索)",
    "（發表會開始前）",
    "朱博士\n你好，我是美濃窯的創辦人朱邦雄",
    "你\n你好，我是...",
    "(發表會開始)",
    "發表會主席\n感謝朱博士為我們提供這麼好的作品！",
    "(發表會結束)",
    "(人群中有個黑影快速的跑了過去)",
    "你\n誰啊？這麼急做什麼？"
];

let currentDialogueIndex = 0;

// 顯示逐字動畫效果
function typeWriter(text, elementId, callback) {
    const element = document.getElementById(elementId);
    let i = 0;
    const formattedText = text.replace(/\n/g, '<br>'); // 將換行符號替換為 <br>
    element.classList.remove('hidden');
    function type() {
        if (i < formattedText.length) {
            // 如果當前字符是 '<'，直接插入剩下的整個標籤，跳過標籤內的字符
            if (formattedText.charAt(i) === '<') {
                const endTagIndex = formattedText.indexOf('>', i);
                element.innerHTML += formattedText.substring(i, endTagIndex + 1);
                i = endTagIndex + 1;
            } else {
                element.innerHTML += formattedText.charAt(i);
                i++;
            }
            setTimeout(type, 50);
        } else if (callback) {
            callback();
        }
    }
    element.innerHTML = '';
    type();
}
// 顯示選項按鈕
function showOptions() {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // 清空之前的選項
    const options = [
        "OO企業代表",
        "前來觀摩的藝術家",
        "OOO民意代表",
        "OOO客語歌手"
    ];
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'btn-secondary', 'm-2');
        button.addEventListener('click', () => {
            handleOptionClick(index);
        });
        optionsContainer.appendChild(button);
    });
    optionsContainer.style.display = 'block'; // 顯示選項
}

// 處理選項點擊
function handleOptionClick(index) {
    console.log(`選擇了選項 ${index + 1}`);
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.style.display = 'none'; // 隱藏選項
    showNextDialogue(); // 顯示下一段對話
}

// 顯示下一段對話
function showNextDialogue() {
    if (currentDialogueIndex < dialogues.length) {
        typeWriter(dialogues[currentDialogueIndex], 'question-1', () => {
            currentDialogueIndex++;
            if (currentDialogueIndex === 4) { // 在 "你\n你好，我是..." 後顯示選項
                showOptions();
            } else {
                // 啟用繼續按鈕
                document.getElementById('continue-btn').disabled = false;
            }
        });
    } else {
        // 如果對話已經結束，隱藏繼續按鈕
        document.getElementById('continue-btn').style.display = 'none';
    }
}

// 初始化第一段對話
document.addEventListener('DOMContentLoaded', () => {
    // 初始化顯示第一段對話
    showNextDialogue();
    // 繼續按鈕的點擊事件
    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('continue-btn').disabled = true; // 點擊後禁用按鈕
        showNextDialogue(); // 顯示下一段對話
    });
});
