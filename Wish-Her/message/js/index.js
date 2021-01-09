this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Happy Birthday! You are so special in my life. You are the only and one of the best person for me. It doesn't matter if you are at the other side of the world. You are always in my mind. On your special day I wish you only smiles and joy. May each minute of your life be filled with happiness and may this birthday be just perfect for you! My wish for you on your birthday is whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. \nOnce again Happy Birthday Maria!";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.15);
}
