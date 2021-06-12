'use strict';


var StatsReg = [
{year:'2012-2013',team:'Portland',gp:82,gs:82,mpg:38.6,fg:.429,p3:.368,ft:.844,rpg:3.1,apg:6.5,spg:.9,bpg:0.2,ppg:19.0},
{year:'2013-2014',team:'Portland',gp:82,gs:82,mpg:35.8,fg:.424,p3:.394,ft:.871,rpg:3.5,apg:5.6,spg:.8,bpg:0.3,ppg:20.7},
{year:'2014-2015',team:'Portland',gp:82,gs:82,mpg:35.7,fg:.434,p3:.343,ft:.864,rpg:4.6,apg:6.2,spg:1.2,bpg:0.3,ppg:21.0},
{year:'2015-2016',team:'Portland',gp:75,gs:75,mpg:35.7,fg:.419,p3:.375,ft:.891,rpg:4.0,apg:6.8,spg:.9,bpg:0.4,ppg:25.1},
{year:'2016-2017',team:'Portland',gp:75,gs:75,mpg:35.9,fg:.444,p3:.370,ft:.895,rpg:4.9,apg:5.9,spg:.9,bpg:0.3,ppg:27.0},
{year:'2017-2018',team:'Portland',gp:73,gs:73,mpg:36.6,fg:.439,p3:.361,ft:.916,rpg:4.5,apg:6.6,spg:1.1,bpg:0.4,ppg:26.9},
{year:'2018-2019',team:'Portland',gp:80,gs:80,mpg:35.5,fg:.444,p3:.369,ft:.912,rpg:4.6,apg:6.9,spg:1.1,bpg:0.4,ppg:25.8},
{year:'2019-2020',team:'Portland',gp:66,gs:66,mpg:37.5,fg:.463,p3:.401,ft:.888,rpg:4.3,apg:8.0,spg:1.1,bpg:0.3,ppg:30.0}
];

var initial_stats = [...StatsReg];


var StatsPlayoff = [
{year:2014,team:'Portland',gp:11,gs:11,mpg:42.4,fg:.439,p3:.386,ft:.894,rpg:5.1,apg:6.5,spg:.9,bpg:0.2,ppg:22.9},
{year:2015,team:'Portland',gp:5,gs:5,mpg:40.2,fg:.406,p3:.161,ft:.781,rpg:4.0,apg:7.3,spg:.4,bpg:0.4,ppg:21.3},
{year:2016,team:'Portland',gp:11,gs:11,mpg:39.7,fg:.368,p3:.393,ft:.910,rpg:4.3,apg:5.7,spg:1.1,bpg:0.3,ppg:26.0},
{year:2017,team:'Portland',gp:4,gs:4,mpg:37.8,fg:.433,p3:.281,ft:.960,rpg:4.5,apg:8.3,spg:.8,bpg:0.5,ppg:25.8},
{year:2018,team:'Portland',gp:4,gs:4,mpg:40.5,fg:.352,p3:.300,ft:.882,rpg:4.5,apg:5.6,spg:.7,bpg:0.8,ppg:18.5},
{year:2019,team:'Portland',gp:16,gs:16,mpg:40.6,fg:.418,p3:.373,ft:.833,rpg:4.8,apg:6.9,spg:1.3,bpg:0.3,ppg:26.9},
{year:2020,team:'Portland',gp:4,gs:4,mpg:35.8,fg:.406,p3:.394,ft:.970,rpg:3.5,apg:4.3,spg:.5,bpg:0.2,ppg:24.3}
];

const tableSelector = document.querySelectorAll('table');

let sortDirection = false;

var expanded = false;

//function to create the tables
function createTable(data,elementID){
	
	let tableBody = document.getElementById(elementID);
	let dataHTML = ''; 
	
	if(data == null){
		return;
	}

			for (let dt of data){
				dataHTML += `<tr>
		        <td><center>${dt.year}</center></td>
		        <td><center>${dt.team}</center></td>
		        <td><center>${dt.gp}</center></td>
		        <td><center>${dt.gs}</center></td>
		        <td><center>${dt.mpg}</center></td>
		        <td><center>${dt.fg}</center></td>
		        <td><center>${dt.p3}</center></td>
		        <td><center>${dt.ft}</center></td>
		        <td><center>${dt.rpg}</center></td>
		        <td><center>${dt.apg}</center></td>
		        <td><center>${dt.spg}</center></td>
		        <td><center>${dt.bpg}</center></td>
		        <td><center>${dt.ppg}</center>
				</td>
		        </tr>`;
			}		
	tableBody.innerHTML = dataHTML;
}


//function that gathers the data from tbody and sorts them
function sortTable(tableSelector, columnName){
	
	const sortTableBody = tableSelector.querySelector('tbody');
	const tableData = table2data(sortTableBody);
	
	
	sortDirection = !sortDirection;
	
	tableData.sort((p1,p2) => {
		
		let dataTypep1 = typeof p1[columnName];
		let dataTypep2 = typeof p2[columnName];
		
		
		if ( dataTypep1 ==='string' && dataTypep2 ==='string'){
			return sortDirection ? p1[columnName].localeCompare(p2[columnName]) : p2[columnName].localeCompare(p1[columnName]);
		} else if ( dataTypep1 ==='number' && dataTypep2 ==='number'){
			return sortDirection ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]; 
		}
		
	});
	
	data2table(sortTableBody, tableData);
}

