
$(document).ready(function(){
    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (isMobile) {
        //king lalibela mobile
        $("#readmorekinglalibela").click(function(){
            if( $("#storyoflalibelamobile").css("display","none"))
            {
                $("#storyoflalibelamobile").css("display","block");
                $("#historyofbetegiorgismobile").css("display","none")
                $("#historyofbeteemanuelmobile").css("display","none")
                $("#storyofgenamobile").css("display","none")
                $("#myslider").css("display","none");
                $('.insidekinglalibela').hide();
                $(".insidebetegiwergisblock").show();
                $(".insidebeteamnuealblock").show();
                $(".insidegenablock").show();
               
            }
        });
        //bete giwergis mobile
        $("#readmorebetegiworgis").click(function(){
            if($("#historyofbetegiorgismobile").css("display","none"))
            {
                $("#historyofbetegiorgismobile").css("display","block")  
                $("#historyofbeteemanuelmobile").css("display","none")
                $("#storyoflalibelamobile").css("display","none");
                $("#storyofgenamobile").css("display","none")
                $("#myslider").css("display","none");
                $(".insidebetegiwergisblock").hide();
                $('.insidekinglalibela').show();
                $(".insidebeteamnuealblock").show();
                $(".insidegenablock").show();
            
                
            }
        });
        //bete emanueal mobile
        $("#readmorebeteemanuel").click(function(){
            if($("#historyofbeteemanuelmobile").css("display","none"))
            {
                $("#historyofbeteemanuelmobile").css("display","block")
                $("#historyofbetegiorgismobile").css("display","none")
                $("#storyoflalibelamobile").css("display","none");
                $("#storyofgenamobile").css("display","none")
                $("#myslider").css("display","none");
                $(".insidebeteamnuealblock").hide();
                $(".insidebetegiwergisblock").show();
                $('.insidekinglalibela').show();
                $(".insidegenablock").show();
                
            }
        });
        //lalibela gena 
        $("#readmoregena").click(function(){
            if($("#storyofgenamobile").css("display","none"))
            {
                $("#storyofgenamobile").css("display","block")
                $("#historyofbeteemanuelmobile").css("display","none")
                $("#historyofbetegiorgismobile").css("display","none")
                $("#storyoflalibelamobile").css("display","none");
                $("#myslider").css("display","none");
                $(".insidegenablock").hide();
                $(".insidebeteamnuealblock").show();
                $(".insidebetegiwergisblock").show();
                $(".insidekinglalibela").show();
                
                
            }
        });
    }
    else
    {
        //king lalibel web
    $("#readmorekinglalibela").click(function(){
        if( $("#storyoflalibela").css("display","none"))
        {
            $("#storyoflalibela").css("display","block");
            $("#historyofbetegiorgis").css("display","none")
            $("#historyofbeteemanuel").css("display","none")
            $("#storyofgena").css("display","none")
            $("#myslider").css("display","none");
           
        }
    });
    //bete giwergis web
    $("#readmorebetegiworgis").click(function(){
        if($("#historyofbetegiorgis").css("display","none"))
        {
            $("#historyofbetegiorgis").css("display","block")  
            $("#historyofbeteemanuel").css("display","none")
            $("#storyoflalibela").css("display","none");
            $("#storyofgena").css("display","none")
            $("#myslider").css("display","none");
            
        }
    });
    //bete emabueal web
    $("#readmorebeteemanuel").click(function(){
        if($("#historyofbeteemanuel").css("display","none"))
        {
            $("#historyofbeteemanuel").css("display","block")
            $("#historyofbetegiorgis").css("display","none")
            $("#storyoflalibela").css("display","none");
            $("#storyofgena").css("display","none")
            $("#myslider").css("display","none");
            
        }
    });
    //lalbiela gena web
    $("#readmoregena").click(function(){
        if($("#storyofgena").css("display","none"))
        {
            $("#storyofgena").css("display","block")
            $("#historyofbeteemanuel").css("display","none")
            $("#historyofbetegiorgis").css("display","none")
            $("#storyoflalibela").css("display","none");
            $("#myslider").css("display","none");
            
        }
    });
    

}
});
