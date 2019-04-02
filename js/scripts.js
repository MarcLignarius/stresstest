// $(function() {
//   $("form#luck-survey").submit(function(event){
//     event.preventDefault();
//     var luckyCount = [];
//     var unluckyCount = [];
//
//     $("input:checkbox[name=lucky]:checked").each(function() {
//       var luckyResponse = luckyCount.push($(this).val());
//     });
//     $("input:checkbox[name=unlucky]:checked").each(function() {
//       var unluckyResponse = unluckyCount.push($(this).val());
//     });
//
//     if(luckyCount.length > unluckyCount.length) {
//       $("#luckyOutput").show();
//     } else if(unluckyCount.length > luckyCount.length) {
//       $("#unluckyOutput").show();
//     } else if(unluckyCount.length === luckyCount.length) {
//       $("#neutralOutput").show();
//     }
//   });
// });
