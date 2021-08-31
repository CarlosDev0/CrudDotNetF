$(document).ready(function () {
    ConsultarClientes();
});

function ConsultarClientes() {
    $.ajax({
        url: '/Cliente/ConsultarClientes',
        dataType: "json",
        data: "",
        success: function (result) {
            if (result != null) {
                var tabla = document.getElementById("tablaCliente");
                $.each(result, function (x, y) {
                    $('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id +' , `'+y.Nombre +'`,`'+y.Direccion+'`)">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);

                });
                
            }
        }
    });
}

function actualizar(id,Nombre,Direccion) {
    $('#modal-ActualizarCliente').modal('show');
    
    $("#txtIdActualizar").val(id);
    $("#txtNombreActualizar").val(Nombre);
    $("#txtdireccionActualizar").val(Direccion);
}

function eliminar(id) {
    $.ajax({
        url: '/Cliente/EliminarCliente',
        dataType: "json",
        data: {Id:id},
        success: function (result) {
            if (result != null) {
                limpiarTabla();
                var tabla = document.getElementById("tablaCliente");
                $.each(result, function (x, y) {
                    /*$('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id + ')">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);*/
                    $('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id + ' , `' + y.Nombre + '`,`' + y.Direccion + '`)">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);

                });

            }
        }
    });
    
}

function nuevo() {
    $('#modal-Cliente').modal('show');
    
}

$('#btnCancelarNuevoCliente').on('click', function () {
    $('#modal-Cliente').modal('hide');
});

$('#btnCancelarClienteActualizar').on('click', function () {
    $('#modal-ActualizarCliente').modal('hide');
});

$('#btnGuardarNuevoCliente').on('click', function () {
    var nombre = $('#txtNombre').val();
    var direccion = $('#txtdireccion').val();
    if (nombre == undefined) {
        $("#txtMensaje").html("Por favor ingrese el Nombre del cliente");
        setTimeout(function () {
            $("#txtMensaje").html("");
        }, 5000);
    } else if (direccion == undefined) {
        $("#txtMensaje").html("Por favor ingrese la direccion del cliente");
        setTimeout(function () {
            $("#txtMensaje").html("");
        }, 5000);
    } else {
        
        $.ajax({
            url: '/Cliente/GuardarCliente',
            dataType: "json",
            data: {Nombre: nombre, Direccion: direccion},
            success: function (result) {
                if (result != null) {
                    limpiarTabla();
                    var tabla = document.getElementById("tablaCliente");
                    $.each(result, function (x, y) {
                        /*$('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id + ')">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);*/
                        $('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id + ' , `' + y.Nombre + '`,`' + y.Direccion + '`)">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);

                    });
                    $("#txtNombre").val('');
                    $("#txtdireccion").val('');
                }
            }
        });
    }

});



$('#btnGuardarClienteActualizar').on('click', function () {
    var nombre = $('#txtNombreActualizar').val();
    var direccion = $('#txtdireccionActualizar').val();
    var id = $('#txtIdActualizar').val();
    if (nombre == undefined) {
        $("#txtMensajeActualizar").html("Por favor ingrese el Nombre del cliente");
        setTimeout(function () {
            $("#txtMensajeActualizar").html("");
        }, 5000);
    } else if (direccion == undefined) {
        $("#txtMensajeActualizar").html("Por favor ingrese la direccion del cliente");
        setTimeout(function () {
            $("#txtMensajeActualizar").html("");
        }, 5000);
    } else {

        $.ajax({
            url: '/Cliente/ActualizarCliente',
            dataType: "json",
            data: { Nombre: nombre, Direccion: direccion, Id: id },
            success: function (result) {
                if (result != null) {
                    limpiarTabla();
                    var tabla = document.getElementById("tablaCliente");
                    $.each(result, function (x, y) {
                        $('<tr><td>' + y.Id + '</td><td>' + y.Nombre + '</td><td>' + y.Direccion + '</td><td><input type="button" value="actualizar" onClick="actualizar(' + y.Id + ' , `' + y.Nombre + '`,`' + y.Direccion + '`)">&nbsp<input type="button" value="eliminar" onClick="eliminar(' + y.Id + ')"></td></tr>').appendTo(tabla);

                    });
                    $("#txtNombreActualizar").val('');
                    $("#txtdireccionActualizar").val('');
                    $('#modal-ActualizarCliente').modal('hide');
                }
            }
        });
    }

});

function limpiarTabla() {
    $("#tablaCliente tbody tr").remove();

}