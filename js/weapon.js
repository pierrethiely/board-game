class Weapon {
    constructor (id, name, name2, damage, sound, img, bigImg) {
        this.id = id;
        this.name = name;
        this.name2 = name2;
        this.damage = damage;
        this.sound = sound;
        this.img = img;
        this.bigImg = bigImg;
    }

    getName() {
        return this.name;
    }

    getName2() {
        return this.name2;
    }

    getDamage() {
        return this.damage;
    }

    getSound() {
        return this.sound;
    }

    getImg() {
        return this.img;
    }

    getBigImg() {
        return this.bigImg;
    }
};

const img0 = document.createElement("img");
img0.src = "img/w0small.png";
const img0Big = document.createElement("img");
img0Big.src = "img/w0.png";
const gunFX = new Audio ("fx/gun_fx.mp3");

const img1 = document.createElement("img");
img1.src = "img/w1small.png";
const img1Big = document.createElement("img");
img1Big.src = "img/w1.png";
const pumpFX = new Audio ("fx/pump_fx.mp3");

const img2 = document.createElement("img");
img2.src = "img/w2small.png";
const img2Big = document.createElement("img");
img2Big.src = "img/w2.png";
const smgFX = new Audio ("fx/smg_fx.mp3");

const img3 = document.createElement("img");
img3.src = "img/w3small.png";
const img3Big = document.createElement("img");
img3Big.src = "img/w3.png";
const scarFX = new Audio ("fx/scar_fx.mp3");

const img4 = document.createElement("img");
img4.src = "img/w4small.png";
const img4Big = document.createElement("img");
img4Big.src = "img/w4.png";
const minigunFX = new Audio ("fx/minigun_fx.mp3");

const gun = new Weapon(0, "le pistolet", "PISTOLET", 10, gunFX, img0, img0Big);
const pump = new Weapon(1, "le fusil à pompe", "FUSIL A POMPE", 15, pumpFX, img1, img1Big);
const smg = new Weapon(2, "la mitraillette", "MITRAILLETTE", 20, smgFX, img2, img2Big);
const scar = new Weapon(3, " le fusil d'assault", "FUSIL D'ASSAULT", 25, scarFX, img3, img3Big);
const minigun = new Weapon(4, "la sulfateuse", "MINIGUN", 30, minigunFX, img4, img4Big);

const tabWeapons = [pump, smg, scar, minigun];