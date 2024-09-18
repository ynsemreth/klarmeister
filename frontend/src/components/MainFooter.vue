<template>
  <footer class="footer">
    <div class="footer-section">
      <h3>Unternehmen</h3>
      <ul>
        <li><a href="#">Startseite</a></li>
        <li><a href="#">Leistungen</a></li>
        <li><a href="#">Über Uns</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Rechtliches</h3>
      <ul>
        <li><a href="#">Impressum</a></li>
        <li><a href="#">Datenschutz</a></li>
        <li><a href="#">AGB</a></li>
      </ul>
    </div>
    <div class="footer-section contact-section">
      <h3>Kontakt</h3>
      <div class="divider-horizontal"></div>
      <ul>
        <li class="text">
          <el-icon><PhoneFilled /></el-icon> 08856 / 92 94 - 0
        </li>
        <li class="text">
          <el-icon><Location /></el-icon> 82377 Penzberg
        </li>
        <li class="text">
          <el-icon><Message /></el-icon> info@ib-herzog.de
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { PhoneFilled, Message, Location } from '@element-plus/icons-vue';

export default {
  components: {
    PhoneFilled,
    Message,
    Location,
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
  background-color: #000000;
  color: #c9c9c9;
}

.footer-section {
  flex: 1;
  padding: 0 20px;
}

.footer-section h3 {
  color: #c9c9c9;
  font-size: 21px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 15px; /* Liste elemanları arasındaki boşluk artırıldı */
}

.footer-section ul li a {
  color: #c9c9c9;
  font-size: 15px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
}

.divider-horizontal {
  width: 60px;
  height: 3px;
  background-color: #242424;
  border-radius: 2px;
  margin-bottom: 20px;
}

.contact-section {
  flex: 1;
  padding-left: 100px; 
}

.contact-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-section .text {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #c9c9c9;
  font-size: 17px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  line-height: 23px;
}

.contact-section .text el-icon {
  margin-right: 10px;
}

</style>
