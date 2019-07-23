$(document).ready(function() {

    $('#searchForm').on('submit', function(evt) {
        evt.preventDefault();

        const recherche = $('#searchText').val();

        // call AJAX
        const requete = $.ajax({
            url : 'https://api.deezer.com/search?q=' + recherche + '&output=jsonp',
            dataType : 'jsonp'
        });

        requete.done(function(reponse) {
            const musiques = reponse.data;

            console.log({ musiques })
        });

        // use call AJAX

        function traiterResultats(musiques) {
            let htmlContent = musiques.map(generateMusicObject);
            $('#musicListContainer').html(htmlContent);
        }

        // add musicItem AJAX

        function generateMusicObject(musicItem) {
            return `<li class="media">
            <img class="media-object" src="` + musicItem.album.cover + `">
            <p class="">` + musicItem.title + `</p>
            <p class="">` + musicItem.album.title + `</p>
            <p class="">` + musicItem.artist.title + `</p>
            </li>`;
        }
    });

});
