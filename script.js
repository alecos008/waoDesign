let socialMediaBox = document.getElementById('socialMediaBox');
let socialMediaLogo = document.getElementById('socialMediaLogo');
let socialMediaHeading = document.getElementById('socialMediaHeading');
let socialMediaText = document.getElementById('socialMediaText');

const socialMediaLogoImg = socialMediaLogo.innerHTML;
const socialMediaHeadingText = socialMediaHeading.innerHTML.fontsize('5em');
const socialMediaInnerText = socialMediaText.innerHTML.fontsize('4em');

function mOver (obj) {
    obj.innerHTML = socialMediaInnerText;
    
}
function mOut (obj) {
    obj.innerHTML = socialMediaLogoImg + socialMediaHeadingText;
}