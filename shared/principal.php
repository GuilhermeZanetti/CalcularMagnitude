<!-- main content -->
<div class="mt-5" style="margin: 10% 10%">
    <section id="calculate" style="margin:auto !important;">
        <!-- Magnitude -->
        <div class="container">
            <div class="row" data-row-calculo="magnitude">
                <div class="container">
                    <div class="row calculator-title">
                        <h1 id="resultado-magnitude">Calcular <strong>magnitude</strong> de um sismo na escala Richter
                        </h1>
                    </div>
                    <div class="row">
                        <div class="container">
                            <div class="calculate col-md-12">
                                <form id="formCalculoMagnitude">
                                    <div class="container">
                                        <div class="col-md-4 col-lg-12 col-sm-6">
                                            <label class="calc-label" for="amplitude">Insira a amplitude<sup
                                                    class="unidade-medida">(mm)</sup></label>
                                            <input type="number" class="calc-input" name="amplitude" value="" required
                                                data-calculo="magnitude" data-tipo-valor="amplitude"
                                                data-id-valor="amplitude-magnitude" />
                                        </div>
                                        <div class="col-md-4 col-lg-12 col-sm-6">
                                            <label class="calc-label" for="tempo">Insira o tempo<sup
                                                    class="unidade-medida">(s)</sup></label>
                                            <input type="number" class="calc-input" name="tempo" value="" required
                                                data-calculo="magnitude" data-tipo-valor="tempo"
                                                data-id-valor="tempo-magnitude" />
                                        </div>
                                        <div class="col-md-4 col-lg-12 col-sm-12 botao-calcular-magnitude">
                                            <input id="btnCalcMagn" type="submit" class="btn btn-success"
                                                name="calc-btn-class" value="Calcular" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <hr />
        <!-- Amplitude -->
        <div class="container">
            <div class="row" data-row-calculo="amplitude">
                <div class="container">
                    <div class="row calculator-title">
                        <h1 id="resultado-amplitude">Calcular <strong>amplitude</strong> de um sismo na escala richter
                        </h1>
                    </div>
                    <div class="row">
                        <div class="container">
                            <div class="calculate col-md-12">
                                <form id="formCalculoAmplitude">
                                    <div class="container">
                                        <div class="col-md-4 col-lg-12 col-sm-6">
                                            <label class="calc-label" for="_magnitude">Insira a magnitude</label>
                                            <input type="number" class="calc-input" name="_magnitude" value="" required
                                                data-calculo="amplitude" data-tipo-valor="magnitude"
                                                data-id-valor="magnitude-amplitude" />
                                        </div>
                                        <div class="col-md-4 col-lg-12 col-sm-6">
                                            <label class="calc-label" for="_tempo">Insira o tempo<sup
                                                    class="unidade-medida">(s)</sup></label>
                                            <input type="number" class="calc-input" name="_tempo" value="" required
                                                data-calculo="amplitude" data-tipo-valor="tempo"
                                                data-id-valor="tempo-amplitude" />
                                        </div>
                                        <div class="col-md-4 col-lg-12 col-sm-12 botao-calcular-amplitude">
                                            <input id="btnCalcAmp" type="submit" class="btn btn-success calc-btn"
                                                value="Calcular" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <!-- Tempo -->
        <div class="row" data-row-calculo="tempo">
            <div class="container">
                <div class="row calculator-title">
                    <h1 id="resultado-tempo">Calcular <strong>tempo</strong> de um sismo na escala Richter</h1>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="calculate">
                            <form id="formCalculoTempo">
                                <div class="col-md-4">
                                    <label class="calc-label" for="magnitude_">Insira a magnitude</label>
                                    <input type="number" class="calc-input" name="magnitude_" value=""
                                        data-calculo="tempo" data-tipo-valor="magnitude"
                                        data-id-valor="magnitude-tempo" />
                                </div>
                                <div class="col-md-4">
                                    <label class="calc-label" for="amplitude_">Insira a amplitude<sup
                                            class="unidade-medida">(s)</sup></label>
                                    <input type="number" class="calc-input" name="amplitude_" value=""
                                        data-calculo="tempo" data-tipo-valor="amplitude"
                                        data-id-valor="amplitude-tempo" />
                                </div>
                                <div class="col-md-4 botao-calcular-tempo">
                                    <input id="btnCalcTempo" type="submit" class="btn btn-success calc-btn"
                                        value="Calcular" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <h2 class="res-title">Resultado</h2>
    <section id="result">
        <div class="row">
            <div class="container" style="width: 100%;">
                <div id="func-result">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="row">
                                <label class="label-valor" for="res">Valor real</label>
                                <input type="text" name="res" id="res" class="divRes" value="" />
                                <div class="btn btnCopy">
                                    <button class="tooltip" onclick="copyText(1)">Copiar <span
                                            class="tooltiptext tooltipCopy">Copiar</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <label class="label-valor" for="resAprox">Valor aproximado</label>
                                <input type="text" name="resAprox" id="resAprox" class="divRes" value="" />
                                <div class="btn btnCopy">
                                    <button class="tooltip" onclick="copyText(2)">Copiar <span
                                            class="tooltiptext tooltipCopy">Copiar</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <h2 style="margin-top: 5vh;">Como chegar ao resultado</h2>
    <section id="howto">

        <div class="row">
            <div class="container">
                <div class="row" id="explicacao-equacao">
                    <div class="container">
                        <h3 style="margin-top: 5vh;">Usando a equação</h3>
                        <p id="equation"><strong><em>M</em> = log<sub>10</sub><em>A</em> &#10010; 3
                                log<sub>10</sub>(8&#120491;<em>t</em>)&#9866;2,92 &#9868;
                                log<sub>10</sub>&#10088;<em>A</em>
                                <diminuir>&#9679;</diminuir>&#120491;<em>t</em><sup>3</sup>&#247;1,62&#10089;
                            </strong></p>
                    </div>
                </div>

                <div class="row">
                    <p class="col-md-12">
                        <img src="content/amplitude.svg" alt="Amplitude" /> é a amplitude das ondas
                        sísmicas, em milímetros, medida directamente no sismograma.
                    </p>
                    <p class="col-md-12">
                        <img src="content/tempo.svg" alt="Tempo" /> é o tempo em segundos desde o início
                        do trem de ondas P (primárias) até à chegada das ondas S (secundárias).
                    </p>
                    <p class="col-md-12">
                        <img src="content/magnitude.svg" alt="Magnitude" /> é a magnitude arbitrária, mas
                        constante, aplicável a sismos que libertem a mesma quantidade de energia.
                    </p>
                </div>

                <!-- <a href="http://poligrill.com.br/" target="_blank" class="row">
                    <div class="container text-center">
                        <img src="~/Content/Imagens/propaganda.jpg" class="img-responsive img-ads" alt="Propagandas" />
                    </div>
                </a> -->
                <!--Magnitude-->
                <div class="row how-to-magnitude">
                    <div class="col-md-12" id="conteudo-res-magnitude">
                        <h3 style="margin-top: 5vh !important;">Então <sup class="unidade-medida">Magnitude</sup>
                        </h3>
                        <div class="steps text-center">
                            <h4>Multiplique</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(8 * <span id="time-steps"></span>) - 2,92</p>
                            <h4>Transforme a equação</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(<span class="mT-steps"></span>) - 2,92</p>
                            <h4>Simplifique a expressão</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(<span class="mT-steps"></span><sup>3</sup>) - 2,92</p>
                            <h4>Solução</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span> *
                                <span class="mT-steps"></span><sup>3</sup>) - 2,92
                            </p>
                            <p class="text-steps">M = <span id="res-steps"></span></p>
                        </div>
                    </div>
                    <h3 style="display:none;" id="howtoErrorMagnitude">Não foi possivel calcular o passo a passo.</h3>
                </div>
                <hr>
                <!--Amplitude-->
                <div class="row how-to-amplitude">
                    <div class="col-md-12" id="conteudo-res-amplitude">
                        <h3 style="margin-top: 5vh !important;">Então <sup class="unidade-medida">Amplitude</sup>
                        </h3>
                        <div class="steps text-center">
                            <h4>Monte a expressão:</h4>
                            <p class="text-steps"><span class="magnitude-step"></span> = log<sub>10</sub>(<span
                                    class="amplitude-icog-step"></span>) + 3log<sub>10</sub>(8 * <span
                                    id="time-steps-amplitude"></span>) -2,92</p>
                            <h4>Multiplique o tempo por 8 e Mova os termos:</h4>
                            <p class="text-steps">-log<sub>10</sub>(<span class="amplitude-icog-step"></span>) =
                                3log<sub>10</sub>(<span class="mT-steps-amplitude"></span>) -2,92 -<span
                                    class="magnitude-step"></span></p>
                            <h4>Calcule os termos:</h4>
                            <p class="text-steps">-log<sub>10</sub>(<span class="amplitude-icog-step"></span>) =
                                3log<sub>10</sub>(<span class="mT-steps-amplitude"></span>) <span
                                    class="result-magnitude-step"></span></p>
                            <h4>Altere os sinais:</h4>
                            <p class="text-steps">log<sub>10</sub>(<span class="amplitude-icog-step"></span>) =
                                -3log<sub>10</sub>(<span class="mT-steps-amplitude"></span>) + <span
                                    class="result-magnitude-pos-step"></span></p>
                            <h4>Converta o logaritmo em exponencial:</h4>
                            <p class="text-steps"><span class="amplitude-icog-step"></span> =
                                10<sup>-3log<sub>10</sub>(<span class="mT-steps-amplitude"></span>) + <span
                                        class="result-magnitude-pos-step"></span></sup></p>
                            <h4>Expanda a expressão:</h4>
                            <p class="text-steps"><span class="amplitude-icog-step"></span> =
                                10<sup>-3log<sub>10</sub>(<span class="mT-steps-amplitude"></span>)</sup> *
                                10<sup><span class="result-magnitude-pos-step"></span></sup></p>
                            <h4>Transforme a expressão:</h4>
                            <p class="text-steps"><span class="amplitude-icog-step"></span> =
                                10<sup>log<sub>10</sub>(<span class="mT-steps-amplitude"></span><sup>-3</sup>)</sup>
                                * 10<sup><span class="result-magnitude-pos-step"></span></sup></p>
                            <h4>Simplifique:</h4>
                            <p class="text-steps"><span class="amplitude-icog-step"></span> = <span
                                    class="mT-steps-amplitude"></span><sup>-3</sup> * 10<sup><span
                                        class="result-magnitude-pos-step"></span></sup></p>
                            <h4>Solução:</h4>
                            <p class="text-steps"><span class="amplitude-icog-step"></span> = <span
                                    id="res-steps-amplitude"></span></p>
                        </div>
                    </div>
                    <h3 style="display:none;" id="howtoErrorAmplitude">Não foi possivel calcular o passo a passo.</h3>
                </div>
                <hr>
                <!--Tempo-->
                <div class="row how-to-tempo">
                    <div class="col-md-12">
                        <h3 style="margin-top: 5vh !important;">Então <sup class="unidade-medida">Tempo</sup></h3>
                        <div class="steps text-center">
                            <h4>Multiplique</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(8 * <span id="time-steps"></span>) - 2,92</p>
                            <h4>Transforme a equação</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(<span class="mT-steps"></span>) - 2,92</p>
                            <h4>Simplifique a expressão</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span>) +
                                3log<sub>10</sub>(<span class="mT-steps"></span><sup>3</sup>) - 2,92</p>
                            <h4>Solução</h4>
                            <p class="text-steps">M = log<sub>10</sub>(<span class="amplitude-log-step"></span> *
                                <span class="mT-steps"></span><sup>3</sup>) - 2,92
                            </p>
                            <p class="text-steps">M = <span id="res-steps"></span></p>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </section>
    <h3 style="display:none;" id="howtoError">Não foi possivel calcular o passo a passo.</h3>
