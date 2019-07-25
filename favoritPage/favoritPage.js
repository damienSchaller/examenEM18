$(document).ready(function() {

    // show in page from localStorage
    traiterFavorits();

    // generate array from storage keys
    function getFavoritFromStorage() {
        let musicsArray = [];
        for (let key in localStorage) {
            const music = localStorage.getItem(key)
            if (music !== null) {
                musicsArray.push(JSON.parse(music));
            }
        }
        return musicsArray
    }

    // add favorit in html

    function traiterFavorits () {
        var favorit = getFavoritFromStorage();
        let htmlContent = favorit.map(generateFavoritObject).join('');
        $('#favoritContainer').html(htmlContent);
    }

    // generate Favorit Object

    function generateFavoritObject(favoritItem) {
        return `<li id="${favoritItem.musicId}" class="media">
        <video controls="" name="media">
        <source class="musicPreview" src="${favoritItem.musicPreview}" type="audio/mpeg">
        </video>
        <img id="musicPicture" class="media-object albumPicture" src="${favoritItem.musicAlbumPicture}">
        <div class="infoMusic">
        <p class="musicTitle">${favoritItem.musicTitle}</p>
        <p class="musicDetail albumTitle">${favoritItem.musicAlbum}</p>
        <p class="musicDetail artistName">${favoritItem.musicArtist}</p>
        </div>
        <button class="deleteFavorit">supprimer des favoris</button>
        </li>`;
    }

    // delete Favorit Object

    $('#favoritContainer').on( 'click', '.deleteFavorit', function() {
        const key = $(this).parent('li').attr('id');
        localStorage.removeItem(key);
        const elementId = $(this).parent('li').remove('li');
        elementId.remove( 'id' )
        $('.addFavorit').removeClass('searchButton').addClass('deleteFavorit').text('supprimer des favoris')
    });

});
