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

    const ord = document.getElementById("sort");
    if (ord.value == "date" || ord.value == "dater") 
    {
        for (let i = 0; i < cikkek.length; i++) 
        {
            for (let j = i + 1; j < cikkek.length; j++) 
            {
                if (parseInt(cikkek[i].date.slice(0, 4)) < parseInt(cikkek[j].date.slice(0, 4))) 
                {
                    let temp = cikkek[j];
                    cikkek[j] = cikkek[i];
                    cikkek[i] = temp;
                }
                if (parseInt(cikkek[i].date.slice(0, 4)) == parseInt(cikkek[j].date.slice(0, 4))) 
                {
                    if (parseInt(cikkek[i].date.slice(5, 7)) < parseInt(cikkek[j].date.slice(5, 7))) 
                    {
                        let temp = cikkek[j];
                        cikkek[j] = cikkek[i];
                        cikkek[i] = temp;
                    }
                    if (parseInt(cikkek[i].date.slice(5, 7)) == parseInt(cikkek[j].date.slice(5, 7))) 
                    {
                        if (parseInt(cikkek[i].date.slice(8, 10)) < parseInt(cikkek[j].date.slice(8, 10))) 
                        {
                            let temp = cikkek[j];
                            cikkek[j] = cikkek[i];
                            cikkek[i] = temp;
                        }
                    }
                }
            }
        }

        if (ord.value == "dater")
        {
            for (let i = 0; i < ((cikkek.length % 2 == 0) ? (cikkek.length / 2) : (cikkek.length - 1) / 2); i++)
            {
                let temp = cikkek[cikkek.length - i - 1];
                cikkek[cikkek.length - i - 1] = cikkek[i];
                cikkek[i] = temp;
            }
        }
    }
    // ez valamiért nem működik és a javascript-et hibáztatom
    /*if (ord.value == "abc" || ord.value == "abcr")
    {
        let abc = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz ";

        for (var i = 0; i < cikkek.length; i++)
        {
            for (var j = i + 1; j < cikkek.length; j++)
            {
                for (let k = 0; k < ((cikkek[i].cim.length > cikkek[j].cim.length) ? cikkek[j].cim.length : cikkek[i].cim.length); i++)
                {
                    if (abc.indexOf(cikkek[i].cim.toLowerCase()[k]) > abc.indexOf(cikkek[j].cim.toLowerCase()[k]))
                    {
                        let temp = cikkek[j];
                        cikkek[j] = cikkek[i];
                        cikkek[i] = temp;
                        break;
                    }
                    if (abc.indexOf(cikkek[i].cim.toLowerCase()[k]) < abc.indexOf(cikkek[j].cim.toLowerCase()[k]))
                    {
                        break;
                    }
                }
            }
        }

        if (ord.value == "abcr")
        {
            for (let i = 0; i < ((cikkek.length % 2 == 0) ? (cikkek.length / 2) : (cikkek.length - 1) / 2); i++)
            {
                let temp = cikkek[cikkek.length - i - 1];
                cikkek[cikkek.length - i - 1] = cikkek[i];
                cikkek[i] = temp;
            }
        }
    }*/

    const lista = document.getElementById("lista");
    lista.textContent = "";

    for (let cikk of cikkek)
    {
        if (szerzo.includes(cikk.szerzo) && tipus.includes(cikk.type))
        {
            /*
            <div class="cikk border cikkgrid my-4" id="cikk.id" onclick="window.location.assign(cikk.link)">
                <div class="p-3"><img src="cikk.img" class="full"></div>
                <div class="pflex p-3"><h4 class="d-none d-lg-block">cikk.cim</h4><hr><p class="d-none d-lg-block">cikk.txt</p></div>
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
            cikktxt.setAttribute("class", "d-none d-lg-block")
            const hr = document.createElement("hr");
            hr.setAttribute("class", "d-none d-lg-block");
            txtdiv.appendChild(cikkcim);
            txtdiv.appendChild(hr);
            txtdiv.appendChild(cikktxt);

            egesz.appendChild(imgdiv);
            egesz.appendChild(txtdiv);

            lista.appendChild(egesz);

        }
    }
}

function Newest()
{
    const lista = document.getElementById("lista");
    lista.textContent = "";
    for (let i = 0; i < cikkek.length; i++)
    {
        for (let j = i + 1; j < cikkek.length; j++)
        {
            if (parseInt(cikkek[i].date.slice(0, 4)) < parseInt(cikkek[j].date.slice(0, 4)))
            {
                let temp = cikkek[j];
                cikkek[j] = cikkek[i];
                cikkek[i] = temp;
            }
            if (parseInt(cikkek[i].date.slice(0, 4)) == parseInt(cikkek[j].date.slice(0, 4)))
            {
                if (parseInt(cikkek[i].date.slice(5, 7)) < parseInt(cikkek[j].date.slice(5, 7)))
                {
                    let temp = cikkek[j];
                    cikkek[j] = cikkek[i];
                    cikkek[i] = temp;
                }
                if (parseInt(cikkek[i].date.slice(5, 7)) == parseInt(cikkek[j].date.slice(5, 7)))
                {
                    if (parseInt(cikkek[i].date.slice(8, 10)) < parseInt(cikkek[j].date.slice(8, 10)))
                    {
                        let temp = cikkek[j];
                        cikkek[j] = cikkek[i];
                        cikkek[i] = temp;
                    }
                }
            }
        }
    }

    for (let i = 0; i < 3; i++)
    {
        /*
        <div class="cikk border cikkgrid my-4" id="cikk.id" onclick="window.location.assign(cikk.link)">
            <div class="p-3"><img src="cikk.img" class="full"></div>
            <div class="pflex p-3"><h4 class="d-none d-lg-block">cikk.cim</h4><hr><p class="d-none d-lg-block">cikk.txt</p></div>
        </div> 
        */
        const egesz = document.createElement("div");
        egesz.setAttribute("class", "cikk border cikkgrid my-4");
        egesz.setAttribute("id", cikkek[i].id);
        egesz.setAttribute("onclick", "window.location.assign('" + cikkek[i].link + "')");

        const imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "p-3");
        const image = document.createElement("img");
        image.setAttribute("src", cikkek[i].img);
        image.setAttribute("class", "full");
        imgdiv.appendChild(image);

        const txtdiv = document.createElement("div");
        txtdiv.setAttribute("class", "pflex p-3");
        const cikkcim = document.createElement("h4");
        cikkcim.textContent = cikkek[i].cim;
        const cikktxt = document.createElement("p");
        cikktxt.textContent = cikkek[i].txt;
        cikktxt.setAttribute("class", "d-none d-lg-block")
        const hr = document.createElement("hr");
        hr.setAttribute("class", "d-none d-lg-block");
        txtdiv.appendChild(cikkcim);
        txtdiv.appendChild(hr);
        txtdiv.appendChild(cikktxt);

        egesz.appendChild(imgdiv);
        egesz.appendChild(txtdiv);

        lista.appendChild(egesz);
    }
}

function szerzokibe()
{
    let tomb = [document.getElementById("KM"), document.getElementById("MÁ"), document.getElementById("OÁ"), document.getElementById("SM")];
    let bools = [tomb[0].checked, tomb[1].checked, tomb[2].checked, tomb[3].checked]
    if (!bools.includes(false))
    {
        tomb.forEach(x => x.checked = false);
    }
    else
    {
        tomb.forEach(x => x.checked = true);
    }
}

function tipuskibe()
{
    let tomb = [document.getElementById("hir"), document.getElementById("krit"), document.getElementById("tip")];
    let bools = [tomb[0].checked, tomb[1].checked, tomb[2].checked]
    if (!bools.includes(false))
    {
        tomb.forEach(x => x.checked = false);
    }
    else
    {
        tomb.forEach(x => x.checked = true);
    }
}
