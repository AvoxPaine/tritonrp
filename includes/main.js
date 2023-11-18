// Our cycle script so we can make the pictures fade between each other.
$('#background').cycle({ 
	fx: 'fade', // You can change the FX way the pictures changes with, an example scrollDown. Check out http://jquery.malsup.com/cycle/ for more about that matter
	speed: 2000, 
	timeout: 2000,
	containerResize: false,
	slideResize: false
});