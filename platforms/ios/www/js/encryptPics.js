/*

la codifica delle photo da uppare su dropbox funziona così:
prendo il base 64 sostituizo tutte le X con £, tutte le B con $
una volta fatta questa sostituzione prendo la prima occorrenza di £ e $
e gli sostituisco hookable_name questa è una stringa con prefisso "&&HT&&"
più una stringa ottenuta dalla username di dropbox scritta all'inverso

si chiama hookable_name proprio perchè il prefisso "&&HT&&" mi permette poi al momemonte
di decodificare, di "agganciare" questa stringa e fare il processo inverso di decodifica
così come descritto in decode

 */


function encode(base64string, username) {
    var coded = base64string.replace(/X/g, "£");
    coded = coded.replace(/B/g, "$");

    var rev_name = username.split("").reverse().join("");
    var hook_string = "&&HT&&";
    var hookable_name = rev_name + hook_string;

    coded = coded.replace("£", hookable_name);
    coded = coded.replace("$", hookable_name);

    return coded;
}


function decode(base64string, username) {

    var rev_name = username.split("").reverse().join("");
    var hook_string = "&&HT&&";
    var hookable_name = rev_name + hook_string;

    var decoded = coded.replace(hookable_name,"£");
    decoded = decoded.replace(hookable_name,"$");

    decoded = decoded.replace(/£/g, "X");
    decoded = decoded.replace(/\$/g, "B");


    return decoded;
}

