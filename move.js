function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
function moveWithArrowKeys(left, bottom, callback){
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    function moveCharacter() { 
        //character limit for edge of screen
        let width = window.innerWidth - 10;
        let height = window.innerheight - 10;
        if (x === 0 && direction === 'west') {
            return;
        } else if (x === width && direction === 'east') {
            return;
        }else if (y === 0 && direction === 'south') {
            return;
        }else if (y === height && direction === 'north') {
            return;
        }

        if(direction === 'west'){
            x = x - 1;
        }
        if(direction === 'east'){
            x = x + 1;
        }
        if(direction === 'south'){
            y = y - 1;
        }
        if(direction === 'north'){
            y = y + 1;
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    }
    
    setInterval(moveCharacter, 1);
    
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        //callback 
        if (callback) {
            callback(direction)
        }
    })
    
    document.addEventListener('keyup', function(e){
        direction = null;
            if (callback){
            callback(direction)
            }
    })
}

        
    return {
        to: moveToCoordinates,
        withArrows: moveWithArrowKeys
    }
}