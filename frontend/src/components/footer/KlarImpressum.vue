<template>
<div class="impressum-container">
    <h1>Impressum</h1>
    <p>Bu sayfa, Klarmeister'in yasal bilgilerini içermektedir.</p>
    <section>
        <h2>İletişim Bilgileri</h2>
        <p>
            Klarmeister GmbH<br>
            Mustergasse 123<br>
            1010 Wien, Österreich<br>
            Telefon: +43 1 234 56 78<br>
            E-posta: info@klarmeister.com
        </p>
    </section>
    <section>
        <h2>Sorumluluk Reddi</h2>
        <p>
            Bu web sitesindeki bilgiler dikkatlice kontrol edilmiştir. Ancak, doğruluk, eksiksizlik veya güncellik konusunda hiçbir sorumluluk kabul edilmez. Bu nedenle, verilen bilgilere dayanarak herhangi bir işlem yapılmadan önce kendi değerlendirmelerinizi yapmalısınız.
        </p>
    </section>
</div>
</template>

  
  
<script lang="ts">
export default {
    name: 'KlarImpressum'
}
</script>
  
  
<style scoped>
.impressum-container {
    font-family: 'Montserrat', sans-serif;
    color: #333;
    margin: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #444;
}

h2 {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #555;
}

p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #666;
}
</style>
