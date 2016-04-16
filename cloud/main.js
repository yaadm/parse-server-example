
Parse.Cloud.define('hello', function(req, res) {
  
  console.log("hello function called");
  
  var query = new Parse.Query(Parse.Installation);
  query.containedIn('channels', req.params.channels);

  Parse.Push.send({
    where: query,
    data: {
      alert: req.params.data
    }
  }, {
    success: function() {
      // Push was successful
      res.success('Hi');
    },
    error: function(error) {
      // Handle error
      res.error('Hi');
    }
  });
  
});
