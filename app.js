const apiurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const button = document.getElementById("search-btn");
const input =document.getElementById("input");
const noun = document.getElementById("noun");
const eg =document.getElementById("eg")
const verb = document.getElementById("verb");
const verbeg = document.getElementById("verbeg");
const inputWord =document.getElementById("input-word")


button.addEventListener("click",()=>{
    searchWord(input.value)
    input.value=""
})
async function searchWord(word){
    const response = await fetch(apiurl + word )
    const data=await response.json()
    console.log(data);
    inputWord.innerHTML = data[0].word;
    noun.innerHTML= "Noun : "+data[0].meanings[0].definitions[0].definition;
    eg.innerHTML = "Example : " +data[0].meanings[0].definitions[0].example;
    verb.innerHTML = "Verb : " + data[0].meanings[1].definitions[0].definition;
    verbeg.innerHTML = "Example :" + data[0].meanings[1].definitions[0].example;
}







