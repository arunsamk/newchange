 vayCtrl.js

          $(this).appendTo($("#news")).slideDown();
          // console.log('Interval When starting--> ', interval);
      });
  }
  function stopTicker()
  {
      clearInterval(interval);
      // console.log('Interval when Stopped --> ', interval);
  }
  $(document).ready(function(){
  interval=setInterval(startTicker, 1500);
  $("#news").hover(function(){
          clearInterval(interval);
          // console.log('Interval when Stopped --> ', interval);
          stopTicker();
        },function(){
            interval=setInterval(startTicker, 1500);
            // console.log('Interval when ready --> ', interval);
        });
   
});
                    }]);
