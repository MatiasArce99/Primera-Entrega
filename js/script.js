alert('Bienvendo a Pagos Online');
alert('Ingrese impuesto a Pagar');

let total = 0;
let luz = parseFloat(prompt('Energía'));
let gas = parseFloat(prompt('Gas'));
let agua = parseFloat(prompt('Agua'));
let internet = parseFloat(prompt('Internet'));
let videoCable = parseFloat(prompt('Video Cable'));
total = luz + gas + agua + internet + videoCable;

alert('Total a pagar: $'+total);

let opcion = prompt('Seleccione forma de pago:\n1. Débito\n2. Mercado Pago\n3. Finalizar');

let debito = 500000;
let mercadoPago = 800000;

while(opcion != 3){
    
    switch(opcion){
        case '1':
            if(total > debito){
                alert('Saldo insuficiente en cuenta bancaria');
            }else{
                debito = debito - total;
                alert('Pago efectuado con débito.\nSaldo disponible: $'+debito);
            }
            break;
        case '2':
            if(total > mercadoPago){
                alert('Saldo insuficiente en cuenta Mercado Pago');
            }else{
                mercadoPago = mercadoPago - total;
                alert('Pago efectuado con Mercado Pago.\nSaldo disponible: $'+mercadoPago);
            }
            break;
        default:
            alert('Opción incorrecta');
            break;
    }

    opcion = parseInt(prompt('Seleccione forma de pago:\n1. Débito\n2. Mercado Pago\n3. Finalizar'));
}

alert('Pago finalizado');

