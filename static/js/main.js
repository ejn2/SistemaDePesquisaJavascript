$(document).ready(() => {

    api.map(({ title }) => {

        const item = $("<div />"); 
        item.attr({ class: "item" });
        item.text(title);
        $(".resp").append(item);

    });

});


//fun de pesquisa
function onSearch(key) {
    const re = new RegExp(`^${key}`,  'i');
    var state = []; //armazena o resultado da pesquisa.

    api.map(({ title }) => {

        if(re.test(title)){
            const item = $("<div />");  //criando um tag html
            item.attr({ class: "item" }); //adicionando uma classe para a nova tag
            item.text(title);

            state.push(title);
            $(".resp").append(item);

        }

    });

   if(!state.length > 0) { $(".resp").text(`Not found '${key}'`); }

}


$("#form").on("submit", (event) => {
    event.preventDefault();
    $(".resp").html("");

    const search = $("#search").val();
    onSearch(search);

});