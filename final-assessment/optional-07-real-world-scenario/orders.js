// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders=[];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const hargaTotal=items.reduce((items,value)=>items+value.price,0)
  // console.log(hargaTotal)
  // console.log(JSON.stringify(items, null, 2))
  return orders.push({
    id:generateUniqueId(),
    customerName:customerName,
    //  test karena di terminal node tidak menampilkan semua object value
    // item:JSON.stringify(items,null,2),
    item:items,
    totalPrice:hargaTotal,
    status:'Menunggu'
  })
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const filterArray=orders.filter(value=>value.id===orderId)
  if (filterArray) {
    // console.log(`${orderId}`)
    const indexTujuan=filterArray[0]
    indexTujuan.status=status
  }

}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.filter(value=>value.status==='Selesai').reduce((acc,initial)=>acc+initial.totalPrice,0)
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const filterArray=orders.filter(value=>value.id===id)
  return orders.splice(filterArray[0],1)
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
