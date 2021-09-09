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
    descricaoEfeitosOcorrencia(M)
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

function descricaoEfeitosOcorrencia(Magnitude) {
    document.querySelector("#descricao-terremoto").style.display = "block";
    var tbhead = `<tr>
                    <th>Efeitos</th>
                    <th>Magnitude</th>
                    <th>Descrição</th>
                    <th>Frequência</th>
                  </tr>`;

    var MagnitudeInt = parseInt(Magnitude);
    if (MagnitudeInt < 2.0) {
        let html =
            `<tr>
                <td>Microssismos</td>
                <td>&lt; 2,0</td>
                <td>Microssismos não perceptíveis pelos humanos. </td>
                <td>~8 000 por dia</td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 2.0 && MagnitudeInt <= 2.9) {
        let html =
            `<tr>
                <td align="center">Muito pequeno</td>
                <td align="center">2,0-2,9</td>
                <td>Geralmente não sentido, apenas detectado/registado por sismógrafos.</td>
                <td>~1 000 por dia</td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 3.0 && MagnitudeInt <= 3.9) {
        let html =
            `<tr>
                <td align="center">Pequeno</td>
                <td align="center">3,0-3,9</td>
                <td>Frequentemente sentido, mas raramente causa danos.</td>
                <td>~49 000 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 4.0 && MagnitudeInt <= 4.9) {
        let html =
            `<tr>
                <td align="center">Ligeiro</td>
                <td align="center">4,0-4,9</td>
                <td>Tremor notório de objectos no interior de habitações, ruídos de choque entre objectos. Sismo significativo, mas com danos importantes improváveis.</td>
                <td>~6 200 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 5.0 && MagnitudeInt <= 5.9) {
        let html =
            `<tr>
                <td align="center">Moderado</td>
                <td align="center">5,0-5,9</td>
                <td>Pode causar danos importantes em edifícios mal concebidos e em zonas restritas. Provoca apenas danos ligeiros em edifícios bem construídos.</td>
                <td>800 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 6.0 && MagnitudeInt <= 6.9) {
        let html =
            `<tr>
                <td align="center">Forte</td>
                <td align="center">6,0-6,9</td>
                <td>Pode ser destruidor em áreas habitadas num raio de até 160 quilómetros em torno do epicentro.</td>
                <td>120 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 7.0 && MagnitudeInt <= 7.9) {
        let html =
            `<tr>
                <td align="center">Grande</td>
                <td align="center">7,0-7,9</td>
                <td>Pode provocar danos graves em zonas vastas.</td>
                <td>18 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 8.0 && MagnitudeInt <= 8.9) {
        let html =
            `<tr>
                <td align="center">Importante</td>
                <td align="center">8,0-8,9</td>
                <td>Pode causar danos sérios num raio de várias centenas de quilómetros em torno do epicentro.</td>
                <td>1 por ano
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt >= 9.0 && MagnitudeInt <= 9.9) {
        let html =
            `<tr>
                <td align="center">Excepcional</td>
                <td align="center">9,0-9,9</td>
                <td>Devasta zonas num raio de milhares de quilómetros em torno do epicentro.</td>
                <td>1 em cada 20 anos
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    } else if (MagnitudeInt > 10) {
        let html =
            `<tr>
                <td align="center">Extremo</td>
                <td align="center">&gt;10,0</td>
                <td>Desconhecido. Na história conhecida nunca foi registado um sismo desta magnitude.</td>
                <td>Extremamente raro (desconhecido).
                </td>
            </tr>`
        document.querySelector("#table-desc").innerHTML = tbhead + html;
    }
}