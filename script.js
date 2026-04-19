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