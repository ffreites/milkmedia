function AnimacionHome() {
    var controller = new ScrollMagic.Controller();
    var t2 = new TimelineMax();
    var sceneMilk = new ScrollMagic.Scene({
        triggerElement: "#contenedor-milk-home",
        triggerHook: 1
    });
    var sceneColumn = new ScrollMagic.Scene({
        triggerElement: "#contenedor-columna",
        triggerHook: 1
    });
    var sceneWords = new ScrollMagic.Scene({
        triggerElement: "#contenedor-frases",
        triggerHook: 1
    });
    var coord = jQuery("#imperdible-milk-home").position();

    sceneMilk
        .on("enter", function() {
            jQuery("#imperdible-milk-home").addClass("imperdible-milk-left", 700);
        })
        .on("leave", function() {
            jQuery("#imperdible-milk-home").removeClass("imperdible-milk-left", 700);
        })
        .addTo(controller);
    sceneColumn
        .on("enter", function() {
            jQuery("#milker-columna-izquierda").addClass("imperdible-ancho-0", 700);
        })
        .on("leave", function() {
            jQuery("#milker-columna-izquierda").removeClass("imperdible-ancho-0", 700);
        })
        .addTo(controller);
    sceneWords
        .on("enter", function() {
            t2
                .add(TweenMax.to("#msjPeanut", 2, { delay: 1, opacity: 1 }))
                .add(TweenMax.to("#msjPeanut", 2, { delay: 2, opacity: 0 }))
                .add(TweenMax.to("#msjFrie", 2, { opacity: 1 }))
                .add(TweenMax.to("#msjFrie", 2, { delay: 2, opacity: 0 }))
                .add(TweenMax.to("#msjCookie", 2, { opacity: 1 }))
                .add(TweenMax.to("#msjCookie", 2, { delay: 2, opacity: 0 }));
        })
        .on("leave", function() {
            t2.kill();
            t2 = new TimelineMax();
            t2
                .add(TweenMax.to("#msjPeanut", 0, { opacity: 0 }))
                .add(TweenMax.to("#msjFrie", 0, { opacity: 0 }))
                .add(TweenMax.to("#msjCookie", 0, { opacity: 0 }));
        })
        .addTo(controller);
}

function CambiarVelo(capa){
    switch(capa) {
        case "capa0":
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".imperdible-capa.capa0").removeClass("imperdible-ocultar", 800);
            break;
        case "capa1":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".img11").removeClass("imperdible-ocultar");
            jQuery(".img12").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa1").removeClass("imperdible-ocultar", 800);
            break;
        case "capa2":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".img21").removeClass("imperdible-ocultar");
            jQuery(".img22").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa2").removeClass("imperdible-ocultar", 800);
            break;
        case "capa3":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".img31").removeClass("imperdible-ocultar");
            jQuery(".img32").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa3").removeClass("imperdible-ocultar", 800);
            break;
        case "capa4":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".img41").removeClass("imperdible-ocultar");
            jQuery(".img42").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa4").removeClass("imperdible-ocultar", 800);
            break;
        case "capa5":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery(".img51").removeClass("imperdible-ocultar");
            jQuery(".img52").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa5").removeClass("imperdible-ocultar", 800);
            break;
        case "capa6":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa7").hasClass("imperdible-ocultar")) {
                jQuery(".img71").addClass("imperdible-ocultar");
                jQuery(".img72").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa7").addClass("imperdible-ocultar", 800);
            }
            jQuery("img.img61").removeClass("imperdible-ocultar");
            jQuery("img.img62").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa6").removeClass("imperdible-ocultar", 800);
            break;
        case "capa7":
            if(!jQuery(".imperdible-capa.capa0").hasClass("imperdible-ocultar")) {
                jQuery(".imperdible-capa.capa0").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa1").hasClass("imperdible-ocultar")) {
                jQuery(".img11").addClass("imperdible-ocultar");
                jQuery(".img12").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa1").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa2").hasClass("imperdible-ocultar")) {
                jQuery(".img21").addClass("imperdible-ocultar");
                jQuery(".img22").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa2").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa3").hasClass("imperdible-ocultar")) {
                jQuery(".img31").addClass("imperdible-ocultar");
                jQuery(".img32").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa3").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa4").hasClass("imperdible-ocultar")) {
                jQuery(".img41").addClass("imperdible-ocultar");
                jQuery(".img42").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa4").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa5").hasClass("imperdible-ocultar")) {
                jQuery(".img51").addClass("imperdible-ocultar");
                jQuery(".img52").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa5").addClass("imperdible-ocultar", 800);
            }
            if(!jQuery(".imperdible-capa.capa6").hasClass("imperdible-ocultar")) {
                jQuery(".img61").addClass("imperdible-ocultar");
                jQuery(".img62").addClass("imperdible-ocultar");
                jQuery(".imperdible-capa.capa6").addClass("imperdible-ocultar", 800);
            }
            jQuery("p .img71").removeClass("imperdible-ocultar");
            jQuery("p .img72").removeClass("imperdible-ocultar");
            jQuery(".imperdible-capa.capa7").removeClass("imperdible-ocultar", 800);
            break;
    }
}

