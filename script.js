function createTable() {
    //Write your code here
	const table = document.getElementById("myTable")
	table.innerHTML = ""
	const rows = prompt("Input number of rows");
	const cols = prompt("Input number of columns");

	for (let row = 0; row < rows; row++) {
		const tr = document.createElement("tr");
		for (let col = 0; col < cols; col++) {
			const td = document.createElement("td")
			td.innerText = `Row-${row} Column-${col}`
			tr.append(td);
		}
		table.append(tr)
	}
}
