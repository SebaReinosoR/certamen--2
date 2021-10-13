define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    //jquery
    (function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var RegionesYcomunas = {
        "regiones": [{
                "NombreRegion": "Valparaíso",
                "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
            },
            {
                "NombreRegion": "Región Metropolitana de Santiago",
                "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
            }]
    };
    $(document).ready(function () {
        var iRegion = 0;
        var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
        var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';
        jQuery.each(RegionesYcomunas.regiones, function () {
            htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
            iRegion++;
        });
        $('#regiones').html(htmlRegion);
        $('#comunas').html(htmlComunas);
        $('#regiones').change(function () {
            var iRegiones = 0;
            var valorRegion = $(this).val();
            var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
            jQuery.each(RegionesYcomunas.regiones, function () {
                if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
                    var iComunas_1 = 0;
                    jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
                        htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas_1] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas_1] + '</option>';
                        iComunas_1++;
                    });
                }
                iRegiones++;
            });
            $('#comunas').html(htmlComuna);
        });
        $('#comunas').change(function () {
            if ($(this).val() == 'sin-region') {
                alert('selecciones Región');
            }
            else if ($(this).val() == 'sin-comuna') {
                alert('selecciones Comuna');
            }
        });
        $('#regiones').change(function () {
            if ($(this).val() == 'sin-region') {
                alert('selecciones Región');
            }
        });
    });
    $(".btn-primary").click(function () {
        var nombre = $('#subNombreForm').val();
        var edad = $('#subedadForm').val();
        var fecha = $('#dateForm').val();
        var estatura = $('#sigEstatura').val();
        var peso = $('#sigPeso').val();
        var Fcardiaca = $('#sigCardiaca').val();
        var fechaM = document.getElementById("fechaMuestra");
        var nombreM = document.getElementById("nombreMuestra");
        var edadM = document.getElementById("edadMuestra");
        var estaturaS = document.getElementById("estaturVal");
        var pesoS = document.getElementById("pesoVal");
        var cardiacaS = document.getElementById("cardiacaVal");
        nombreM.textContent = nombre;
        edadM.textContent = edad + " anios";
        fechaM.textContent = fecha;
        estaturaS.textContent = estatura;
        pesoS.textContent = peso;
        cardiacaS.textContent = Fcardiaca;
    });
    $(".btn-secondary").click(function () {
        var fecha = $('#dateInput').val();
        var motivo = $('#motivoInput').val();
        var antecedete = document.getElementById("anteClinicos");
        var motivoC = document.createElement("li");
        var i;
        antecedete.appendChild(motivoC).innerHTML = "<p id= MClinico >" + motivo + "</p> <p id= Mfecha >Fecha: " + fecha + "</p><span class=material-icons id= eliminar >delete</span> ";
    });
    $(document).ready(function () {
        $("#eliminar").click(function (event) {
            $("#Mfecha").remove();
            $('#MClinico').remove();
        });
    });
    $('#editar').on("click", function () {
        $('#form-editar').show('slow');
        $('.form-control').show('slow');
    });
    $('#cerrar').on("click", function () {
        $('#form-editar').hide('slow');
        $('.form-control').hide('slow');
    });
    $('#person_add').on("click", function () {
        $('#form-agregar').toggle('slow');
    });
});
