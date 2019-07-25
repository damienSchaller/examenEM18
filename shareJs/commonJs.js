$(document).ready(function() {

    // Form summit
    $('form#searchForm').on('submit', function(evt) {
        evt.preventDefault();

        const recherche = $('#searchText').val();
        const filter = $('#filter').val();

        // call AJAX

        const requete = $.ajax({
            url: 'https://api.deezer.com/search?q=' + recherche + '&output=jsonp&order=' + filter,
            dataType: 'jsonp'
        });
        requete.done(traiterResultats);

        // use call AJAX

        function traiterResultats({data : musiques}) {
            let htmlContent = musiques.map(generateMusicObject).join('');
            $('#musicListContainer').html(htmlContent);
        }

        // add musicItem AJAX

        function generateMusicObject(musicItem) {
            return `<li id="${musicItem.id}" class="media">
            <video controls="" name="media">
            <source class="musicPreview" src="${musicItem.preview}" type="audio/mpeg">
            </video>
            <img id="musicPicture" class="media-object albumPicture" src="${musicItem.album.cover}">
            <div class="infoMusic">
            <p class="musicTitle">${musicItem.title}</p>
            <p class="musicDetail albumTitle">${musicItem.album.title}</p>
            <p class="musicDetail artistName">${musicItem.artist.name}</p>
            </div>
            <button class="addFavorit">Ajouter aux favoris</button>
            </li>`;
        }
    });

    // favorit song management

    // save in localStorage
    $('#musicListContainer').on( 'click', '.addFavorit', function() {
        var title = $(this).parent('li').find('.musicTitle').text();
        var album = $(this).parent('li').find('.albumTitle').text();
        var artist = $(this).parent('li').find('.artistName').text();
        var preview = $(this).parent('li').find('source').attr('src');
        var albumPicture= $(this).parent('li').find('img').attr('src');
        var idObject= $(this).parent('li').attr('id');

        var musicObjet  = {
            "musicTitle" : title,
            "musicAlbum" : album,
            "musicArtist" : artist,
            "musicPreview" : preview,
            "musicAlbumPicture" : albumPicture,
            "musicId" : idObject,
        };

        localStorage.setItem(idObject, JSON.stringify(musicObjet));
    });
});
