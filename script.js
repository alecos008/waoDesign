let boxes = document.getElementsByClassName('box');

let designBox = boxes[0];
let designTextElement = designBox.querySelector('p')
let designHeadingElement = designBox.querySelector('h4');

//got UX/UI Web Design inner p text
const designInnerText = designTextElement.innerHTML;
//got UX/UI Web design inner h4 text
const designHeadingText = designHeadingElement.innerHTML;

let marketingBox = boxes[1];
let marketingTextElement = marketingBox.querySelector('p');
let marketingHeadingElement =  marketingBox.querySelector('h4');

//got SEO and Marketing inner p text
const marketingInnerText = marketingTextElement.innerHTML;
//got SEO and Marketing inner h4 text
const marketingHeadingText = marketingHeadingElement.innerHTML;

let mediaBox = boxes[2];
let mediaTextElement = mediaBox.querySelector('p');
let mediaHeadingElement =  mediaBox.querySelector('h4');

//got SMM inner p text
const mediaInnerText = mediaTextElement.innerHTML;
//got SMM inner h4 text
const mediaHeadingText = mediaHeadingElement.innerHTML;


const mediaBlock = mediaHeadingText + mediaInnerText;


function mOver(obj) {
    if (obj.id === "socialMediaBox"){
    obj.innerHTML = mediaHeadingText.fontsize('5em') + mediaInnerText.fontsize('3em');
      } else if (obj.id === "marketingBox") {
        obj.innerHTML = marketingHeadingText.fontsize('5em') + marketingInnerText.fontsize('3em');
      } else if (obj.id === "designBox") {
        obj.innerHTML = designHeadingText.fontsize('5em') + designInnerText.fontsize('3em');
      }
  };
  
  function mOut(obj) {
     if (obj.id === "socialMediaBox"){
    obj.innerHTML = mediaHeadingText.fontsize('5em');
      } else if (obj.id === "marketingBox") {
        obj.innerHTML = marketingHeadingText.fontsize('5em');
      } else if (obj.id === "designBox") {
        obj.innerHTML = designHeadingText.fontsize('5em');
      }
  };