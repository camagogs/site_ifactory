$(document).ready(function(){
 

});


function tst(){
  
      function createNode(element) {
        return document.createElement(element);
    }
  
      const tr1 = document.getElementById('resultados');
      const url = 'http://ergast.com/api/f1/drivers.json';
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        let drivers = data.MRData.DriverTable.Drivers;
        return drivers.map(function(driver) {
          tr2 = $('<tr/>');
          url1 = driver.url;
          tr2.append("<td>" + driver.driverId + "</td>");
          tr2.append("<td id='url1'><a href=" +   driver.url + "</a>Link</td>");
          $('table').append(tr2);
        });
      })
      .catch(function(error) {
        console.log(error);
      });  
    }
  

