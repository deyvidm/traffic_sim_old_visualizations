$.ajax({
  url:'http://localhost:8001/serve.php',
  method:'get',
  success:function(data) {
    animate(data);
  },
  error:function(data){
    alert("error");
  }
});

function animate(data){
  leader_pos = data[3].slice();
  follower_pos = data[3].slice();

  var canvas_width = 240;
  var canvas_height = 50;

  var size_scaler = 6;
  var length = 4;
  var width = 2
  var duration = 250;

  var draw = SVG('drawing').size(canvas_width*size_scaler, canvas_height*size_scaler)
 

  for (var i = 0; i < follower_pos.length; i++) {  
    leader_pos[i] = leader_pos[i]*size_scaler;
    follower_pos[i] = follower_pos[i]*size_scaler;
  }

  var follower = draw.rect(length*size_scaler, width*size_scaler)
                      // .attr({ fill: '#3ccb3e' })
                      .attr({ fill: '#000' })
                      
  
  var leader = draw.rect(length*size_scaler, width*size_scaler)
                      // .attr({ fill: '#f74246' })
                      .attr({ fill: '#f0f0f0' })
                      

  for (var i = 0; i < follower_pos.length; i++) {  
    leader.animate(duration, '-').move(leader_pos[i], 0);
    follower.animate(duration, '-').move(follower_pos[i], 0);
  }
}