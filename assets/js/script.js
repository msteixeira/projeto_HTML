var slideItem = 0;
function passarSlide() {
	setInterval(passarSldie, 4000); //geralmente em sites que vao para o ar, sera de 7000 a 10000

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for (var i=0; i<objs.length; i++) {
        objs[i].style.width = slidewidth+"px";
    }
}
function passarSldie () {
	var slidewidth = document.getElementById("slideshow").offsetWidth; //pegar os dados do slideshow e vai guardar o item que esta mostrado atual
	if(slideItem >= 3) {
		slideItem = 0; // se o slide item chegar ao ultimo item, ele vai voltar ao primeiro.
	} else {
		slideItem++; // se nao chegar no ultimo item, vai passar mais 1.
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px"; //seta o -753 * 0, -753*1, -753*2 e -753*3 para mudar o slide. 
}

function mudarSlide (pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth; // armazenar a posição do clique
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px"; // aplicar a posição
	//função para mudar slide ao clicar na bolinha, 
}
function toggleMenu() {
	var menu = document.getElementById("menu"); //pegando o valor do menu

	if (menu.style.display == 'none' || menu.style.display == '') { // testando o valor do menu com valor none ou for vazio pois assim que carrega a pagina ele esta com valor vazio e o 1° clique nao funcionar
		menu.style.display = "block"; // se o valor do menu for none ele vai alterar para block
	} else { //se nao
		menu.style.display = "none"; // ele vai alterar para none = fechar menu
	}
}

// Script abaixo mostrar data no rodape
function date_time(id){

	
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outbro', 'Novembro', 'Dezembro');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Domingo', 'Segunda - Feira', 'Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sabado');
    h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    result = '<span class="blue"> Rio de Janeiro, '+days[day]+' dia '+d+' de '+months[month]+' do ano '+year+' ás '+h+':'+m+':'+s+'</span>';
    document.getElementById(id).innerHTML = result;
	setInterval(date_time, 1000); //atualizar os segundos
    setTimeout('date_time("'+id+'");','1000');
    return true;
    }