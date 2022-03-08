
        /* When the user scrolls right 20px from the left of the document, show the button*/

        window.onscroll = function() {
          scrollFunction()


        };

        function scrollFunction() {
          if (document.body.scrollLeft > 20 || document.documentElement.scrollLeft > 20) {
            document.getElementById("myBtn").style.display = "block";
          } else {
            document.getElementById("myBtn").style.display = "none";
          }



        }



        /* When the user clicks on the button, next page*/

        function topFunction() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p1.html";


        }

        function topFunction1() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p2.html";


        }

        function topFunction2() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p3.html";


        }

        function topFunction3() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p4.html";


        }

        function topFunction4() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p5.html";


        }

        function topFunction5() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "p6.html";


        }

        function topFunction6() {



          document.body.scrollLeft = 0;
          document.documentElement.scrollLeft = 0;
          window.location = "index.html";


        }
