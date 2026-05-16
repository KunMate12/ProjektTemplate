function DarkLight()
{
    const r = document.querySelector(":root");
    const img = document.getElementById("LightDark");
    const body = document.querySelector("body");

    if (img.getAttribute("src") == "media/Light.webp") // sötét módból világosba
    {
        img.setAttribute("src", "media/Dark.webp");
        r.style.setProperty("--font", "#271251");
        r.style.setProperty("--hfbg", "#a897d1");
        r.style.setProperty("--main", "#ece8fb");
        body.style.setProperty("background-color", "#ffffff");
    }
    else // világos módból sötétbe
    {
        img.setAttribute("src", "media/Light.webp");
        r.style.setProperty("--font", "#ece8fb");
        r.style.setProperty("--hfbg", "#7a69b7");
        r.style.setProperty("--main", "#271251");
        body.style.setProperty("background-color", "#000000");
    }
}

function Filter()
{
    let cikkek = [
        {
            id: "pelda",
            link: "peldacikk.html",
            img: "media/Ikon.webp",
            cim: "Példa cikk",
            txt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti blanditiis maiores a accusantium quae vero illum ducimus, qui adipisci perspiciatis, delectus, veniam dolore voluptatem. Aliquid velit porro eveniet esse?",
            szerzo: "",
            type: "",
            date: "0000-00-00"
        },
        {
            id: "eafc",
            link: "EAFC.html",
            img: "media/eakep2.webp",
            cim: "Megérkezett az új EA Sports FC",
            txt: "Az EA Sports FC sorozat legújabb része hivatalosan is megjelent, és világszerte hatalmas érdeklődés övezi. A rajongók már a megjelenés pillanatában ellepték a szervereket, ami jól mutatja, hogy a korábban FIFA néven ismert franchise továbbra is az egyik legnépszerűbb focis játéksorozat a világon...",
            szerzo: "Kun Máté",
            type: "hir",
            date: "2026-04-12"
        },
        {
            id: "skong",
            link: "silksong.html",
            img: "media/silksong5.webp",
            cim: "Hollow Knight: Silksong – Megérte a várakozást?",
            txt: "A Hollow Knight: Silksong az egyik legtöbbet várt indie játék volt az elmúlt években...",
            szerzo: "Mikes Ádám",
            type: "krit",
            date: "2026-04-13"
        },
        {
            id: "gtav",
            link: "GTAV.html",
            img: "media/GTAV3.webp",
            cim: "Grand Theft Auto V",
            txt: "A Grand Theft Auto V egy hatalmas nyílt világú játék, amely Los Santosban játszódik, egy kiterjedt, napsütötte metropoliszban, amely azzal küzd, hogy talpon maradjon a gazdasági bizonytalanság és az olcsó valóságshow-k korszakában...",
            szerzo: "Olcsvári Ákos",
            type: "krit",
            date: "2026-04-11"
        },
        {
            id: "p3",
            link: "P3tips.html",
            img: "media/P3tip2.webp",
            cim: "Persona 3 Tartarus tippek",
            txt: "A Persona 3 minden idők egyik legismertebb JRPG játékok közé tartozik, amely mindenkinek ajánlott, hogy próbálja ki. Ugyan amennyire közkedvelt, nem könnyű megszokni a harcokhoz megfelelő gondolatmeneteket...",
            szerzo: "Sallai Máté",
            type: "tip",
            date: "2026-04-25"
        }
    ];

    let szerzo = [];
    let tipus = [];
    for (let nev of ["KM", "MÁ", "OÁ", "SM"])
    {
        let doboz = document.getElementById(nev);
        if (doboz.checked) szerzo.push(doboz.name);
    }
    for (let type of ["hir", "krit", "tip"])
    {
        let doboz = document.getElementById(type);
        if (doboz.checked) tipus.push(doboz.name);
    }

    const lista = document.getElementById("lista");
    lista.textContent = "";

    for (let cikk of cikkek)
    {
        if (szerzo.includes(cikk.szerzo) && tipus.includes(cikk.type))
        {
            /*
            <div class="cikk border cikkgrid my-4" id="cikk.id" onclick="window.location.assign(cikk.link)">
                <div class="p-3"><img src="cikk.img" class="full"></div>
                <div class="pflex p-3"><h4>cikk.cim</h4><hr><p>cikk.txt</p></div>
            </div> 
            */
            const egesz = document.createElement("div");
            egesz.setAttribute("class", "cikk border cikkgrid my-4");
            egesz.setAttribute("id", cikk.id);
            egesz.setAttribute("onclick", "window.location.assign('" + cikk.link + "')");

            const imgdiv = document.createElement("div");
            imgdiv.setAttribute("class", "p-3");
            const image = document.createElement("img");
            image.setAttribute("src", cikk.img);
            image.setAttribute("class", "full");
            imgdiv.appendChild(image);

            const txtdiv = document.createElement("div");
            txtdiv.setAttribute("class", "pflex p-3");
            const cikkcim = document.createElement("h4");
            cikkcim.textContent = cikk.cim;
            const cikktxt = document.createElement("p");
            cikktxt.textContent = cikk.txt;
            txtdiv.appendChild(cikkcim);
            txtdiv.appendChild(document.createElement("hr"));
            txtdiv.appendChild(cikktxt);

            egesz.appendChild(imgdiv);
            egesz.appendChild(txtdiv);

            lista.appendChild(egesz);

        }
    }
}
