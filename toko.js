function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (var x = 0; x < td.length; x++){
      if (td [x]) {
        txtValue = td[x].textContent || td[x].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } 
        else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}