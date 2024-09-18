async function dataShow() {
    let myTable = `
   <table border="1px" width="1000px" bgcolor="lightblue" align="center"  height="50px">
          <tr bgcolor="lightperple" height="30px" align="center">
          <th>Id</th>
            <th>Employee no</th>
            <th> Employee Name</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
         `;
    let url = "http://localhost:3000/employees";
  
    let myobj = await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();  
    console.log(myData);
  
    myData.map((key) => {
      myTable += `
         <tr bgcolor="lightgreen" height="30px" align="center">
         <td>${key.id}</td>
          <td>${key.employeeno}</td>
          <td>${key.name}</td>
          <td>${key.city}</td>
          <td>${key.salary}</td>
         </tr>
      `;
    });
  
    myTable += `</table>`;
  
    document.getElementById("demo").innerHTML = myTable;
  }
  dataShow();
  
  
  