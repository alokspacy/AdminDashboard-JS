const menuBtn = document.querySelector(".menu-btn")
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})

const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
})

const stats = document.querySelectorAll(".card h2")

stats.forEach(stat => {

    const target = parseInt(
        stat.innerText.replace(/\D/g, "")
    )

    let count = 0

    const update = () => {

        count += Math.ceil(target / 40)

        if(count < target){

            stat.innerText = count

            requestAnimationFrame(update)

        }else{

            stat.innerText = stat.dataset.original || stat.innerText

        }

    }

    stat.dataset.original = stat.innerText

    update()

})
