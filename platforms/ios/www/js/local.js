// JavaScript Document

var lan=document.all?navigator.userLanguage:navigator.language;

var lanParser="EN";
if(lan.indexOf("it")!=-1){
	lanParser="IT";
}else{
		if(lan.indexOf("fr")!=-1){
			lanParser="FR";
			}
			else{
				if(lan.indexOf("JP")!=-1 || lan.indexOf("jp")!=-1){
					lanParser="JP";
				}
				else{
					if(lan.indexOf("ES")!=-1 || lan.indexOf("es")!=-1){
					lanParser="ES";
					}
				}
			}
	}
	

if(lanParser == "EN"){ //lanParser == "EN"
	var NUOVO="Nuovo";
	var MODIFICA="Modifica &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	var FATTO="Fatto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	var ANNULLA="Annulla";
	var ELIMINA="Elimina";

	
	var SENZA_NOME="Senza nome";
	var PASSWORD_INSERITE_NON_COINCIDONO="Le password inserite non coincidono";
	var COMPILARE_TUTTI_I_CAMPI="Compilare tutti i campi";
	var PASSWORD_IMPOSTATA_CORRETTAMENTE="Password impostata correttamente";
	var PASSWORD_MODIFICATA="Password modificata";
	var PASSWORD_SBAGLIATA="Password sbagliata";
	var INSERISCI_PASSWORD="Inserisci la password";
	var RIPETI_PASSWORD="Ripeti la password";
	var PASSWORD_ATTUALE="Password attuale";
	var INSERISCI_NUOVA_PASSWORD="Nuova password";
	var RIPETI_NUOVA_PASSWORD="Ripeti password";
	var DISABILITA_PASSWORD="Per disabilitare la login specifica la password attuale e lascia vuoti i campi 'Nuova Password' e 'Ripeti Password'";
	var INDIETRO="Indietro";
	var CONFERMA="Conferma";
	var OK="Ok";
    var ESCI="Esci";
    var MAGGIORI_INFO = "Maggiori Info";
	
	var RECUPERA_PASSWORD="Recupera password";
	var FREE_VERSION_MESSAGE="Con la versione Light puoi inserire massimo 3 documenti";
	
	var MESSAGGIO_CONFIRM="Eliminando questo documento perderai tutte le foto ad esso associate!";
	var INFO_SESSIONE_PRIMA_RIGA_1="In questo momento iDocs richiede la password se rimane in background per più 6 secondi"
	var INFO_SESSIONE_PRIMA_RIGA_2="In questo momento iDocs richiede la password solo se viene eliminata dalle applicazioni attive"
	var INFO_SESSIONE="Richiedi password solo al <b>riavvio completo</b> dell'app:";
    var MIGRATION_MESSAGE = "salva i tuoi documenti per la nuova versione di iDocs";
    var PROCEED = "Procedi";
    var LANDING_MASSAGE_SYNCH = "Stiamo lavorando alla nuova versione di iDocs (picDocs)!</br>salva i tuoi documenti seguendo la procedura.</br>La procedura creerà la cartella 'iDocs 2.0' sul TUO spazio Dropbox e salverà lì tutti i tuoi documenti. I tuoi documenti saranno criptati e al sicuro nella TUA cartella Dropbox pronti ad essere importati nella versione di iDocs (picDocs).</br><b>Se non segui questa procedura e istalli picDocs perderai tutti i tuoi documenti.</b>"
    var CONOSCI_DROPBOX = "Non conosci Dropbox?";
    var CREA_ACCOUNT = "Crea un account </br> (in 20 secondi)";
    var UTENTE = "Utente Dropbox";
    var SPAZIO_LIBERO = "Spazio disponibile";
    var LOGIN_DROPBOX = "Login Dropbox";
    var LOGOUT_DROPBOX = "Logout Dropbox";
    var VERIFIFCA = "Verifica stato";
    var DA_SALVARE_DU_DROPBOX = "File da salvare su Dropbox";
    var DA_ELIMINARE_DA_DROPBOX = "File da eliminare da Dropbox";
    var SINCRONIZZATI = "Avvia procedura di sincronizzazione";
    var SEI_SINCRONIZZATO = "Tutti i tuoi file sono al sicuro du Dropox pronti per essere importati in iDocs 2.0 </br></br> Seguici su twitter per rimanere aggiornato sulla pubblicazione di picDocs";
    var SEGUI_HICTECH = "Segui @hicTech";
	var NO_INTERNET = "Non sei connesso a internet!";
    var LANDING_MASSAGE ="Siamo orgogliosi di annunciare che dopo l'incredibile successo di iDocs e grazie ai suoi milioni di utenti la nuova versione di iDocs (<b>picDocs</b>) comprenderà molte nuove funzioni e miglioramenti. Questa è una versione intermedia che ti consente di mettere al sicuro tutti i tuoi documenti sul TUO Dropbox pronti per essere importati in <b>picDocs</b>.";

}else{

	var NUOVO="New";
	var MODIFICA="Edit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	var FATTO="Done &nbsp;&nbsp;&nbsp;"
	var ANNULLA="Abort";
	var OK="Ok";
	var ELIMINA="Delete";
	
	var SENZA_NOME="No name";
	var PASSWORD_INSERITE_NON_COINCIDONO="Passwords doesn't match";
	var COMPILARE_TUTTI_I_CAMPI="Fill all fields";
	var PASSWORD_IMPOSTATA_CORRETTAMENTE="Password saved";
	var PASSWORD_MODIFICATA="Password was changed";
	var PASSWORD_SBAGLIATA="Wrong password";
	var INSERISCI_PASSWORD="Insert password";
	var RIPETI_PASSWORD="Retype password";
	var PASSWORD_ATTUALE="Current password";
	var INSERISCI_NUOVA_PASSWORD="New password";
	var RIPETI_NUOVA_PASSWORD="Retype new password";
	var DISABILITA_PASSWORD="To disable login insert the current password and leave other fields white";
	var INDIETRO="Back";
	var CONFERMA="Confirm";
	var OK="Ok";
    var ESCI="Exit";
    var MAGGIORI_INFO = "More Info";
	
	var RECUPERA_PASSWORD="Recover password";
	var FREE_VERSION_MESSAGE="This version allows only 3 docs";
	
	var MESSAGGIO_CONFIRM="Do you realy want to delete this documents and all its photos?";
	var INFO_SESSIONE_PRIMA_RIGA_1="Now iDocs request password after 6 seconds of inactivity"
	var INFO_SESSIONE_PRIMA_RIGA_2="Now iDocs request password only if you delete it from active applications"
	var INFO_SESSIONE="Request password only on <b>definitely app killing</b>:";
    var MIGRATION_MESSAGE = "backup your data for new iDocs version";
    var PROCEED = "Proceed";
    var LANDING_MASSAGE_SYNCH = " We are working on iDocs new version (picDocs)! Please backup your data by following this procedure.</br>It will create an 'iDocs 2.0' folder on YOUR Dropbox where all your photos will be encrypted and stored ready to be imported in iDocs new version (picDocs).</br><b>If you don't follow this procedure and install picDocs you'll lose all your data.</b>"
    var CONOSCI_DROPBOX = "Don't know Dropbox?";
    var CREA_ACCOUNT = "Create an account </br> (in 20 seconds)";
    var UTENTE = "Dropbox user";
    var SPAZIO_LIBERO = "Available space";
    var LOGIN_DROPBOX = "Login Dropbox";
    var LOGOUT_DROPBOX = "Logout Dropbox";
    var VERIFIFCA = "Verify state";
    var DA_SALVARE_DU_DROPBOX = "Files to upload on Dropbox";
    var DA_ELIMINARE_DA_DROPBOX = "File to remove from Dropbox";
    var SINCRONIZZATI = "Synchronize with Dropbox";
    var SEI_SINCRONIZZATO = "All your files are on your Dropbox folder ready to be imported in picDocs</br></br> Follow us on twitter to get all updates about picDocs"
    var SEGUI_HICTECH = "Follow @hicTech";
    var NO_INTERNET = "No internet connection!";
    var LANDING_MASSAGE ="We are really proud to announce that from incredible success of iDocs, with milions user, new version of iDocs (<b>picDocs</b>) will add lots of features and improvements. This is a migration version that allows you to store all your current documents in your Dropbox folder and be ready to import them in <b>picDocs</b>.";

	
}





