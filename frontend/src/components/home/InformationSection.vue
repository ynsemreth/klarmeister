<template>
<el-col :span="24">
    <div class="line"></div>
</el-col>

<el-col :span="24" class="information">
    <div class="information-content">
        <h1 class="information-title">Schnauze voll von Luftpumpen</h1>
        <h2 class="information-text-title">
            <span class="highlight">Haben Sie auch die Nase voll von leeren Versprechungen?</span>
        </h2>
        <p class="information-text-content">
            Keine Lust mehr auf Agenturen, die behaupten, Ihre Website innerhalb
            von 8 Stunden oder gefühlt einem halben Jahr zu erstellen für
            horrende Summen von 20.000 Euro oder mehr?
        </p>
        <p class="information-text-content">
            Bei uns ist das anders. Wir bieten eine transparente und zielführende
            Lösung, die Ihre Erwartungen übertrifft.
        </p>
    </div>
    <div class="information-image">
        <img src="@/assets/Klarheitsgarantie.png" alt="Frustrated Man" class="info-image" />
    </div>
</el-col>

<el-col :span="24">
    <div class="line"></div>
</el-col>
</template>

<script>
export default {
    name: 'InformationSection',
};
</script>

<style>
.information {
    background-color: #000;
    color: #fff;
    padding: 120px;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.information-content {
    color: #fff;
    max-width: 60%;
    padding-left: 5%;
}

.information-image {
    max-width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.information-image .info-image {
    max-width: 80%;
    transition: transform 0.3s ease;
}

.information-image .info-image:hover {
    transform: scale(0.95);
}

.information-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: #fff;
    text-align: left;
    font-weight: 700;
    padding-bottom: 5%;
}

.information-text-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    background: linear-gradient(to right, #135b13, #000000);
    padding: 10px 20px;
    border-radius: 10px;
}

.information-text-content {
    font-family: 'Poppins', Courier, monospace;
    font-size: 18px;
    color: #fff;
    font-weight: 300;
    line-height: 1.8;
    padding-top: 5%;
}

.line {
    width: 70%;
    height: 2px;
    background-color: #333;
    margin: 2px auto;
}
</style>
