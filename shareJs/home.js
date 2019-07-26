$(document).ready(function() {
    function generateRandomFavorit() {
        let musicsArray = [];
        for (let key in localStorage) {
            const music = localStorage.getItem(key)
            if (music !== null) {
                musicsArray.push(JSON.parse(music));
            }
        }
        var musicRandom = musicsArray[Math.floor(Math.random()*musicsArray.length)];
        return musicRandom
    }

    function traiterRandomFavorits () {
        var randomElement = generateRandomFavorit();
        let htmlContent = renderFavoritObject(randomElement);
        $('#randomFavoritContainer').html(htmlContent);
    }
    traiterRandomFavorits ()
    // generate Random Favorit Object

    function renderFavoritObject(randomElement) {
        return `<li id="${randomElement.musicId}" class="media">
        <video controls="" name="media">
        <source class="musicPreview" src="${randomElement.musicPreview}" type="audio/mpeg">
        </video>
        <img class="media-object albumPicture" src="${randomElement.musicAlbumPicture}" alt="${randomElement.musicTitle}" title="${randomElement.musicTitle}">
        <div class="infoMusic infoMusicRandom">
        <p class="musicTitle">${randomElement.musicTitle}</p>
        <p class="musicDetail albumTitle">${randomElement.musicAlbum}</p>
        <p class="musicDetail artistName">${randomElement.musicArtist}</p>
        </div>
        </li>`;
    }
});