function ExpandirCelda(celda) {
    var objeto;

    switch(celda) {
        case "celda11":
            objeto = jQuery(".imperdible-celda11");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda11");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa1");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda11 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-morado");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda11 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda11 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda12");
            ContraerCelda("celda13");
            ContraerCelda("celda21");
            ContraerCelda("celda22");
            ContraerCelda("celda23");
            ContraerCelda("celda24");
            break;
        case "celda12":
            objeto = jQuery(".imperdible-celda12");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda12");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa2");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda12 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-verde");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda12 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda12 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda13");
            ContraerCelda("celda21");
            ContraerCelda("celda22");
            ContraerCelda("celda23");
            ContraerCelda("celda24");
            break;
        case "celda13":
            objeto = jQuery(".imperdible-celda13");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda13");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa3");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda13 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-rosado");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda13 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda13 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda12");
            ContraerCelda("celda21");
            ContraerCelda("celda22");
            ContraerCelda("celda23");
            ContraerCelda("celda24");
            break;
        case "celda21":
            objeto = jQuery(".imperdible-celda21");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda21");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa4");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda21 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-azul");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda21 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda21 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda12");
            ContraerCelda("celda13");
            ContraerCelda("celda22");
            ContraerCelda("celda23");
            ContraerCelda("celda24");
            break;
        case "celda22":
            objeto = jQuery(".imperdible-celda22");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda22");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa5");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda22 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-naranja");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda22 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda22 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda12");
            ContraerCelda("celda13");
            ContraerCelda("celda21");
            ContraerCelda("celda23");
            ContraerCelda("celda24");
            break;
        case "celda23":
            objeto = jQuery(".imperdible-celda23");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda23");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa6");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda23 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-morado");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda23 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda23 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda12");
            ContraerCelda("celda13");
            ContraerCelda("celda21");
            ContraerCelda("celda22");
            ContraerCelda("celda24");
            break;
        case "celda24":
            objeto = jQuery(".imperdible-celda24");
            if(objeto.hasClass("imperdible-celda-ampliada")) {
                ContraerCelda("celda24");
                CambiarVelo("capa0");
            } else {
                CambiarVelo("capa7");
                objeto.addClass("imperdible-celda-ampliada", 800);
                objeto = jQuery(".imperdible-celda24 .imperdible-image-service");
                objeto.addClass("imperdible-fondo-verde");
                objeto.removeClass("imperdible-image-closed", 800);
                objeto = jQuery(".imperdible-celda24 .imperdible-title");
                objeto.removeClass("imperdible-title-short", 800);
                objeto = jQuery(".imperdible-celda24 .imperdible-content");
                objeto.removeClass("imperdible-content-short", 800);
                objeto.removeClass("imperdible-content-flat", 800);
            }
            ContraerCelda("celda11");
            ContraerCelda("celda12");
            ContraerCelda("celda13");
            ContraerCelda("celda21");
            ContraerCelda("celda22");
            ContraerCelda("celda23");
            break;
    }
}

function ContraerCelda(celda) {
    var objeto;

    switch(celda) {
        case "celda11":
            objeto = jQuery(".imperdible-celda11");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda11 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-morado");
            objeto = jQuery(".imperdible-celda11 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda11 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda12":
            objeto = jQuery(".imperdible-celda12");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda12 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-verde");
            objeto = jQuery(".imperdible-celda12 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda12 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda13":
            objeto = jQuery(".imperdible-celda13");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda13 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-rosado");
            objeto = jQuery(".imperdible-celda13 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda13 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda21":
            objeto = jQuery(".imperdible-celda21");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda21 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-azul");
            objeto = jQuery(".imperdible-celda21 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda21 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda22":
            objeto = jQuery(".imperdible-celda22");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda22 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-naranja");
            objeto = jQuery(".imperdible-celda22 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda22 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda23":
            objeto = jQuery(".imperdible-celda23");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda23 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-morado");
            objeto = jQuery(".imperdible-celda23 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda23 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
        case "celda24":
            objeto = jQuery(".imperdible-celda24");
            objeto.removeClass("imperdible-celda-ampliada", 800);
            objeto = jQuery(".imperdible-celda24 .imperdible-image-service");
            objeto.addClass("imperdible-image-closed", 800);
            objeto.removeClass("imperdible-fondo-verde");
            objeto = jQuery(".imperdible-celda24 .imperdible-title");
            objeto.addClass("imperdible-title-short", 800);
            objeto = jQuery(".imperdible-celda24 .imperdible-content");
            objeto.addClass("imperdible-content-flat", 800);
            objeto.addClass("imperdible-content-short", 800);
            break;
    }
}
// imperdible-celda11
{/* <script type="text/javascript">
<!--
    funcion();
 //--></script> */}