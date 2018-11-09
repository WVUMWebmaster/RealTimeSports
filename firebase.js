    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBBRbDBUBO_eDzpnMKgf8JtK1S1_76zlmw",
        authDomain: "wvum-real-time-sports.firebaseapp.com",
        databaseURL: "https://wvum-real-time-sports.firebaseio.com",
        projectId: "wvum-real-time-sports",
        storageBucket: "",
        messagingSenderId: "560038150781"
      };
      firebase.initializeApp(config);
      var db = firebase.database().ref();
      console.log("Running in the Browser");
      dbScore=db.child('/UM VS BETHUNE-COOKMAN');
      var umCurrentScore = 0;
      var opponentCurrentScore=0;
      dbScore.on('value', function(snap) {
        umCurrentScore=snap.val().umScore;
        opponentCurrentScore = snap.val().opponentScore;
        console.log("From Firebase:" + opponentCurrentScore)
      }); 
      dbScore.update({
        umScore:0,
        opponentScore:0
    });
      var homeScore = 0;
      console.log("UM Current Score: " +umCurrentScore);
      console.log("Opponent Score: " + opponentCurrentScore)
      function addScore(addedValue, score)
      {
          if(score[0].id=="opponentScore")
          {
            opponentCurrentScore = opponentCurrentScore + addedValue;
            console.log(opponentCurrentScore);
            dbScore.update({
                  opponentScore:opponentCurrentScore
              });
            score.html(opponentCurrentScore);
          }
          else{
            umCurrentScore = umCurrentScore + addedValue;
            console.log(umCurrentScore);
            dbScore.update({
                  umScore:umCurrentScore
              });
            score.html(umCurrentScore);
          }
          
      }
    
      $(document).ready(function(){
          var umScore = $("#UMScore");
          var opponentScore=$("#opponentScore")
          console.log(opponentScore[0].id);
          var homeAddOneButton = $(".leftSide .button1");
          var homeAddTwoButton = $(".leftSide .button2");
          var homeAddThreeButton = $(".leftSide .button3");
          var homeSubOneButton = $(".leftSide .button4");
          var homeSubTwoButton = $(".leftSide .button5");
          var homeSubThreeButton = $(".leftSide .button6");
          var opponentAddOneButton = $(".rightSide .button1");
          var opponentAddTwoButton = $(".rightSide .button2");
          var opponentAddThreeButton = $(".rightSide .button3");
          var opponentSubOneButton = $(".rightSide .button4");
          var opponentSubTwoButton = $(".rightSide .button5");
          var opponentSubThreeButton = $(".rightSide .button6");
          homeAddOneButton.on("click",function() {
              addScore(1,umScore);
          })
          homeAddTwoButton.on("click",function() {
              addScore(2,umScore);
          })
          homeAddThreeButton.on("click",function() {
              addScore(3,umScore);
          })
          opponentAddOneButton.on("click",function() {
            addScore(1, opponentScore);
        })
        opponentAddTwoButton.on("click",function() {
            addScore(2, opponentScore);
        })
        opponentAddThreeButton.on("click",function() {
            addScore(3, opponentScore);
        })
        homeSubOneButton.on("click",function() {
            addScore(-1,umScore);
        })
        homeSubTwoButton.on("click",function() {
            addScore(-2,umScore);
        })
        homeSubThreeButton.on("click",function() {
            addScore(-3,umScore);
        })
        opponentSubOneButton.on("click",function() {
          addScore(-1, opponentScore);
      })
      opponentSubTwoButton.on("click",function() {
          addScore(-2, opponentScore);
      })
      opponentSubThreeButton.on("click",function() {
          addScore(-3, opponentScore);
      })
          
          //addScore(1,umScore));
          //addScore(1,umScore);
          //subtractScore(umScore, 1);
      });
      
     
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }