let puppyImageEle= document.getElementById("puppyImage");
let likeIconEle = document.getElementById("likeIcon");
let likeButtonEle = document.getElementById("likeButton");
let isImgLike = false;

function onClickLikeButton(){
    if(isImgLike === false){
        puppyImageEle.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEle.style.color="#0967d2";
        likeButtonEle.style.backgroundColor="#0967d2";
        likeButtonEle.style.color="#ffffff";
        isImgLike = true;

    } else{
        puppyImageEle.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconEle.style.color="#cbd2d9";
        likeButtonEle.style.backgroundColor="#cbd2d9";
        likeButtonEle.style.color="#9aa5b1";
        isImgLike = false;
    }
}