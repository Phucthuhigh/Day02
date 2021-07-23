function tinhSotienDien(n) {
    let giabac = {
        bac1: 1549,
        bac2: 1600,
        bac3: 1858,
        bac4: 2340,
        bac5: 2615,
        bac6: 2701
    }
    let sotien;
    if (n < 0) {
        return 0;
    } else {
        if (n <= 50) {
            sotien = n*giabac.bac1;
        } else if (n <= 100) {
            sotien = 50*giabac.bac1 + (n-50)*giabac.bac2;
        } else if (n <= 200) {
            sotien =  50*giabac.bac1 + 50*giabac.bac2 + (n-100)*giabac.bac3;
        } else if (n <= 300) {
            sotien = 50*giabac.bac1 + 50*giabac.bac2 + 100*giabac.bac3 + (n-200)*giabac.bac4;
        } else if (n <= 400) {
            sotien = 50*giabac.bac1 + 50*giabac.bac2 + 100*giabac.bac3 + 100*giabac.bac4 + (n-300)*giabac.bac5;
        } else if (n > 400) {
            sotien = 50*giabac.bac1 + 50*giabac.bac2 + 100*giabac.bac3 + 100*giabac.bac4 + 100*giabac.bac5 + (n-400)*giabac.bac6;
        }
        return sotien;
    }
    
}

console.log(`So tien dien ban su dung trong thang la: ${tinhSotienDien(1000)} VND`);

let conChim = {
    tenLoaichim: '',
    mauSac: 'Xanh',
    khaNangBay: true,
    kichCo: 'To',
    tocDobay: 'Binh thuong'
}

let chimSe = {...conChim};
chimSe.tenLoaichim = 'Chim se';
chimSe.kichCo = 'Nho';
chimSe.mauSac = 'nau';

let chimCanhCut = {...conChim};
chimCanhCut.tenLoaichim = 'Chim canh cut';
chimCanhCut.kichCo = 'Binh thuong';
chimCanhCut.mauSac = 'trang xanh';
chimCanhCut.khaNangBay = false;
chimCanhCut.tocDobay = 'Khong co';

let chimDaiBang = {...conChim};
chimDaiBang.tenLoaichim = 'chim dai bang';
chimDaiBang.kichCo = 'to';
chimDaiBang.mauSac = 'trang nau';
chimDaiBang.tocDobay = 'Nhanh';

let chimUng = {...conChim};
chimUng.tenLoaichim = 'chim ung';
chimUng.kichCo = 'Binh thuong';
chimUng.mauSac = 'trang nau';
chimUng.tocDobay = 'nhanh';

let chimBoCau = {...conChim};
chimBoCau.tenLoaichim = 'chim bo cau';
chimBoCau.kichCo = 'nho';
chimBoCau.mauSac = 'tim xanh trang';
chimBoCau.tocDobay = 'Binh thuong';

console.log(chimSe);
console.log(chimCanhCut);
console.log(chimDaiBang);
console.log(chimUng);
console.log(chimBoCau);