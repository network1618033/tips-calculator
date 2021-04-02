/* 
    Programmeur : Jonathan ZOGONA et Joel Boudreau
    Date : 12 Décembre 2019
    Fichier : index.js  
*/


function calculerTips(formulaire){
    var tip = document.getElementById('tip'); 
    var totalTipChacun = 0.0;

    var inputsValue = {
        montantAPaye : Number(formulaire['txtMontant'].value),
        pourcentageTip : Number(formulaire['ddlServiceQual'].value),
        nombreDePersonne : Number(formulaire['txtPersonnes'].value)
    }

    var errorIcons = {
        qualService : $('#error-message-qual-icon'),
        nombreDePersonnes : $('#error-message-nobr-icon'),
        montant : $('#error-message-mont-icon')
    }
    
    if(formulaireValide(inputsValue, errorIcons)) 
    {       
        clearError(errorIcons);
        totalTipChacun = Math.round(((inputsValue.montantAPaye * inputsValue.pourcentageTip) / inputsValue.nombreDePersonne) * 100) / 100;
        tip.innerText = totalTipChacun.toFixed(2);
        $('#totalTip').hide();
        $('#totalTip').fadeIn(1000);
    }       
    else
    {
        tip.innerText = totalTipChacun.toFixed(2);
    }
    
}

function formulaireValide(inputs, pErrorsIcons){
    

    var valide;
    switch(true)
    {
        case ((inputs.montantAPaye == 0) || isNaN(inputs.montantAPaye)) :
            pErrorsIcons.montant.attr('title', 'Le Montant est invalide');
            clearError(pErrorsIcons);
            pErrorsIcons.montant.show();
            valide = false;
            break;
        case ((inputs.pourcentageTip == 0) || isNaN(inputs.pourcentageTip)):
            pErrorsIcons.qualService.attr('title', 'Le pourcentage de tip est invalide');
            clearError(pErrorsIcons);
            pErrorsIcons.qualService.show();
            valide = false;
            break;
        case ((inputs.nombreDePersonne == 0) || isNaN(inputs.nombreDePersonne)):
            pErrorsIcons.nombreDePersonnes.attr('title', 'Le nombre de personne est invalide');
            clearError(pErrorsIcons);
            pErrorsIcons.nombreDePersonnes.show();
            valide = false;
            break;
        default :
            valide = true;
    }

    return valide;
}


function clearError(objError)
{
    objError.qualService.hide();
    objError.montant.hide();
    objError.nombreDePersonnes.hide();
}



$(document).ready(function(){
    $('.bootstrap-select').css({
        'margin-left': '10px',
        'width': '35%',
        'height' : '20px',
        'margin-bottom' : '15px'
    });

    $('#totalTip').hide();

    $('#txtPersonnes').slider({
        formatter: function(value) {
            return value + ' personnes';
        }
    });

    $('#error-message-qual-icon').hide();

    $('#error-message-nobr-icon').hide();

    $('#error-message-mont-icon').hide();

});

