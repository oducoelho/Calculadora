let display = document.querySelector('div#display')
let buttons = Array.from(document.querySelectorAll('button'))

buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = ''
                break
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = '[Error]'
                }
                break
            default:
                display.innerText += e.target.innerText
        }  
    })
})

