    /*arreglos */
    let listaNombresGastos=[];
    let listaValorGastos=[];

    //Esta función se invoca al momento de que usuario hace click en el 
    //boton

    function clickBoton (){
        let nombreGasto = document.getElementById('nombreGasto').value;
        let valorGasto =document.getElementById('valorGasto').value;
        console.log(nombreGasto);
        console.log(valorGasto);

        listaNombresGastos.push(nombreGasto);
        listaValorGastos.push(valorGasto);

        console.log(listaNombresGastos);
        console.log(listaValorGastos);
        // alert('Click de usuario');
        actualizarListaGastos();
    }

    function actualizarListaGastos(){
        const listaElementos = document.getElementById('listaDeGastos');
        const totalElementos = document.getElementById('totalGastos');
        let htmlLista = '';
        let totalGastos = 0;
    
        listaNombresGastos.forEach((elemento, posicion) => {
            const valorGasto = Number(listaValorGastos[posicion]);

            htmlLista+=`<li> ${elemento} - USD ${valorGasto.toFixed(2)} <button onclick="eliminarGasto(${posicion});">Eliminar</button> </li>`;
                   
            totalGastos += Number(valorGasto);
            console.log (totalGastos);

            //Templey string
            
            // console.log(elemento);
            // console.log(posicion);
        });
        console.log(htmlLista);
        listaElementos.innerHTML = htmlLista;
        totalElementos.innerHTML = totalGastos.toFixed(2);
        limpiar();
    }

    function limpiar(){
        nombreGasto = document.getElementById('nombreGasto').value= '';
        valorGasto =document.getElementById('valorGasto').value = '';

    }

    function eliminarGasto(posicion){
        listaNombresGastos.splice(posicion,1);
        listaValorGastos.splice(posicion,1);
        actualizarListaGastos();

    }