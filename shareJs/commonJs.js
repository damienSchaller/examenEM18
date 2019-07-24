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
            <source src="${musicItem.preview}" type="audio/mpeg">
            </video>
            <img class="media-object albumPicture" src="${musicItem.album.cover}">
            <div class="infoMusic">
            <p class="musicTitle">${musicItem.title}</p>
            <p class="musicDetail">${musicItem.album.title}</p>
            <p class="musicDetail">${musicItem.artist.name}</p>
            </div>
            <button class="addFavorit">Ajouter aux favoris</button>
            </li>`;
        }
    });

    // favorit song management
    const musicId = $('.media').attr('id');
    localStorage.content = musicId;
    $('.media').html(localStorage.content);
    console.log(musicId)

});
