<style>
body {
    background-color: #484548;
}

.main-contact {
    background-color: #484548;
    font-family: Montserrat, sans-serif;
    display: block;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
}

h3 {
    margin: 10px 0;
}

h6 {
    margin: 5px 0;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 21px;
}

.card-container {
    background-color: #231E39;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #B3B8CD;
    padding-top: 30px;
    position: relative;
    width: 100%;
    max-width: 350px;
    text-align: center;
    margin-left: 1vw;
    margin: auto;
}

.card-container .pro {
    color: #231E39;
    background-color: #FEBB0B;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
}

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
}

button.email {
    background-color: #ff0a0a;
    border: 1px solid #ff0a0a;
    border-radius: 3px;
    color: #f5f5f5;
    font-family: Montserrat, sans-serif;
    font-weight: bolder;
    padding: 10px 25px;
}

button.instagram {
    border: 1px solid #e512ffd9;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
}

button.instagram.ghost {
    background-color: transparent;
    color: #e512ffd9;
}

.habilidades {
    background-color: #1F1A36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
}

.habilidades ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.habilidades ul li {
    border: 1px solid #2D2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
}
</style>
<div class="main-contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12" style="margin-top: 3vh">
                <div class="card-container">
                    <span class="pro">FOUNDER</span>
                    <img class="round" width="300" height="300" src="content/guilhermezanetti.jpeg"
                        alt="Guilherme Zanetti" />
                    <h3>Guilherme Zanetti</h3>
                    <h6>Limeira - SP</h6>
                    <p>Estagiário em Desenvolvimento Web e<br /> amante de trilha aos fins de semana</p>
                    <div class="buttons">
                        <button class="email">
                            Email
                        </button>
                        <button class="instagram ghost">
                            Instagram
                        </button>
                    </div>
                    <div class="habilidades">
                        <h6>Habilidades</h6>
                        <ul>
                            <li>Front End Development</li>
                            <li>Back End Development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>C#</li>
                            <li>ASP.NET</li>
                            <li>PHP</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>