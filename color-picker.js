import pageList from './js.js'

window.onload = () => {

    const red = document.getElementById('red')
    const green = document.getElementById('green')
    const blue = document.getElementById('blue')
    const yellow = document.getElementById('yellow')

    const colors = [red, green, blue, yellow]

    function colorPicker(e) {
        // for(let i = 0; i < pageList.length; i++) {
        //     pageList[i].style.background = `${e.target.id}`
        // }

        document.documentElement.style.setProperty('--color-1',e.target.id)

        for(let i = 0; i < colors.length; i++) {
            colors[i].style.width = '30px'
            colors[i].style.height = '30px'
            colors[i].style.marginLeft = '-15px'
        }
        this.style.width = '40px'
        this.style.height = '40px'
        this.style.marginLeft = '-20px'
    }

    colors.forEach(function(e) {
        return e.addEventListener('click',colorPicker)
    })


}