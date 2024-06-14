// 定義每段對話
const dialogues = [
    "歡迎使用本AR導覽系統！透過掃描美濃窯園區內的圖片，您將能夠在手機畫面中即時呈現相關歷史、藝術及文化資訊，讓您更深入了解美濃窯的精髓。希望您能享受這次別具一格的導覽之旅。"
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

