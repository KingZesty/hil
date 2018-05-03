function onload() {

}

function restrictValue(input) {
    if (input.value < 1) {
        input.value = 1;
    }
    if (input.value > 31) {
        input.value = 31;
    }
}

function restrictValue1(input) {
    if (input.value < 1) {
        input.value = 1;
    }
    if (input.value > 12) {
        input.value = 12;
    }
}


function add() {
  var HilN = document.getElementById("Hilnummer").value;
  var Utlån = document.getElementById("utlån").value;
  var dato11 = document.getElementById("dato").value +"/"+ document.getElementById("maned").value + "/" + document.getElementById("ar").value;
  var dato22 = document.getElementById("dato1").value +"/"+ document.getElementById("maned1").value + "/" + document.getElementById("ar1").value;
  var utlånt = document.getElementById("utlånboks").value;

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = HilN;
    cell2.innerHTML = Utlån;
    cell3.innerHTML = dato11;
    cell4.innerHTML = dato22;
    cell5.innerHTML = utlånt;


    document.getElementById("Hilnummer").value = "";
    document.getElementById("utlån").value = "";
    document.getElementById("dato").value = 1;
    document.getElementById("dato1").value = 1;
    document.getElementById("maned").value = 1;
    document.getElementById("maned1").value = 1;
    document.getElementById("utlånboks").value = "";

    $('#save').on('click', function () {
    var table = $('.content')[0].outerHTML;
    alert(table);
});
}


function myDeleteFunction() {
    document.getElementById("table").deleteRow(0);
}
