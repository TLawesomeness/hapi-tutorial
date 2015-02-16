'use strict';

module.exports = {
  handler: function(request, reply) {
    var numbers = request.params.list.split(',');
    var squares = numbers.map(function(n) {return n * n;});
    reply.view('templates/math/squares', {numbers: numbers,  squares: squares});
  }
  // handler: function(request, reply) {
  //   var squares = (request.params.x * request.params.x) * (request.params.y * request.params.y) * (request.params.z * request.params.z);
  //   reply.view('templates/math/squares', {x: request.params.x, y: request.params.y, z: request.params.z,  squares: squares});
  // }
};
