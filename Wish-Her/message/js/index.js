this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "ပျော်ရွှင်ဖွယ်မွေးနေ့လေးပါ မီးမီး။ You are special for me. On your special day အပြုံးများနှင့်အတူပျော်ရွှင်မှုများပြည့်နေပါစေလို့ ကျနော်ဆုတောင်းပေးပါတယ်။ May each minute of your life be filled with happiness and may this birthday be just perfect for you! My wish for you on your birthday is whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. အသက် ၂၀နှစ်ပြည့်မွေးနေ့မှစ၍ နေ့ရက်တိုင်းမှနှစ်ပေါင်းများစွာ ကျန်းကျန်းမာမာ လှလှပပနဲ့ ကိုယ်ရည်မှန်းထားတဲ့အရာများကို အောင်မြင်မှုများရရှိနိုင်ပါစေ။ ကျနော်တို့နှစ်ယောက်အခုလိုသိရ၊တွေခဲ့ရလို့လည်း အများကြီးကျေးဇူးတင်ပါတယ်။ ကျနော့်နာမည်အပြည့်အစုံသိတယ်မလား?😄 \nOnce again Happy Birthday! Nant Ei Yadanar Phyo✨"; // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
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
