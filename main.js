

  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();


  })

  function showPopup(){
        const timeLimit = 5 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })


// grilla animada
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});


});


// jquery evento mostrar contenido

(function($) {
	$('.card-image').click(function(){
	  $(this).closest('.card').toggleClass('open-card');
	});
  })(jQuery);


// animaciones con gsap
  
  gsap.from('.title', {
	opacity: 0, 
	duration: 1,
	y: -50

});

gsap.from('.logo', {
	opacity: 0, 
	duration: 1,
	y: -10

});

gsap.from('.nav-links', {
	opacity: 0, 
	duration: 1,
	y: -10

});

gsap.from('.burger', {
	opacity: 0, 
	duration: 1,
	y: -10

});

let tween = gsap.from('#item-transicion',{
	duration: .3,
	y: -200,
	scale: 0,
	stragger: 0.5,
	delay: 1

});

/*---------------------------------------*/
//      AJAX CON JQUERY 
/*---------------------------------------*/


$('#btnCargar').click(function(){

	var esperar = 2000;
	$.ajax({

		url: "cart.html",
		beforeSend : function(){
			$('#contenidos').text('Cargando...');
		} ,

		success : function(data){
			setTimeout(function(){
				$('#contenidos').html(data);

			},esperar
			);
		}
	});
});


