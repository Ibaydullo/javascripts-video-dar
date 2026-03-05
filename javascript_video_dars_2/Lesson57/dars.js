// keydown, keyup, keypress

document.addEventListener('keyup', (e)=>{
    if (e.key == 'm' && e.ctrlKey) {
        console.log('uraaa')
    }
    // console.log('Code', e.code)
    // console.log('Key', e.key)
    // console.log('KeyCode', e.keyCode)
})
