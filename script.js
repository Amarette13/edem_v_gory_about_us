let accItem = document.getElementsByClassName('questItembox');
let accHD = document.getElementsByClassName('quest_box');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'questItembox close';
    }
    if (itemClass == 'questItembox close') {
        this.parentNode.className = 'questItembox open';
    }
}