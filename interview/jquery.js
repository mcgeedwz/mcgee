/**
 * class 类 模拟jquery
 * 课程 ck400-5-5-5 
 */

class Jquery {
    constructor(selector){
        const eles = document.querySelectorAll(selector)
        const length = eles.length
        for(let i=0;i<length;i++) {
            this[i] = eles[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for(let i=0;i<this.length;i++) {
            const ele = this[i]
            fn(ele)
        }
    }
    on(type,fn){
        return this.each(elem => {
            elem.addEventListener(type,fn,false)
        })
    }
    show(index) {
        if(index) {
            this[index].style.display = 'block'
        } else {
            this.each(elem => {
                elem.style.display = 'block'
            })
        }
    }
    hide(index) {
        if(index) {
            this[index].style.display = 'none'
        } else {
            this.each(elem => {
                elem.style.display = 'none'
            })
        }
    }
}
Jquery.prototype.dialog = function(type, text) {
    let box =  document.createElement('p');
    box.innerHTML = 'dialog ' + text
    document.body.appendChild(box);
    const dialog = document.querySelectorAll('p')
}


