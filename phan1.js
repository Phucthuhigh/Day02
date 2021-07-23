function PTBac1(a,b) {
    let x;
    if (a == 0) {
        if (b == 0) {
            console.log('Phuong trinh vo so nghiem')
        } else {
            console.log('Phuong trinh vo nghiem')
        }
    }
    else if (a != 0) {
        x = -b / a;
    }
    return x;
}

let bai1 = PTBac1(4,5);
console.log(bai1);

function PTBac2(a,b,c) {
    let x1,x2;
    let delta = b*b - 4*a*c;
    
    if (a == 0) {
        return 0;
    }

    if (delta == 0) {
        x1 = -b / (2*a);
        x2 = x1;
        return [x1, x2];
    } else if (delta < 0) {
        return 0;
    } else if (delta > 0) {
        delta = Math.sqrt(delta)
        x1 = (-b + delta) / (2*a);
        x2 = (-b - delta) / (2*a);
        return [x1, x2];
    }
}

let bai2 = PTBac2(3,-5,2);
if (bai2 != 0) {
    console.log(`x1 = ${Math.round(bai2[0]*1000)/1000}`)
    console.log(`x2 = ${Math.round(bai2[1]*1000)/1000}`)
} else {
    console.log('Phuong trinh vo nghiem');
}