document.addEventListener('DOMContentLoaded', ()=> {
	
	function toggleMenu(){

		const menu_itemss = document.getElementById('menu_items');

		menu_itemss.style.maxHeight = "0px";

		if (menu_itemss.style.maxHeight == "0px") {

			menu_itemss.style.maxHeight = "200px";

		}else{

			menu_itemss.style.maxHeight = "0px";

		}
	}

});

	