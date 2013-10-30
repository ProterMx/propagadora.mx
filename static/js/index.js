var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#features"))
			.add($("#index"))
			.add($("#producto1"))
			.add($("#producto2"))
			.add($("#producto3"))
			.add($("#producto4"))
			.add($("#producto5"))
			.add($("#producto6"))
			.add($("#producto7"))
			.add($("#producto8"))
			.add($("#galeria"))
			.add($("#boo"))
			.add($("#sandbox"))
			.add($("#me"));

	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation
	parallax.index.onload=function(){
		setRight("producto1", "Distribuimos");
		setTop("sandbox", "Contacto");
		setLeft("producto2","Protegemos");
		setBottom("galeria","Galería");
	};

	parallax.producto1.onload=function(){
		setLeft("index", "Home");
		setTop("sandbox", "Contacto");
		setRight("producto2", "Protegemos");
		setBottom("galeria","Galería");
	};

	parallax.producto2.onload=function(){
		setLeft("producto1", "Distribuimos");
		setTop("sandbox", "Contacto");
		setRight("index", "Home");
		setBottom("galeria","Galería");
	};

	parallax.producto3.onload=function(){
		setLeft("producto2", "Protegemos");
		setTop("sandbox", "Contacto");
		setRight("producto4", "producto4");
		setBottom("galeria","Galería");
	};

	parallax.producto4.onload=function(){
		setLeft("producto3", "producto3");
		setTop("sandbox", "Contacto");
		setRight("producto5", "producto5");
		setBottom("galeria","Galería");
	};

	parallax.producto5.onload=function(){
		setLeft("producto4", "producto4");
		setTop("sandbox", "Contacto");
		setRight("producto6", "producto6");
		setBottom("galeria","Galería");
	};

	parallax.producto6.onload=function(){
		setLeft("producto5", "producto5");
		setTop("sandbox", "Contacto");
		setRight("producto7", "producto7");
		setBottom("galeria","Galería");
	};

	parallax.producto7.onload=function(){
		setLeft("producto6", "producto6");
		setTop("sandbox", "Contacto");
		setRight("producto8", "producto8");
		setBottom("galeria","Galería");
	};

	parallax.producto8.onload=function(){
		setLeft("producto7", "producto7");
		setTop("sandbox", "Contacto");
		setRight("features", "Features");
		setBottom("galeria","Galería");
	};setBottom("index","Home");

	parallax.sandbox.onload=function(){
		setBottom("index","Home");	
	};

	parallax.galeria.onload=function(){
		setTop("index","Home");
	};

	parallax.features.onload=function(){
		setLeft("producto8", "producto8");
		setTop("sandbox", "SandBox");
		setRight("me", "The Guy");
	};

	parallax.me.onload=function(){
		setLeft("features", "Features");
		setTop("sandbox", "SandBox");
		setRight("index","Home");
	};


	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.index.show();

});
