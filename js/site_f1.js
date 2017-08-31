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
            $("#bt2").css("color","#403531");
            $("#bt2").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
        
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
            $("#bt1").css("border-bottom","4px solid #e5751f")
            $("#bt2").css("border-style", "none");
            $("#bt2").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
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
            $("#bt3").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt2").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
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
            $("#bt4").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt2").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
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
            $("#bt5").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt2").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
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
            $("#bt2").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt2").css("border-style", "none");
            $("#bt7").css("border-style", "none");
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
            $("#bt2").css("border-bottom","4px solid #e5751f")
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt2").css("border-style", "none");
          
        });
        
        $("#logo_im").click(function (){
            $("#bt3").css("font-weight","lighter");
            $("#bt1").css("font-weight","lighter");
            $("#bt2").css("font-weight","lighter");
            $("#bt4").css("font-weight","lighter");
            $("#bt5").css("font-weight","lighter");
            $("#bt6").css("font-weight","lighter");
            $("#bt7").css("font-weight","lighter");
            $("#bt2").css("border-none","none");
            $("#bt1").css("border-style", "none");
            $("#bt3").css("border-style", "none");
            $("#bt4").css("border-style", "none");
            $("#bt5").css("border-style", "none");
            $("#bt6").css("border-style", "none");
            $("#bt7").css("border-style", "none");
            
        });
        

        $.ajax({
            type:"GET",
            url: "http://ergast.com/api/f1/drivers.json?callback=myParser",
            success: function(data){
              let recebe = data;
              recebe => recebe.json();
              console.log("sucess");
              console.log(recebe);
              $("#parser").html(recebe);
              }
            })