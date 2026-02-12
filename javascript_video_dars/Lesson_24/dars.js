// break end continue
const natijalar = [30,20,10,40,50,0,200,1]


for (let i = 0; i < natijalar.length; i++) {
    if (natijalar[i] === 0){
        continue
    }

    console.log("sizning natijangiz", natijalar[i])

    if(natijalar[i] === 200) {
        console.log("Siz eng yuqori natijani to'pladiz")
        break
    }
}




