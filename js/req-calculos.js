/*
 *	
 *	 CÁLCULOS
 *	
 *          CRÉDITOS:
 *   Instagram: @guilhermezanetti_
 *   GitHub: GuilhermeZanetti
 *   E-mail: @guilherme.t.zanetti@gmail.com
 */

document.getElementById("formCalculoMagnitude").onsubmit = function (e) {
    e.preventDefault();
    prepararCalculo("magnitude");
}
document.getElementById("formCalculoAmplitude").onsubmit = function (e) {
    e.preventDefault();
    prepararCalculo("amplitude");
}
document.getElementById("formCalculoTempo").onsubmit = function (e) {
    e.preventDefault();
    prepararCalculo("tempo");
}

function prepararCalculo(calculo) {

    var Magnitude = 0;
    var Tempo = 0;
    var Amplitude = 0;
    if (calculo == "amplitude") {
        Magnitude = document.querySelector('[data-id-valor="magnitude-amplitude"]').value;
        Tempo = document.querySelector('[data-id-valor="tempo-amplitude"]').value;

        calcular(Amplitude, Tempo, Magnitude, calculo);
    }
    if (calculo == "tempo") {
        Amplitude = document.querySelector('[data-id-valor="amplitude-tempo"]').value;
        Magnitude = document.querySelector('[data-id-valor="magnitude-tempo"]').value;

        calcular(Amplitude, Tempo, Magnitude, calculo);
    }
    if (calculo == "magnitude") {
        Amplitude = document.querySelector('[data-id-valor="amplitude-magnitude"]').value;
        Tempo = document.querySelector('[data-id-valor="tempo-magnitude"]').value;

        calcular(Amplitude, Tempo, Magnitude, calculo);
    }
}

function calcular(A, T, M, calculo) {

    abrirTemplateResultado();
    var resInteiro = document.querySelector("#res");
    var resAprox = document.querySelector("#resAprox");

    if (calculo == "amplitude") {

        var mT = 8 * T;
        var subtracao = (-2.92) + (M * -1);
        var logT = Math.log10(mT) * -3;
        subtracao = subtracao * -1;
        var soma = Math.pow(10, Math.log10(Math.pow(mT, -3))) * Math.pow(10, subtracao);
        var aprox = Math.round(soma);

        resInteiro.value = soma;
        resAprox.value = aprox;

        console.log("resultado amplitude: ", soma);

        mostrarPassoAPasso(A, T, M, soma, calculo);
    }
    if (calculo == "tempo") {
        //var subtracao = (-2.92) + (M * -1);
        ////var logT = Math.log10(8 * icog) * -3;
        //var logA = Math.log10(A);
        ////var soma = logA + (logT * -1) - subtracao;
        ////var aprox = Math.round(soma);

        //var primeiradivisaoportres = 1 / -3;
        //console.log(primeiradivisaoportres);
        //var segundadivisaoportres = subtracao / -3;
        //console.log(segundadivisaoportres);

        //resInteiro.value = soma;
        //resAprox.value = aprox;

    }
    if (calculo == "magnitude") {

        var logA = Math.log10(A);
        var mT = 8 * T;
        var logT = Math.log10(mT) * 3;
        var soma = ((logA + logT) - 2.92);
        var aprox = Math.round(soma);

        resInteiro.value = soma;
        resAprox.value = aprox;

        mostrarPassoAPasso(A, T, M, soma, calculo);
    } else {
        return 'error';
    }
}
function abrirTemplateResultado() {
    document.getElementsByClassName("label-valor")[0].style.display = 'block';
    document.getElementsByClassName("label-valor")[1].style.display = 'block';
    document.getElementsByClassName("divRes")[1].style.display = 'block';
    document.getElementsByClassName("divRes")[0].style.display = 'block';
    document.getElementsByClassName("btnCopy")[0].style.display = 'block';
    document.getElementsByClassName("btnCopy")[1].style.display = 'block';
}

function mostrarPassoAPasso(Amplitude, Tempo, Magnitude, res, calculo) {

    if (res == '-Infinity' || res == 'Infinity' || isNaN(res)) {
        document.querySelector("#howtoError").style.display = 'block';
        switch (calculo) {
            case 'amplitude':
                document.querySelector("#howtoErrorAmplitude").style.display = "block";
                document.querySelector("#conteudo-res-amplitude").style.display = "none";
                break;
            case 'magnitude':
                document.querySelector("#howtoErrorMagnitude").style.display = "block";
                document.querySelector("#conteudo-res-magnitude").style.display = "none";
                break;
            case 'tempo':
                document.querySelector("#howtoErrorTempo").style.display = "block";
                document.querySelector("#conteudo-res-tempo").style.display = "none";
                break;
        }
    } else {
        definirValoresPassoAPasso(Amplitude, Tempo, Magnitude, calculo, res);
        document.querySelector("#howtoError").style.display = 'none';
        document.querySelector("#howto").style.display = 'block';
        switch (calculo) {
            case 'amplitude':
                document.querySelector(".how-to-amplitude").style.display = 'block';
                break;
            case 'magnitude':
                document.querySelector(".how-to-magnitude").style.display = 'block';
                break;
            case 'tempo':
                document.querySelector(".how-to-tempo").style.display = 'block';
                break;
        }
    }
}

function definirValoresPassoAPasso(A, T, M, calculo, res) {

    switch (calculo) {
        case 'magnitude':

            var mT = 8 * T;
            var time = document.querySelector("#time-steps");
            time.innerHTML = T;

            for (var i = 0; i < 4; i++) {
                var amplit = document.querySelectorAll('.amplitude-log-step')[i];
                amplit.innerHTML = A;
            }
            for (var i = 0; i < 3; i++) {
                var mTSteps = document.querySelectorAll('.mT-steps')[i];
                mTSteps.innerHTML = mT;
            }
            document.querySelector("#res-steps").innerHTML = res;
            break;

        case 'amplitude':

            var time = document.querySelector("#time-steps-amplitude");
            time.innerHTML = T;
            var mT = 8 * T;
            var resMag = (-2.92) + (M * -1);
            resMag = resMag.toFixed(2);
            var resPosMag = resMag * -1;

            for (var i = 0; i < 9; i++) {
                var amplit = document.querySelectorAll('.amplitude-icog-step')[i];
                amplit.innerHTML = '<em>A</em>';
            }
            for (var i = 0; i < 7; i++) {
                var mTSteps = document.querySelectorAll('.mT-steps-amplitude')[i];
                mTSteps.innerHTML = mT;
            }
            for (var i = 0; i < 2; i++) {
                var MSteps = document.querySelectorAll('.magnitude-step')[i];
                MSteps.innerHTML = M;
            }
            for (var i = 0; i < 1; i++) {
                var MSteps = document.querySelectorAll('.result-magnitude-step')[i];
                MSteps.innerHTML = resMag;
            }
            for (var i = 0; i < 5; i++) {
                var MSteps = document.querySelectorAll('.result-magnitude-pos-step')[i];
                MSteps.innerHTML = resPosMag;
            }
            document.querySelector("#res-steps-amplitude").innerHTML = res;
            break;

        case 'tempo':


            break;
    }

}
