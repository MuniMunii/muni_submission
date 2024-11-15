/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor(items){
        this.items=[]
    }
    addItem(item){
        return this.items.push(item)
    }
    removeItem(id){
        const indexAwal=this.items.findIndex(value=>value.id===id)
        if(indexAwal !== -1){
            this.items.splice(indexAwal,1)
            return this.items
        }
    }
    listItems(){
        return this.items
    }
    
}


// Jangan hapus kode di bawah ini!
export default Inventory;
