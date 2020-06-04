const singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
};

function sort() {
	var key=document.getElementById("fieldname").value;
	var order=document.getElementById("sortorder").value;
	var sortedArray=singers.sort(compareValues(key, order));
	const html=getFormattedhtml(sortedArray);
	document.getElementById("sortedArr").innerHTML=html;
	
	}
	
function getFormattedhtml(tableData) {
	var html = "<table border='1|1' style='margin:0 auto;'>";
	html+="<tr>";
	html+="<th>Name</th>";
	html+="<th>Band</th>";
	html+="<th>Born</th>";
	for (var i = 0; i < tableData.length; i++) {
    html+="<tr>";
    html+="<td>"+tableData[i].name+"</td>";
    html+="<td>"+tableData[i].band+"</td>";
    html+="<td>"+tableData[i].born+"</td>";

    html+="</tr>";

	}
	html+="</table>";
	
	return html;
}
	