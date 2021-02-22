var text_box = document.getElementById("id-search-box");
const my_form = document.getElementById("id-form");
var search;

my_form.addEventListener("submit", googleSearch);

function googleSearch(event_search)
{  
        event_search.preventDefault();
        search = text_box.value;
        window.open("http://www.google.com/search?q="+search);
}