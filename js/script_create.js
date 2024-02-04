//arrays for the data from the database. PHP snippet uses these arrays.
var topics = [];
var contents = [];

//create eventlistener 
document.addEventListener("DOMContentLoaded", function() {
    var databaseTable = document.getElementById('databaseTable');
    var selectedEntriesTable = document.getElementById('selectedEntriesTable');
  

    //
    // function to fill the content of the first table
    //
    function populateDatabaseTable(entries) {

      entries.forEach(entry => {
        
        //get index of topic for selecting the correct content of the topic from the contents array
        var index = topics.indexOf(entry);
        var description = contents[index];

        //prepare table
        var row = document.createElement('tr');
        row.style = 'border-bottom:1px solid black;';

        var checkBox_col = document.createElement('td');
        var topic = document.createElement('td');
        var topicContent = document.createElement('td');
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'entryCheckbox';
        checkbox.value = entry;
        
        
        //column for checkbox
        checkBox_col.appendChild(checkbox);
        
        //column for topic name
        topic.appendChild(document.createTextNode(entry));

        //column for the content
        topicContent.appendChild(document.createTextNode(description));
        

        //prepare row
        checkBox_col.style.width = '50px';
        row.appendChild(checkBox_col);

        topic.style.width = '150px';
        topic.style = "font-weight: bold;"
        row.appendChild(topic);
        
        topicContent.style ='padding-bottom: 25px; padding-left: 10px;';
        row.appendChild(topicContent);
        
        checkbox.textContent = description;
        
        var breakLine = document.createElement('br');
        //append row
        
        databaseTable.appendChild(row);
        databaseTable.appendChild(breakLine);


        //event listener for checkboxes to fill selected items
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            addSelectedEntry(this.value, this.textContent);
          } else {
            removeSelectedEntry(this.value);
          }
        });
      });
    }
    
    
    /////////////////////////////////////////////////////////
    // function to fill selected items to the second table //
    ////////////////////////////////////////////////////////

    function addSelectedEntry(entry, content) {


      //Prepare selected row
      const row = document.createElement('tr');
      const title = document.createElement('td');
      const description = document.createElement('td');
      row.style = 'border-bottom:1px solid black;';

      //add new line
      const breakLine = document.createElement('br');
     


      //add selected content to the row
      title.textContent = entry;
      description.textContent = content;
      

      title.style.width = '150px';
      title.style = "font-weight: bold;"
      row.appendChild(title);
  
      description.style ='padding-bottom: 25px; padding-left: 10px;';
      row.appendChild(description);

 
      
      // add to table
      selectedEntriesTable.appendChild(row);
      selectedEntriesTable.appendChild(breakLine);

    }


    //////////////////////////////////////////
    // function to remove the selected item //
    //////////////////////////////////////////

    function removeSelectedEntry(entry) {

      //get all rows and breaklines 
      const rows = selectedEntriesTable.getElementsByTagName('tr');
      const breaklines =selectedEntriesTable.getElementsByTagName('hr');

      //remove selected item
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName('td')[0].textContent === entry) {
          selectedEntriesTable.removeChild(rows[i]);
          break;
        }
      }

      //remove one breakline
      for (let i = 0; i < breaklines.length; i++) {
    
          selectedEntriesTable.removeChild(breaklines[i]);

      }
    }
    

    // Start filling the first table with data from the database
    populateDatabaseTable(topics);

  });

  //////////////////////////////////////////////////////////////////////
  // function to fill arrays. Used by the PHP snippet in create_2.php //
  /////////////////////////////////////////////////////////////////////
  function fillDataIntoArrays(titles, definitions){

    topics.push(titles);
    contents.push(definitions);
    
    
  }





  //////////////////////////////////////////////////////////////////////
  // function to fold long strings //
  /////////////////////////////////////////////////////////////////////
  function fold(text) {
    let woerter = text.split(' ');

    // Füge nach dem zehnten Leerzeichen ein Zeilenumbruch hinzu
    for (let i = 8; i < woerter.length; i += 10) {
        woerter[i] += '\n';
    }

    // Füge die Wörter wieder zusammen
    let modifizierterText = woerter.join(' ');

    return modifizierterText;
  }
  

  function verkleinereTextSchrift(text, fontSize) {
    return chalk.bold.fontSize(fontSize)(text);
}
  ////////////////////////////////////////////
  // function to create the text (pdf) file //
  ////////////////////////////////////////////
  function getFromList(){

    const secondTable = document.getElementById('selectedEntriesTable');
  
    // Zugriff auf alle Zeilen in der zweiten Tabelle
    const rows = secondTable.getElementsByTagName('tr');
    var result = "";
    var y =20;
    var fontSize = 10;

    window.jsPDF = window.jspdf.jsPDF;

    
    // Iteration durch die Zeilen
    if(rows.length > 0){

        for (let i = 0; i < rows.length; i++) {


            // Zugriff auf die Zellen in jeder Zeile
          const cells = rows[i].getElementsByTagName('td');
          var content = cells[1].textContent;

          var foldedtext = fold(content);
          
          
    
          result += "| " + cells[0].textContent + " |";
          result += "\n";

          result += "\n";
          result += "\n";
          result += foldedtext;
          result += "\n";
          result += "\n";
          result += "__________________________________________________________________________________";
          result += "\n";
          result += "\n";

          
        }


        //prepare PDF
        var doc = new jsPDF();
        
        //set image
        var img = new Image()
        img.src = 'assets/cat.png'
        doc.addImage(img, 'png', 175, 5, 20, 30)
        
        //counter to count pages
        var cntPage = 1;

        //set maxwidth
        var textLines = doc.splitTextToSize(result, 275);
        doc.setFontSize(10);

        // Überprüfe, ob der Text in die verbleibende Höhe der aktuellen Seite passt
        var remainingHeight = doc.internal.pageSize.height - 20;
        
        for (var cnt = 0; cnt < textLines.length; cnt++) {

            if (y + fontSize > remainingHeight) {
                // Füge eine neue Seite hinzu, wenn der Text nicht mehr auf die aktuelle Seite passt
                cntPage += 1;
                doc.addPage();
                y = 20; // Setze y auf den oberen Rand der neuen Seite
                doc.addImage(img, 'png',185,5, 15, 15)
            }

            doc.text(10, y,textLines[cnt]);
            y += fontSize / 2;
        }
        doc.save('LL_LearningStuff.pdf');
    }else{

      alert("Select at least one topic !");
    }
    /*var blob = new Blob([result], {
            type: "text/plain;charset=utf-8",
        });
    saveAs(blob, "download.pdf");*/
  }