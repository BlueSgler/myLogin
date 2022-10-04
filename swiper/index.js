window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section')
    const edge = 72 //边数

    /**
     * 动态生成图片
     * @param {元素} el 
     * @param {起始位置} start 
     * @param {结束位置} end 
     */
    const swiper = (el, start, end) => {
        let index = start

        for (let i = 0; i < edge; i++) {
            console.log(index);
            let div = document.createElement('div')
            div.style.transform = `rotateX(${(360 / edge) * i}deg) translateZ(3430px)`
            div.style.background = `url(./image/${[index]}.jpeg) no-repeat`
            div.style.backgroundSize = 'cover'
            el.appendChild(div)

            index++

            if (index === end) {
                index = start
            }
        }

    }

    let start = 1 //第一张图片下标
    let end = 4 //第一组图片最后一张图片下标
    for (let j = 0; j < sections.length; j++) {
        swiper(sections[j], start, end)
        start = start + 3 //一组图片3张
        end = end + 3
    }


})