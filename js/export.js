function showTableData() {
        //Reference the Table.
    
    var myTab = document.getElementById("example");

        //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");

    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            
            document.getElementById('topic').innerHTML = "";
            document.getElementById('description').innerHTML = "";
            

            // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
            for (i = 1; i < myTab.rows.length; i++) {

                // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                var objCells = myTab.rows.item(i).cells;

                // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
                
                for (var j = 2; j < objCells.length; j++) {
                    topic.innerHTML = topic.innerHTML + ' ' + objCells.item(1).innerHTML + '<br />';
                    description.innerHTML = description.innerHTML + ' ' + objCells.item(2).innerHTML + '<br /> <br />';
                }
                //info.innerHTML =info.innerHTML + '<br />';     // ADD A BREAK (TAG).
            }
        }

    }
}



