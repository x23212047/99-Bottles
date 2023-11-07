document.addEventListener("DOMContentLoaded", function () {
    const showLyricsButton = document.getElementById("showLyricsButton");
    const lyricsElement = document.getElementById("lyrics");

    //generate the lyrics
    function generateLyrics(){
        let lyrics = "";
        for(leti=99;i>=0;i--){
            if(i>1){
                lyrics+=`${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
                lyrics+=`Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n\n`;
            }else if(i===1){
                lyrics+=`1 bottle of beer on the wall, 1 bottle of beer.\n`;
                lyrics+=`Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
            }else{
                lyrics+=`No more bottles of beer on the wall, no more bottles of beer.\n`;
                lyrics+=`Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
            }
        }
        return lyrics;
    }

    //display the lyrics when the button is clicked
    function showLyrics(){
        lyricsElement.style.display="block";
        lyricsElement.textContent=generateLyrics();
        showLyricsButton.style.display="none";
    }

    //add a event listener to the button
    showLyricsButton.addEventListener("click", showLyrics);
});
