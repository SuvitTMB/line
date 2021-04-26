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
	menuLDP();
});



function menuLDP() {
	var i = 0;
	var str = '';
	var Nub_end = 2 ;
	$("#DisplayLDP").val(cleararray);
	//str+='<div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">';
	str+='<div class="carousel-inner" role="listbox">';
	for (i = 0; i < Nub_end; i++) {
		///sites/intranet/SiteAssets/retail/assets
		if(i==0) {
			str+='<div class="carousel-item active" style="background-image: url(assets/img/slide/slide-'+(i+1)+'.jpg);">';
		} else {
			str+='<div class="carousel-item" style="background-image: url(assets/img/slide/slide-'+(i+1)+'.jpg);">';
		}
		str+='<div class="carousel-container"><div class="carousel-content animate__animated animate__fadeInUp">';
		if(i==0) {
			str+='<h6>ขอขอบคุณสำหรับการเข้าร่วมกิจกรรมตอบคำถาม Market Couduct</h6>';
			str+='<p>ตลอดช่วงการจัดกิจกรรม 8 สัปดาห์ของการแข่งขันตอบคำถาม เราหวังว่าคำถามเหล่านี้จะเป็นประโยชน์สำหรับเพื่อน ๆ สาขาให้นำไปปฏิบัติและใช้งานจริง และผ่านการทดสอบจากธนาคารแห่งประเทศไทย เพื่อให้บรรลุเป้าหมายหลักที่เราได้วางไว้</p>';
			str+='<div class="text-center"><div class="btn-get-started" onclick="OpenPage('+(i+1)+')">ทบทวนความรู้ทั้งหมด</div>';

/*
			str+='<h6>การแข่งขันตอบคำถามสัปดาห์ที่ 8 (7-13 เมย. 64)</h6>';
			str+='<p>การนำเสนอขายผลิตภัณฑ์สินเชื่อที่อยู่อาศัยที่ถูกต้อง, การเสนอขายที่เป็นการรบกวนความเป็นส่วนตัวของลูกค้า, การเสนอขายผลิตภัณฑ์โดยจงใจแสดงข้อมูลเป็นเท็จ, ดาวน์โหลด Checklist  ยืนยันการให้บริการผลิตภัณฑ์, หลักเกณฑ์การบริหารจัดการด้านการให้บริการแก่ลูกค้าอย่างเป็นธรรม</p>';
			str+='<div class="text-center"><div class="btn-get-started" onclick="OpenPage('+(i+1)+')">ไปตอบคำถามกัน</div>';
*/
		} else if(i==1) {
			str+='<center><h6>กิจกรรมแข่งขันตอบคำถาม Market Conduct ลุ้นรางวัลตลอดการแข่งขัน</h6>';
			str+='<p>ท้าให้ลอง ไม่ลองไม่รู้น้า Market Conduct จะไม่ใช่เรื่องที่ยากอีกต่อไป ยิ่งทำมาก ยิ่งได้มาก<br><br>สะสมรางวัลทุกสัปดาห์ และผู้มีคะแนนรวมสูงสุด ลุ้นรับของรางวัลพิเศษ</p></center>';
			str+='<div class="text-center"><div class="btn-get-started" onclick="OpenPage('+(i+1)+')">อ่านรายละเอียด</div>';
			/*
		} else if(i==2) {
			str+='<h6>ข้อมูลสรุปกิจกรรม ประจำสัปดาห์ที่ 7</h6>';
			str+='<p>อธิบายความหมายของหลักการขายที่ดี, ผู้แนะนำการลงทุน ต้องแจ้งให้ลูกค้าทราบเพื่อประกอบการตัดสินใจลงทุน, เงื่อนไขที่เป็นธรรม, Mystery Shopping ช่วยกระบวนการขาย / ให้บริการอย่างเป็นธรรมได้อย่างไร และ ข้อมูลสำคัญใดในเอกสาร sales sheet ต้องแจ้งลูกค้าตอนนำเสนอขายผลิตภัณฑ์ตามหลัก market conduct</p>';
			str+='<div class="text-center"><div class="btn-get-started" onclick="OpenPage('+(i+1)+')">อ่านรายละเอียด</div>';
			*/
		}
		str+='</div></div></div></div>';
	}
	str+='</div>';
	$("#DisplayLDP").html(str);

	$("#DisplayItem").val(cleararray);
	var ii = 0;
	var istr = '';
	istr+='<ol class="carousel-indicators" id="hero-carousel-indicators">';
	for (ii = 0; ii < Nub_end; ii++) {
		if(ii==0) { 
			istr+='<li data-target="#herocarousel" data-slide-to="'+ii+'" class="active"></li>';
		} else {
			istr+='<li data-target="#herocarousel" data-slide-to="'+ii+'" onclick="ClickPaga()" class></li>';
		}
	}
	istr+='</ol>';
	$("#DisplayItem").html(istr);



	//str+='<a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">';
	//str+='<span class="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>';
	//str+='<span class="sr-only">Previous</span></a>';
	//str+='<a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">';
	//str+='<span class="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>';
	//str+='<span class="sr-only">Next</span></a>';
	//str+='<ol class="carousel-indicators" id="hero-carousel-indicators">00000</ol>';
	//str+='</div>';
}


function OpenPage(Gid) {
	if(Gid==1) {
		window.location = "question.html";  
	} else if(Gid==2) {
		window.location = "about.html";  
	} else if(Gid==3) {
		window.location = "answer.html";  
	}}


function MenuLink(Gid) {
	alert(Gid);
}
