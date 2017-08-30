      var i = 0;

         $("#b_esq").click(function () {
                if(i===0) {
                    $("#img1").fadeOut();
                    $("#img2").fadeOut();
                    $("#img3").fadeIn();
                    $(".cir1").css("background-color","grey");
                    $(".cir3").css("background-color","lightgrey");
                    $(".cir2").css("background-color","lightgrey");
                }
                if(i===1){
                    $("#img1").fadeOut();
                    $("#img3").fadeOut();
                    $("#img2").fadeIn();
                    $(".cir2").css("background-color","grey");
                    $(".cir1").css("background-color","lightgrey");
                    $(".cir3").css("background-color","lightgrey");
                }
                if(i===2){
                    $("#img2").fadeOut();
                    $("#img3").fadeOut();
                    $("#img1").fadeIn();
                    $(".cir3").css("background-color","grey");
                    $(".cir1").css("background-color","lightgrey");
                    $(".cir2").css("background-color","lightgrey");
                }
                i=i+1;
                if(i>2){
                    i=0;
                }
            });
        $("#b_dir").click(function () {
            if(i===0) {
                $("#img1").fadeOut();
                $("#img3").fadeOut();
                $("#img2").fadeIn();
                $(".cir2").css("background-color","grey");
                $(".cir3").css("background-color","lightgrey");
                $(".cir1").css("background-color","lightgrey");
                }
            if(i===1){
                $("#img1").fadeOut();
                $("#img2").fadeOut();
                $("#img3").fadeIn();
                $(".cir1").css("background-color","grey");
                $(".cir2").css("background-color","lightgrey");
                $(".cir3").css("background-color","lightgrey");
            }
            if(i===2){
                $("#img2").fadeOut();
                $("#img3").fadeOut();
                $("#img1").fadeIn();
                $(".cir3").css("background-color","grey");
                $(".cir1").css("background-color","lightgrey");
                $(".cir2").css("background-color","lightgrey");
            }
            i=i+1;
            if(i>2){
                i=0;
            }
        });     
        $(".cir1").click(function () {
            $("#img1").fadeOut();
            $("#img2").fadeOut();
            $("#img3").fadeIn();
            $(".cir1").css("background-color","grey");
            $(".cir2").css("background-color","lightgrey");
            $(".cir3").css("background-color","lightgrey");
        });
        $(".cir2").click(function () {
            $("#img1").fadeOut();
            $("#img3").fadeOut();
            $("#img2").fadeIn();
            $(".cir2").css("background-color","grey");
            $(".cir1").css("background-color","lightgrey");
            $(".cir3").css("background-color","lightgrey");
        });
        $(".cir3").click(function () {
            $("#img2").fadeOut();
            $("#img3").fadeOut();
            $("#img1").fadeIn();
            $(".cir3").css("background-color","grey");
            $(".cir1").css("background-color","lightgrey");
            $(".cir2").css("background-color","lightgrey");
        });
        $("#bt2").click(function(){
            $("#bt1").css("font-weight","lighter");
            $("#bt3").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt2").css("font-weight","bold");
            $("#bt2").css("color","black");
        
        });
        $("#bt1").click(function(){
            $("#bt2").css("font-weight","lighter");
            $("#bt3").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt1").css("font-weight","bold");
            $("#bt1").css("color","black");
            $("#slide_show").show();
            $(".bolas").show();
            $("#parser").hide(); 
        });
        $("#bt3").click(function(){
            $("#bt2").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt3").css("font-weight","bold");
            $("#bt3").css("color","black");
            
        });
        $("#bt4").click(function(){
            $("#bt3").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt2").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt4").css("font-weight","bold");
            $("#bt4").css("color","black");
            x = 4;
        });
        $("#bt5").click(function(){
            $("#bt3").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt2").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt5").css("font-weight","bold");
            $("#bt5").css("color","black");
            x = 5;
        });
        $("#bt6").click(function(){
            $("#bt3").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt2").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt6").css("font-weight","bold");
            $("#bt6").css("color","black");
            x = 6;
        });
        $("#bt7").click(function(){
            $("#bt3").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt2").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","bold");
            $("#bt7").css("color","black");
            $("#slide_show").hide();
            $(".bolas").hide();
            $("#parser").show();  
        });
        $(document).ready(function(){
    function createNode(element) {
        return document.createElement(element);
    }
  
    function append(parent, el) {
      return parent.appendChild(el);
    }
  
    const ul = document.getElementById('authors');
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.results;
      return authors.map(function(author) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });   
});
        $.ajax({
            type:"GET",
            url: "http://ergast.com/api/f1/drivers.json?callback=myParser",
            success: function(data){
                recebe = data;
              console.log("sucess");
              console.log(recebe);
              $("#parser").html(recebe);
              }
            })