//function that get all the table header elements and add a click handler for each
function runSorting(i){
		
	let colname = tableSelector[i].querySelectorAll('th')  
         .forEach((element, columnNo)=>{ 
             element.addEventListener('click', event => {
             sortTable(tableSelector[i] , columnNo); 
    })
  })
	
}



//// create the array that'll hold the data rows
function table2data(tableBody){
  const tableData = []; 
   tableBody.querySelectorAll('tr:not([style*="display:none"]):not([style*="display: none"])')
    .forEach(row=>{  // for each table row...
      const rowData = [];  // make an array for that row
      row.querySelectorAll('td')  // for each cell in that row
        .forEach(cell=>{
		  let floatValue = parseFloat(cell.innerText);
		  if (floatValue == cell.innerText){
			  rowData.push(floatValue);
		  }else {
			  rowData.push(cell.innerText); // add it to the row data
		  }          
        })
      tableData.push(rowData);  // add the full row to the table data 
    });
  return tableData;
}

// this function puts data into an html tbody element
function data2table(tableBody, tableData){
  tableBody.querySelectorAll('tr') // for each table row...
    .forEach((row, i)=>{  
      const rowData = tableData[i]; // get the array for the row data
      row.querySelectorAll('td')  // for each table cell ...
        .forEach((cell, j)=>{
          cell.innerText = rowData[j]; // put the appropriate array element into the cell
        })
      tableData.push(rowData);
    });
}



//function that hide unchecked columns or show checked columns
function show_hide_column(elemID,tableID,col_no, do_show) {
	
    var rows = document.getElementById(tableID).rows;
	var yes = document.getElementById(elemID);
    
    for (var row = 0; row < rows.length; row++) {
        var cols = rows[row].cells;
        if ( yes.checked == true) {
            cols[col_no].style.display = do_show ? '' : 'none';
        } else {
			cols[col_no].style.display = do_show ? 'none' : '';
		}
    }
}


//function that applies the display style to our checkbox
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

// a fucntion that add the click event to our checkbox 
function runCheck(tableID){
	let colname = ['check_year','check_team','check_gp','check_gs','check_mpg','check_fg','check_p3','check_ft','check_rpg','check_apg','check_spg','check_bpg','check_ppg'];
	
	for (let i=0 ; i<colname.length; i++){
		let colmnNr = document.getElementById(colname[i]).value;
		
		document.getElementById(colname[i]).addEventListener('click',function(){show_hide_column(colname[i],tableID,colmnNr,true)},false);
	}
}
	

function hidetable(buttonId,id) {
	let y = document.getElementById(buttonId);
	let x = document.getElementById(id).style;
	if( x.display === 'none'){
		x.display = 'inline';
		y.innerHTML = 'Hide Table';
	} else {
		x.display = 'none';
		y.innerHTML = 'Show Table';
	}
}




document.getElementById('button1').addEventListener('click',function(){hidetable('button1','table1')},false);
document.getElementById('button2').addEventListener('click',function(){hidetable('button2','table2')},false);


createTable(StatsReg,'StatsReg');
createTable(StatsPlayoff,'StatsPlayoff');




document.getElementById('selectBox').addEventListener('click',function(){showCheckboxes()},false);

runSorting(0);
runSorting(1);

runCheck('table1');
runCheck('table2');


document.getElementById('add_data').addEventListener('click',function(){
	
	var add_data = [{
	year:document.getElementById("add_Year").value,
	team:document.getElementById("add_Team").value,
	gp:document.getElementById("add_GP").value,
	gs:document.getElementById("add_GS").value,
	mpg:document.getElementById("add_MPG").value,
	fg:document.getElementById("add_FG%").value,
	p3:document.getElementById("add_3P%").value,
	ft:document.getElementById("add_FT%").value,
	rpg:document.getElementById("add_RPG").value,
	apg:document.getElementById("add_APG").value,
	spg:document.getElementById("add_SPG").value,
	bpg:document.getElementById("add_BPG").value,
	ppg:document.getElementById("add_PPG").value
	}];
	
	Array.prototype.push.apply(StatsReg, add_data);
	localStorage.setItem('newTable',JSON.stringify(StatsReg));
	var updateTable = JSON.parse(localStorage.getItem('newTable'));
	createTable(updateTable,'StatsReg');
	
},false);

var corTable = JSON.parse(localStorage.getItem('newTable'));
createTable(corTable,'StatsReg');

document.getElementById('clear_data').addEventListener('click',function(){
	
	localStorage.removeItem('newTable');
	StatsReg = [...initial_stats];
	createTable(StatsReg,'StatsReg');
},false);




document.getElementById("myInput").addEventListener('keyup',function(){
	// Declare variables
  let  filter, table, tr, td, i, txtValue;
  
  filter =document.getElementById("myInput").value;
  table = document.getElementById("table2");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});






