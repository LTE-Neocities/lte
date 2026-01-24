
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
    
}

async function initial_load() {

    let data = await getJson("./text.json");
    
    let total_char_length = 0;

    // collection and placement of the LTE text
                total_char_length += entry_text.length;


    document.querySelector("#character-count").innerHTML = total_char_length;

}

initial_load();