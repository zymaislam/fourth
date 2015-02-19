
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() { 
      	
 
      	
     
//use a for loop to make an array of arrays out of relevant JSON data
      	var arraysData = [];
      	
      	for(var i=0; i<jsonFREDData.observations.length; i++){
      	
      	var itemArray = [];
      	itemArray.push(jsonFREDData.observations[i].date);
      	itemArray.push(Number(jsonFREDData.observations[i].value));
      	
      	//add my little array to the big array
      	arraysData.push(itemArray);
      	}
      	
      	
      	
      	
      	
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(arraysData);

        // Set chart options
        var options = {'title':'I am a glutton',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
  
