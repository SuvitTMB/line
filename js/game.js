var cleararray = "";


$(document).ready(function () {
	/*
	var currURL = window.location.href;
	if (document.location.protocol == "https:")
	{
	   currURL = currURL.replace("https:", "http:");
	   window.location = currURL ; 
	   return;
	} 
	TTVBanner();
	TTVTopVDO();
	TTVLatest();
	TTVRandom();
	TTVFavorites();
	TTVHistory();
	MenuCategories();
	//GroupNews(sMenu)
	*/
	MenuNumber();
});



function MenuNumber() {
	var i = 0;
	var str = '';
	var Nub_end = 100 ;
	$("#DisplayNumber").val(cleararray);
	for (i = 0; i < Nub_end; i++) {
		if(i==99) {
			str+='<div class="icon-number" data-aos="fade-up" onclick="ClickNumber(00)">00';
			str+='<div style="font-size:10px;color:#000000;">เลือก : 40</div></div>';
		} else {
			str+='<div class="icon-number" data-aos="fade-up" onclick="ClickNumber('+(i+1)+')">'+(i+1)+'';
			str+='<div style="font-size:10px;color:#000000;">เลือก : 40</div></div>';
		}
	}
	$("#DisplayLDP").html(str);
}


function ClickNumber(Gnumber) {
	alert(Gnumber);
}