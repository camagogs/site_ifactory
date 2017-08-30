$(document).ready(function(){
    function createNode(element) {
        return document.createElement(element);
    }
  
    function append(parent, el) {
      return parent.appendChild(el);
    }
  
    const tr1 = document.getElementById('resultados');
    const url = 'http://ergast.com/api/f1/drivers.json';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let drivers = data.MRData.DriverTable.Drivers;
      return drivers.map(function(driver) {
        let td = createNode('td');
        tr = createNode('tr');
        tr.innerHTML = `${driver.driverId} ${driver.url}`;
        append(td, tr)
        append(tr1,td);
      });
    })
    .catch(function(error) {
      console.log(error);
    });   
});