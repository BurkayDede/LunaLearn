document.addEventListener("DOMContentLoaded", function() {
    const databaseTable = document.getElementById('databaseTable');
    const selectedEntriesTable = document.getElementById('selectedEntriesTable');
  
    // Annahme: Datenbank-Einträge werden dynamisch generiert
    const databaseEntries = [
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      "Datenbank-Eintrag 1",
      "Datenbank-Eintrag 2",
      // Weitere Einträge hier hinzufügen...
    ];
  
    // Funktion zum Erstellen der Checkboxen und Hinzufügen zur oberen Tabelle
    function populateDatabaseTable(entries) {
      entries.forEach(entry => {
        
        const row = document.createElement('tr');
        
        const checkBox_col = document.createElement('td');
        const topic = document.createElement('td');
        const topicContent = document.createElement('td');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'entryCheckbox';
        checkbox.value = entry;

        //column for checkbox
        checkBox_col.appendChild(checkbox);
        
        //column for topic name
        topic.appendChild(document.createTextNode(entry));

        //column for the content
        topicContent.appendChild(document.createTextNode("deine mudda hat ne Glatze"));
        
        //prepare row
        row.appendChild(checkBox_col);
        row.appendChild(topic);
        row.appendChild(topicContent);

        //append row
        databaseTable.appendChild(row);
  
        // Event Listener für Checkboxen, um ausgewählte Einträge hinzuzufügen
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            addSelectedEntry(this.value);
          } else {
            removeSelectedEntry(this.value);
          }
        });
      });
    }
  
    // Funktion zum Hinzufügen von ausgewählten Einträgen zur unteren Tabelle
    function addSelectedEntry(entry) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      const cell2 = document.createElement('td');
      cell.textContent = entry;
      cell2.textContent = "sfdfs";
      row.appendChild(cell);
      row.appendChild(cell2);
      
      selectedEntriesTable.appendChild(row);
    }
  
    // Funktion zum Entfernen von ausgewählten Einträgen aus der unteren Tabelle
    function removeSelectedEntry(entry) {
      const rows = selectedEntriesTable.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName('td')[0].textContent === entry) {
          selectedEntriesTable.removeChild(rows[i]);
          break;
        }
      }
    }
  
    // Datenbank-Einträge in die obere Tabelle einfügen
    populateDatabaseTable(databaseEntries);
  });


  function getFromList(){

    const secondTable = document.getElementById('selectedEntriesTable');
  
    // Zugriff auf alle Zeilen in der zweiten Tabelle
    const rows = secondTable.getElementsByTagName('tr');
    var result = "";
    // Iteration durch die Zeilen
    for (let i = 0; i < rows.length; i++) {
        // Zugriff auf die Zellen in jeder Zeile
       const cells = rows[i].getElementsByTagName('td');
       result += cells[0].textContent;
       result += "\n";
       result += cells[1].textContent;
       result += "\n";
       result += "\n";
       result += "-------------------------------------------------";
       result += "\n";
   
    
    }
    

    var blob = new Blob([result], {
            type: "text/plain;charset=utf-8",
        });
    saveAs(blob, "download.txt");
}