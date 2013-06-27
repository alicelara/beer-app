$(document).ready(function(){
	var lcbo_url = "http://lcboapi.com/products";
	$('button').click(function(event){
		$.ajax(
			lcbo_url,
			{
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					var resultLength = data.result.length;
					for(var i = 0; i < resultLength; i++){
						$('ul.my-list').append('<br><li class="name">Name: ' + data.result[i].name)
						$('ul.my-list').append('<span class="price">Price: CAD' + data.result[i].price_in_cents + '</span></li><br>');
					}
				}			
			}
		);
		return false;
	});	

});
