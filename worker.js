self.addEventListener('message', function(e){
    var message = e.data + ', I love her';
    self.postMessage(message);
    self.close();
})