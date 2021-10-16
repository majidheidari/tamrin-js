const star = (a)=>{
    let i=1;
    let j=1;
    let k=1;
    let str1='';
    while (i<a+1){
        str1+= '*';
        i++
    }
    let str2='*';
    while (j<a-1){
        str2+= ' ';
        j++
    }
    str2+= '*';
    console.log(str1);
    while (k<a-1){
        console.log(str2);
        k++
    }
    console.log(str1);

}
star(5)