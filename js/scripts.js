$(function() {
  $("form#health-survey").submit(function(event){
    event.preventDefault();
    var eventsCount = [];
    var symptomsCount = [];
    var relieverCount = [];

    $("input:checkbox[name=stressful-events]:checked").each(function() {
      var eventsResponse = eventsCount.push($(this).val());
      console.log("eventsResponse", eventsResponse);
    });
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptomsResponse = symptomsCount.push($(this).val());
        console.log("symptomsResponse", symptomsResponse);
    });
    $("input:checkbox[name=stress-relievers]:checked").each(function() {
      var relieverResponse = relieverCount.push($(this).val());
      console.log("relieverResponse", relieverResponse);
    });
    if((eventsCount.length + symptomsCount.length) > relieverCount.length)  {
      $("#dobetter").show();
    } else if((eventsCount.length + symptomsCount.length) === relieverCount.length) {
      $("#ok").show();
    } else if((eventsCount.length + symptomsCount.length) < relieverCount.length) {
      $("#great").show();
    }
  });
});
