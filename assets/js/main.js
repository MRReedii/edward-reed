$(document).ready(function() {
  const optimizeSDK = require("@optimizely/optimizely-sdk");

  const optimizelyClientInstance = optimizeSDK.createInstance({
    sdkKey: 'Kz5p2Ho8puBnwyEsdJgAJu'
  });

  const enabled = optimizelyClientInstance.isFeatureEnabled('kiwano-end-q2', "basic");

  $("form").submit(function(e) {
    $("#notices div").hide();
    e.preventDefault();

    if ($("form input#email").val() === "") {
      $("#notices #error").show();
    } else {
      $.post("/signup", $(this).serialize(), function() {
        $("#notices #success").show();
        $("form input#email").val("");
      })
      .error(function() {
        $("#notices #error").show();
      });
    }
  });
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });
});
