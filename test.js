/* var addElement = document.querySelector("#addQuestion");
// addElement.addEventListener("click", function (e) {
//     var x = document.createElement("div");
//     var ad = document.querySelector(".add");
//     var s = document.body.appendChild(ad);
    // s.innerHTML = ad;
//     // e.preventDefault();
//     console.log(ad)  
// })
// console.log($(".add"))
*/
var x=0;

var  cloneTemplate = $(".add:eq(0)").clone();
// var increment = 

$("select.myselect:eq(0)").change(function() {

  var selectedType = $("select.myselect:eq(0)").children("option:selected").val();
  if(selectedType == 1) {
      $(this).parent().parent().siblings().children().eq(2).hide(500)
  } else {
        $(this).parent().parent().siblings().children().eq(2).show(500)
       

  }
    //  if(selectedType == 1){
    //     $(this).parent().parent().siblings().children().eq(2).hide(500)
    //  }else{
    //     $(this).parent().parent().siblings().children().eq(2).show(500)
    //  }

})
   
      
function soso() {
    num = parseInt($(".inc:eq("+x+")").html())
    var select = $("select.myselect:eq("+x+")").children("option:selected").val();
    if(x == 0)
 {
    //  console.log("ssssssssssss");
    $(".pattern").append(cloneTemplate);

 } else {
    cloneTemplate = $(".add:eq("+x+")").clone();
    $(".pattern").append(cloneTemplate);
    // $("select.myselect:eq("+x+")").children("option:selected").val() ;
    var t=x + 1;
//    console.log( $("select.myselect:eq("+t+")") );

select = $("select.myselect:eq("+x+")").children("option:selected").val();
var newselect = $("select.myselect:eq("+t+")").children("option").attr("selected",select);
var neselect = $("select.myselect:eq("+t+")").children("option:selected").val();

// console.log(newselect);
 neselect = select;
console.log(select)//1
console.log(neselect);//0
if(neselect == 1) {
    console.log($(this).parent().parent().siblings().children())
    $(this).parent().parent().siblings().children().eq(2).hide(500)
} else {
$(this).parent().parent().siblings().children().eq(2).show(500)

}

    // console.log(select);

// console.log("dsad");
 }
    // if(x=0){
    //     $(".pattern").append(cloneTemplate);
    
        // cloneTemplate = cloneTemplate;

    //  cloneTemplate = $(".add:eq("+x+")").clone();   

    //     $(".pattern").append(cloneTemplate); 
      
        //   console.log($(this).parent().parent())
      
        
    
    //  cloneTemplate = $(".add:eq("+x+")").clone();   
    
    
    
     cloneTemplate.addClass("mt-5")
    var e = $(".addQuestion").parent().clone()
    $(this).parent().hide(1000);
    $(".pattern").append(e);

    x++;
    if($("select.myselect:eq(0)").children("option:selected").val() === 1) {
        console.log("dsafsgdh");
    }
    if (num == x) {
        $(".inc:eq("+x+")").html(x +1)
        num++;
    }

    $(".removeQuestion:eq("+x+")").click(function() {
        $(".add:eq("+x+")").remove();
        x--;
    });

     $(".addQuestion").click(soso);   

     $("select.myselect").change(function() {
         if($("select.myselect:eq(0)").children("option:selected").val() === 1) {
         console.log("dsafsgdh");

         }
        var eman = $(this).children("option:selected").val();
        if(eman == 1) {
            $(this).parent().parent().siblings().children().eq(2).hide(500)
        } else {
        $(this).parent().parent().siblings().children().eq(2).show(500)

        }
     })
    //  $(document).ready(function(){
    //     $("select.myselect:eq("+x + 1+")").change(function(){
    //         // sol select add:eq for this
    //         index = $ (this).index();
    //        console.log(index  )
    //         var selectedType = $(this).children("option:selected").val();
    //        if(selectedType ==1){
    //           $(".trueFalse:eq("+x+")").hide(100)
    //        }else{
    //         $(".trueFalse:eq("+x+")").show()
    //        }
    //     });
    // });
    // $("select.myselect").change(function() {
    //     index = $ (this).parent.index();
    //   console.log(index ) 
    //   var selectedType = $(this).children("option:selected").val();
    //      if(selectedType ==1){
    //         $(this.children(".trueFalse")).hide(100)
    //      }else{
    //       $(".trueFalse:eq("+index+")").show()
    //      }
    
    // })
}

$(".addQuestion").click(soso);




// $(".removeQuestion:eq(1)").click(lolo);

// $(document).ready(function(){
//     $("select.myselect").change(function(){
//         var selectedType = $(this).children("option:selected").val();
//        if(selectedType ==1){
//           $(".trueFalse").hide(100)
//        }else{
//         $(".trueFalse").show()
//        }
//     });
// });
 var index;  
