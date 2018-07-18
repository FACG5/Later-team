var test = require('tape');
var logic = require('../puplic/js/index.js');

test("Wrong data", function(t) {
    var url ="https://api.behance.net/v2/projects?q=cat&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV";
      logic.make_connection(url,function(result){
        var actual=logic.gitProject(result)
        var expected = "Nick Jnr. Lets Count";
        t.deepEqual(actual, expected, "design not found");
        t.end();
      }) ;
      
    });
    test("Wrong data", function(t) {
        var url =
          "https://api.behance.net/v2/projects?q=kjhkjhj&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV";
          logic.make_connection(url,function(result){
              var actual=result.projects.length;
            var expected = 0;
            t.deepEqual(actual, expected, "design not found");
            t.end();
          }) ;
          
        });
        test("User data", function(t) {
            var url ="https://api.behance.net/v2/users/Doralice?client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV"
            logic.make_connection(url,function(result){
                var actual=logic.gitUserData(result)
                var expected = "Yukai Du";
                t.deepEqual(actual, expected, "design not found");
                t.end();
              }) ;
              
            });
    