</div>

<script>
// document.querySelector('div[data-row-calculo="magnitude"]').addEventListener("click", () => {
//     document.querySelector('div[data-row-calculo="magnitude"]').setAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="amplitude"]').removeAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="tempo"]').removeAttribute("class", "borda");
// });
// document.querySelector('div[data-row-calculo="amplitude"]').addEventListener("click", () => {
//     document.querySelector('div[data-row-calculo="amplitude"]').setAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="magnitude"]').removeAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="tempo"]').removeAttribute("class", "borda");
// });
// document.querySelector('div[data-row-calculo="tempo"]').addEventListener("click", () => {
//     document.querySelector('div[data-row-calculo="tempo"]').setAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="amplitude"]').removeAttribute("class", "borda");
//     document.querySelector('div[data-row-calculo="magnitude"]').removeAttribute("class", "borda");
// });

function copyText(n) {
    var tooltip1 = document.querySelectorAll(".tooltipCopy")[0];
    var tooltip2 = document.querySelectorAll(".tooltipCopy")[1];
    switch (n) {
        case 1:
            var val = document.querySelector("#res");
            val.select();
            val.setSelectionRange(0, 99999);
            document.execCommand("copy");
            tooltip1.innerText = "Copiado!";
            tooltip2.innerText = "Copiar";
            break;
        case 2:
            var val = document.querySelector("#resAprox");
            val.select();
            val.setSelectionRange(0, 99999);
            document.execCommand("copy");
            tooltip1.innerText = "Copiar";
            tooltip2.innerText = "Copiado!";
            break;
    }
}
</script>