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
    var cell6 = row.insertCell(5);
    cell1.innerHTML = HilN;
    cell2.innerHTML = Utlån;
    cell3.innerHTML = dato11;
    cell4.innerHTML = dato22;
    cell5.innerHTML = utlånt;
    cell6.innerHTML = '<input type="checkbox" name="tab1" />';

    document.getElementById("Hilnummer").value = "";
    document.getElementById("utlån").value = "";
    document.getElementById("dato").value = 1;
    document.getElementById("dato1").value = 1;
    document.getElementById("maned").value = 1;
    document.getElementById("maned1").value = 1;
    document.getElementById("ar").value = 2018;
    document.getElementById("ar1").value = 2018;
    document.getElementById("utlånboks").value = "";
}

function tab1_To_tab2()
            {
                var table1 = document.getElementById("table"),
                    table2 = document.getElementById("table2"),
                    checkboxes = document.getElementsByName("tab1");
            console.log("Val1 = " + checkboxes.length);
                 for(var i = 0; i < checkboxes.length; i++)
                     if(checkboxes[i].checked)
                        {
                            // create new row and cells
                            var newRow = table2.insertRow(table2.length),
                                cell1 = newRow.insertCell(0),
                                cell2 = newRow.insertCell(1),
                                cell3 = newRow.insertCell(2),
                                cell4 = newRow.insertCell(3);
                                cell5 = newRow.insertCell(4);
                            // add values to the cells
                            cell1.innerHTML = table1.rows[i+1].cells[0].innerHTML;
                            cell2.innerHTML = table1.rows[i+1].cells[1].innerHTML;
                            cell3.innerHTML = table1.rows[i+1].cells[2].innerHTML;
                            cell4.innerHTML = table1.rows[i+1].cells[3].innerHTML;
                            cell5.innerHTML = table1.rows[i+1].cells[4].innerHTML;
                            // remove the transfered rows from the first table [table1]
                            var index = table1.rows[i+1].rowIndex;
                            table1.deleteRow(index);
                            // we have deleted some rows so the checkboxes.length have changed
                            // so we have to decrement the value of i
                            i--;
                           console.log(checkboxes.length);
                        }
            }
