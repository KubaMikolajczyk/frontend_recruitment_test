//declare public variables
var input = document.getElementById('textInput');
var filterBtn = document.getElementById('filterBtn');

//detect if enter was pressed on text input
input.onkeypress = function checkIfEnterPressed(e) {
    //set event
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    //check for keycode of that event
    if (keyCode == '13'){
      filterTable();
    }
  }

filterBtn.addEventListener('click', filterTable)



function filterTable() {
    
    //Declare local variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("textInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    
    //Loop through all table rows and hide those not matching the search querry
    for( i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if(td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        
    }
    
}