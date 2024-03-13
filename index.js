const submit = document.getElementById('submit')
const submit2 = document.getElementById('submit2')
const bulan = document.getElementById('bulan')
const bulan2 = document.getElementById('bulan2')

function hitungPajak(pkp){
    const income = parseInt(pkp)
    const lvl1 = (5/100) * 50000000;
    const lvl2 = (15/100) * 200000000;
    const lvl3 = (25/100) * 250000000;
    const lvl4 = (30/100) * income - 500000000

    if(income <= 50000000) return income * 5 / 100
    if(income <= 250000000) return lvl1 + ((income - 50000000) * 15/100)
    if(income <= 500000000) return lvl1 + lvl2 + ((income - 250000000) * 25/100)
    if(income > 500000000) return lvl1 + lvl2 + lvl3 + ((income - 500000000) * 30/100)
}


submit.addEventListener('click', () =>{
    const penghasilan = document.getElementById('penghasilan').value
    pajak.innerText = hitungPajak(penghasilan)
})

bulan.addEventListener('click', () =>{
    const perbulan = document.getElementById('perbulan')
    const pajak = document.getElementById('pajak').innerText
    perbulan.innerText = parseInt(pajak) / 12
})

submit2.addEventListener('click', () => {
    const penghasilan = parseInt(document.getElementById('penghasilan2').value)
    const menikah = document.getElementById('menikah').checked ? 4500000 : 0
    const anak = document.getElementById('anak').value
    const jumlahAnak = anak == 0 ? 0 : anak == 1 ? 4500000 : anak == 2 ? 9000000 : anak == 3 ? 13500000 : 13500000
    const pkp = penghasilan - (menikah + jumlahAnak + 54000000)
    pajak2.innerText = hitungPajak(pkp)
})

bulan2.addEventListener('click', () =>{
    const perbulan2 = document.getElementById('perbulan2')
    const pajak = document.getElementById('pajak').innerText
    perbulan2.innerText = parseInt(pajak) / 12
})