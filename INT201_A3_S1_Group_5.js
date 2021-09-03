//Week4
let money; //สร้างตัวเเปรรับค่า จำนวนเงินที่รับจากลูกค้า
let payoutAmount; //สร้างตัวเเปรรับค่า จำนวนเงินที่จะต้องจ่าย(ราคาสินค้า)

function customers(getMoney, payoutAmount) { //สร้าง function เพื่อมาเก็บ จำนวนเงินของลูกค้า และ ราคาที่ต้องจ่าย
    let amount = getMoney - payoutAmount //นำ getMoney - payoutAmount เก็บไว้ใน amount เพื่อดูว่าต้องทอนเท่าไหร่
    let cash = { //สร้าง object มาเก็บแบงค์และเหรียญที่ต้องทอนให้
        cash500: 0,
        cash100: 0,
        cash50: 0,
        cash20: 0,
        cash10: 0,
        cash5: 0,
        cash2: 0,
        cash1: 0
    }
    if (amount > 0) { //เช็คว่า amount มากว่า 0 หรือไม่ ถ้าใช่ให้ทำ loop while ถ้าไม่ให้ไปที่ else
        while (amount > 0) { //เช็คว่า amount มากว่า 0 หรือไม่ ถ้าใช่ก็เข้าไปทำ if 
            if (amount >= 500) { //if แต่ละตัวจะเช็ค amount และลบด้วยจำนวนที่กำหนดไว้ เพื่อลดจำนวนใน amount และเพิ่มจำนวนแบงค์ที่ลบไปใน cash
                amount = amount - 500 //จาก amount ที่ลบไปจะวนหกลับเข้าไปที่ loop while ใหม่ เพื่อเช็คกรณีอื่นๆ
                cash.cash500++
            } else if (amount >= 100) {
                amount = amount - 100
                cash.cash100++
            } else if (amount >= 50) {
                cash.cash50++
                    amount = amount - 50
            } else if (amount >= 20) {
                cash.cash20++
                    amount = amount - 20
            } else if (amount >= 10) {
                cash.cash10++
                    amount = amount - 10
            } else if (amount >= 5) {
                cash.cash5++
                    amount = amount - 5
            } else if (amount >= 2) {
                cash.cash2++
                    amount = amount - 2
            } else if (amount >= 1) {
                cash.cash1++
                    amount = amount - 1
            }
        }
        return cash; //คืนค่าเป็น cash เพื่อแสดง
    } else { //จาก if ข้างบน ถ้าเป็นเท็จทั้งหมด จะเข้า else และทำงานคำสั่งในนี้
        console.log("Not enough money!!!") //แสดงผลลัพธ์ว่า จำนวนเงินไม่พอ ไม่สามารถจ่ายเงินได้
    }
}

//เคสข้อมูลสำหรับทดสอบ
console.log("เมื่อราคาสินค้าที่ลูกค้าจะต้องจ่าย คือ 100 บาท เเละลูกค้าจ่ายมา 1000 บาท")
console.log(customers(1000, 100)) //แบงค์ 5 ร้อย 1 ใบ, แบงค์ 1 ร้อย 4 ใบ
console.log("เมื่อราคาสินค้าที่ลูกค้าจะต้องจ่าย คือ 499 บาท เเละลูกค้าจ่ายมา 500 บาท")
console.log(customers(500, 499)) //เหรียญ 1 บาท 1 เหรียญ
console.log("เมื่อราคาสินค้าที่ลูกค้าจะต้องจ่าย คือ 100 บาท เเละลูกค้าจ่ายมา 10 บาท")
console.log(customers(10, 100)) //จำนวนเงินไม่พอ