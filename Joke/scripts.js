/*

**************** JOKE GENERATOR DOCUMENTATION ***************

EXAMPLE OF THE URL:
URL: 
https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&format=txt&type=twopart&amount=2&idRange=0-1367&contains=dad
...where X can be txt, json, xml or yaml

These are all the available categories: 

************ Any, Misc, Programming, Dark, Pun, Spooky **********

To set the category you want, you need to add it to the URL path, just after the "/joke" endpoint, like this: https://v2.jokeapi.dev/joke/Programming
§ Category Aliases:
Since version 2.3.0, there are now category aliases. You can use these as a shorter or just different version of the normal set of categories.
Internally, these aliases will be resolved to one of the normal set of categories and your request (including the API's response) will be treated as if you used the resolved value.

The following is a list of aliases and what they will be resolved to internally:
**************** Alias	Resolved Category ******************
                Miscellaneous	Misc
                Coding	Programming
                Development	Programming
                Halloween	Spooky

Blacklist Flags (or just "Flags") are a more fine layer of filtering.
Multiple flags can be set on each joke and they tell you something about the offensiveness of each joke.
You can tell JokeAPI to not give you jokes that have the specified flags by using the ?blacklistFlags URL parameter.

These are all the available flags: nsfw, religious, political, racist, sexist, explicit
§ (Response-) Formats:
Response Formats (or just "Formats") are a way to get your data in a different file format.
Maybe your environment or language doesn't support JSON natively. In that case, JokeAPI is able to convert the JSON-formatted joke to a different format for you.
You can tell JokeAPI which file format to respond with by using the ?format URL parameter.

These are all the available formats: json, xml, yaml, txt
§ Joke Type:
Each joke comes with one of two types: single or twopart.
If a joke is of type "twopart", it has a setup string and a delivery string, which are both part of the joke.
They are separated because you might want to present the users the delivery after a timeout or in a different section of the UI.
A joke of type "single" only has a single string, which is the entire joke.
If you only want one type of joke, you can use the ?type URL parameter.

These are the available types: single, twopart
§ Search String:
If the search string filter is used, only jokes that contain the specified string will be returned.
You can specify this search string by using the ?contains URL parameter.
IMPORTANT: If the value of this parameter contains special characters, it needs to be percent-encoded according to the URI standard (MDN Reference), otherwise you might get an error or a wrong response.
§ ID Range:
If this filter is used, you will only get jokes that are within the provided range of IDs.
You don't necessarily need to provide an ID range though, a single ID will work just fine as well.
Example: an ID range of 0-9 will mean you will only get one of the first 10 jokes, while an ID range of 5 will mean you will only get the 6th joke.
You can set the ID range by using the ?idRange URL parameter.
As there are currently 1368 jokes, the ID range can be anywhere in the range of 0 to 1367
This range varies from language to language though, so I recommend taking a look at the /info endpoint, which contains all possible ID ranges.
§ Joke Amount:https://v2.jokeapi.dev/joke/Any?idRange=0-55
Using the above URL will make JokeAPI only serve you jokes that are inside the ID range of 0 to 55.

Example 2 (click to view)
URL: https://v2.jokeapi.dev/joke/Any?idRange=33
Using the above URL will make JokeAPI only serve you the joke with the ID 33 (provided there are no other filters that are blacklisting that joke).

This filter allows you to set a certain amount of jokes to receive in a single call to the "Get Joke" endpoint.
You can set it using the ?amount URL parameter.
Setting the filter to an invalid number will result in the API defaulting to serving a single joke.
Setting it to a number larger than 10 will make JokeAPI default to the maximum (10).

The Safe Mode can be enabled by adding the value-less URL parameter safe-mode to the URL.

Example 1 (click to view)
URL: https://v2.jokeapi.dev/joke/Any?safe-mode
Using the above URL will make sure you won't get any unsafe jokes.

*/
let categories = { 
    Miscellaneous:false,
    Pun: false,
    Dark: false,
    Programming:false,
    Spooky:false,
};

// function userCategoryChoices(categories) {

// }

//let categoriesList = userCategoryChoices(categories);

// let Any = true;
// categories.forEach((category) => {
//     if(categories[category] === true) {
//         Any = false;
//     }
// });

let choiceButtons = Array.from(document.getElementsByClassName("choice-button-unchecked"));
choiceButtons.push(document.getElementById("any-button"));

choiceButtons.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(btn.classList.contains("choice-button-unchecked")) {
            btn.classList.toggle("choice-button-unchecked");
        }
        
    });
});
// let any = Any? "Any":"";
// let response = fetch("https://v2.jokeapi.dev/joke/"+any+categoriesList+"?"+pars)