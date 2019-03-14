$(document).ready(function(){
  $("#open").click(function(){


    $('#for_options').animate({
      opacity:'1',

    },1500)

    $("#about_me").slideToggle(1300);

    $("#skills").slideToggle(1300);
    $("#projects").slideToggle(1300);
    $("#contact").slideToggle(1300);
   });

  $('#about_me').click(function(){
 $('#aboutme_container').slideDown(1000);


  })
  $('#close_aboutme').click(function(){
   $('#aboutme_container').slideUp(1000);

  })
  $('#skills').click(function(){
    setInterval(function(ev){
        $('#div1 progress').animate({
         value:'80',

       },3000);
       $( '#div2 progress').animate({
        value:'40'
      },3000);
      $('#div3 progress ').animate({
       value:'40'
     },3000);
     $(' #div4 progress').animate({
      value:'50'
    },3000);
  },800);


    $('#skills_parent').show(1500);
  })
  $('#clossing').click(function(){

    $('#skills_parent').hide(1500);
  })

  $('#projects').click(function(){
    $('#projects_contanier').css("display","block");
      })
    $('#close_projects').click(function(){
      $('#projects_contanier').css("display","none")
    })

    $('#contact').click(function(){
    $('#contact_container').animate({

      height:'48vw',
      opacity:'1'
    },1000);

    })
    $('#close_contact').click(function(){
      $('#contact_container >h1').delay(500).animate({

        width:'0',


      },1500);


        $('#contact_container').animate({
          height:'2vw',
          opacity:'0'
        },1000);






});


  $('#contact').click(function(){
  $('#contact_container >h1').delay(500).animate({

    width:'10vw',
    opacity:'1'

  },1500);
})










});
