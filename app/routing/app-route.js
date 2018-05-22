var friendData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
      });

    app.post('/api/friends', function (req, res) {
        // friendData.push(req.body);
        // res.json(true);
      var newFriendScores = req.body.scores;
      var scoresArray = [];
      var friendCount = 0;
      var bestMatch = 0;

      for(var i =0; i<friendData.length; i++){
        var scoreDiff = 0;
        for(var j=0; j<newFriendScores.length;j++){
          scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newFriendScores[j])))
        }
        scoresArray.push(scoreDiff);
      }

      for(var i =0; i<scoresArray.length; i++){
        if(scoresArray[i]<=scoresArray[bestMatch]){
          bestMatch = i;
        }
      }

      var bestFriend = friendData[bestMatch];
      res.json(bestFriend);

      friendData.push(req.body);
      });
  }

