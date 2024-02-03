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
        var breakLine =document.createElement('br');

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
        row.appendChild(checkBox_col);
        checkBox_col.style.width = '50px';
        row.appendChild(topic);
        topic.style.width = '200px';
        row.appendChild(topicContent);
        
        checkbox.textContent = description;

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

      //add horizontal line as breakline
      const breakLine = document.createElement('hr');

      //add selected content to the row
      title.textContent = entry;
      description.textContent = content;
      
      row.appendChild(title);
      title.style.width = '200px';
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
    for (let i = 8; i < woerter.length; i += 8) {
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
    // Iteration durch die Zeilen
    for (let i = 0; i < rows.length; i++) {

        // Zugriff auf die Zellen in jeder Zeile
       const cells = rows[i].getElementsByTagName('td');
       var content = cells[1].textContent;

       var foldedtext = fold(content);
       
       
 
       result += cells[0].textContent;

       result += "\n";
       result += "\n";
       result += foldedtext;
       result += "\n";
       result += "\n";
       result += "____________________________________________________________________________________";
       result += "\n";
       result += "\n";
   
    
    }


    window.jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    doc.text(result, 10, 20);
    
    doc.save('LL_LearningStuff.pdf');

    /*var blob = new Blob([result], {
            type: "text/plain;charset=utf-8",
        });
    saveAs(blob, "download.pdf");*/
  }