<template>
  <footer class="footer">
    <el-row>
      <el-col :span="6" class="footer-col">
        <ul>
          <h3>Referenzen</h3>
          <li><a href="#">Referenz 1</a></li>
          <li><a href="#">Referenz 2</a></li>
          <li><a href="#">Referenz 3</a></li>
        </ul>
      </el-col>

      <el-col :span="6" class="footer-col">
        <ul>
          <h3>Ressourcen</h3>
          <li><a href="#">Ressource 1</a></li>
          <li><a href="#">Ressource 2</a></li>
          <li><a href="#">Ressource 3</a></li>
        </ul>
      </el-col>

      <el-col :span="6" class="footer-col">
        <ul>
          <h3>Lösungen</h3>
          <li><a href="#">Lösung 1</a></li>
          <li><a href="#">Lösung 2</a></li>
          <li><a href="#">Lösung 3</a></li>
        </ul>
      </el-col>

      <el-col :span="6" class="footer-col">
        <ul>
          <h3>KLARMEISTER</h3>
          <li><router-link to="/über">Über Klarmeister</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
          <li><router-link to="/impressum">Impressum</router-link></li>
        </ul>
      </el-col>
    </el-row>
  </footer>
</template>

<style>
.footer {
    background-color: black;
    color: #e0e0e0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    padding: 40px 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.footer-col {
    padding: 0 20px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

ul h3 {
    color: #f4f4f4;
    font-size: 18px;
    margin-bottom: 15px;
    border-bottom: 2px solid #f4f4f4;
    padding-bottom: 5px;
    text-transform: uppercase;
}

ul li {
    margin-bottom: 10px; 
}

ul li a {
    color: #b3b3b3;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    font-weight: 300;
}

ul li a:hover {
    color: #ffffff;
    font-weight: 400;
    transition: color 0.3s ease-in-out;
}

@media (max-width: 1024px) {
    .footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-col {
        margin-bottom: 20px;
        width: 100%; 
        padding: 0 10px; 
    }

    ul h3 {
        font-size: 16px; 
        margin-bottom: 10px;
        border-bottom: 1px solid #f4f4f4;
        padding-bottom: 5px;
    }

    ul li {
        font-size: 12px;
    }
}

</style>
