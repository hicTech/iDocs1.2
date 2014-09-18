function tronca(cosa, quanto) {
    if (cosa.length > quanto) {
        return cosa.substr(0, quanto);
    }
    else return cosa;
}

function eliminaElementoHtml(e) {
    if (!e) return false;
    var nodo_da_eliminare = e;
    var padre = e.parentNode;
    padre.removeChild(nodo_da_eliminare);
}


// prende la parte prima della @ elimina i caratteri 0987654321!#$%&'*+-/=?^_`{|}~
// e se ci sono . restituisce il camel case.
// esempio:    marco.allori@gmail.com   ===> marcoAllori
function fromEmailToFolderName(email) {
    var local_part = email.substr(0, email.indexOf("@"));
    var local_cleared = local_part.replace(/0987654321/g, "").replace(/!#\$/g, "").replace(/\%&'/g, "").replace(/\*\+\-/g, "").replace(/=/g, "").replace(/\^/g, "").replace(/\//g, "").replace(/\?/g, "").replace(/\_\`\{/g, "").replace(/\}/g, "").replace(/\|\~/g, "").replace(/\./g, "-");


    function dashToCamel(str) {
        return str.replace(/\W+(.)/g, function (x, chr) {
            return chr.toUpperCase();
        })
    }


    return dashToCamel(local_cleared);
}


function getIDeviceNameFromModel(model) {
    var name = "noName";
    switch (model) {

        case "iPad1,1":
            name = "iPad1G"
            break;


        case "iPad2,1":
            name = "iPad2"
            break;
        case "iPad2,2":
            name = "iPad2"
            break;
        case "iPad2,3":
            name = "iPad2"
            break;
        case "iPad2,4":
            name = "iPad2"
            break;


        case "iPad3,1":
            name = "iPad3"
            break;
        case "iPad3,2":
            name = "iPad3"
            break;
        case "iPad3,3":
            name = "iPad3"
            break;


        case "iPad3,4":
            name = "iPad4"
            break;
        case "iPad3,5":
            name = "iPad4"
            break;
        case "iPad3,6":
            name = "iPad4"
            break;


        case "iPad4,1":
            name = "iPadAir"
            break;
        case "iPad4,2":
            name = "iPadAir"
            break;
        case "iPad4,3":
            name = "iPadAir"
            break;

        case "iPad2,5":
            name = "iPadMini"
            break;
        case "iPad2,6":
            name = "iPadMini"
            break;
        case "iPad2,7":
            name = "iPadMini"
            break;
        case "iPad4,4":
            name = "iPadMini"
            break;
        case "iPad4,5":
            name = "iPadMini"
            break;
        case "iPad4,4":
            name = "iPadMini"
            break;


        case "iPhone3,1":
            name = "iPhone4"
            break;
        case "iPhone3,2":
            name = "iPhone4"
            break;
        case "iPhone3,3":
            name = "iPhone4"
            break;

        case "iPhone4,1":
            name = "iPhone4s"
            break;

        case "iPhone5,1":
            name = "iPhone5"
            break;
        case "iPhone5,2":
            name = "iPhone5"
            break;

        case "iPhone5,3":
            name = "iPhone5c"
            break;
        case "iPhone5,4":
            name = "iPhone5c"
            break;

        case "iPhone6,1":
            name = "iPhone5s"
            break;
        case "iPhone6,2":
            name = "iPhone5s"
            break;

        case "iPhone7,1":
            name = "iPhone6Plus"
            break;
        case "iPhone7,2":
            name = "iPhone6"
            break;


    }
    return name;
}