<template>
<footer class="footer">
    <el-row>
        <el-col :span="6" class="footer-col">
            <ul>
                <h3>KLARMEISTER</h3>
                <a>
                    <router-link to="leistungen">Datenschutz</router-link>
                </a>
                <a>
                    <router-link to="uberuns">Impressum</router-link>
                </a>
            </ul>
        </el-col>

        <el-col :span="6" class="footer-col">
            <div class="footer-img">
                <img src="@/assets/garanti.png" alt="garanti" />
            </div>
        </el-col>
    </el-row>
    <el-row class="footer-bottom">
        <el-col :span="24">
            <h1>© 2024 Klarmeister. Alle Rechte vorbehalten.</h1>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.footer-col {
    margin-bottom: 20px;
    display: flex;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
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

.footer-img {
    margin-left: 100px;
    margin-top: 20px;
}

.footer-img img {
    width: 100px;
    height: auto;
}

.footer-bottom {
    margin-top: 30px;
}

.footer-bottom h1 {
    font-size: 12px;
    color: #b3b3b3;
    margin: 0;
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-col {
        width: 100%;
        margin-bottom: 20px;
        justify-content: center;
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

    .footer-img {
        margin-top: 15px;
    }

    .footer-img img {
        width: 80px;
    }

    .footer-bottom h1 {
        font-size: 10px;
    }
}
</style>
