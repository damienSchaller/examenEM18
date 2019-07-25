$(document).ready(function() {
    generateRandomFavorit();
    function generateRandomFavorit() {
        let musicsArray = [];
        for (let key in localStorage) {
            const music = localStorage.getItem(key)
            if (music !== null) {
                musicsArray.push(JSON.parse(music));
            }
        }
        var musicRandom = musicsArray[Math.floor(Math.random()*musicsArray.length)];
        console.log(musicRandom);
        return musicRandom.val()
        console.log(musicRandom);
    }

    function traiterRandomFavorits () {
        var favorit = getFavoritFromStorage();
        let htmlContent = favorit.map(randomFavoritObject).join('');
        $('#favoritContainer').html(htmlContent);
    }
    // generate Random Favorit Object

    function randomFavoritObject(musicRandom) {
        return `<li id="${musicRandom.musicId}" class="media">
        <video controls="" name="media">
        <source class="musicPreview" src="${musicRandom.musicPreview}" type="audio/mpeg">
        </video>
        <img id="musicPicture" class="media-object albumPicture" src="${musicRandom.musicAlbumPicture}">
        <div class="infoMusic">
        <p class="musicTitle">${musicRandom.musicTitle}</p>
        <p class="musicDetail albumTitle">${musicRandom.musicAlbum}</p>
        <p class="musicDetail artistName">${musicRandom.musicArtist}</p>
        </div>
        <button class="deleteFavorit">supprimer des favoris</button>
        </li>`;
    }
});
