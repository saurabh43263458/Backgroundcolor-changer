const button = document.querySelectorAll('.same');
const body = document.querySelector("body");

button.forEach(function(same){
    console.log(same);
    same.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'div1'){
        body.style.backgroundColor=e.target.style.backgroundColor;
        }
        if(e.target.id === 'div1'){
            body.style.backgroundColor=e.target.style.backgroundColor;
            }
            if(e.target.id === 'div2'){
                body.style.backgroundColor=e.target.style.backgroundColor;
                }
                if(e.target.id === 'div3'){
                    body.style.backgroundColor=e.target.style.backgroundColor;
                    }        
                    if(e.target.id === 'div4'){
                        body.style.backgroundColor=e.target.style.backgroundColor;
                        }
                        if(e.target.id === 'div5'){
                            body.style.backgroundColor=e.target.style.backgroundColor;
                            }
                            if(e.target.id === 'div6'){
                                body.style.backgroundColor=e.target.style.backgroundColor;
                                }
                                if(e.target.id === 'div7'){
                                    body.style.backgroundColor=e.target.style.backgroundColor;
                                    }
                                    if(e.target.id === 'div8'){
                                        body.style.backgroundColor=e.target.style.backgroundColor;
                                        }
                                        if(e.target.id === 'div9'){
                                            body.style.backgroundColor=e.target.style.backgroundColor;
                                            }
    })
});