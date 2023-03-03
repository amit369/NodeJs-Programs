const socket = io();

socket.on('countUpdate', (count) => {
    console.log('The count has been updated!', count);
})
document.querySelector('#mess')

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked');
    socket.emit('increment');
})

socket.on('message', 'Welcome!');
document.querySelector('#message-form').addEventListener('submit', (e)=> {
    e.preventDefault();
    const message2 = e.target.elements.message.value;
    const message = document.querySelector('input').value;
    socket.emit('sendMessage', message);
})

document.querySelector('#send-location').addEventListener('click', () => {
   if(!navigator.geolocation)
   {
    return alert('Geolocation is not supported by your browser')
   }
   navigator.geolocation.getCurrentPosition( (position) => {
          console.log(position);
          socket.emit('sendLocation', {
            lattitude : position.coords.lattitude,
            longitude : position.coords.longitude
          })
   })
})