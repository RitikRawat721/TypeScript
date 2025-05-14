// Generics with classes

interface Book {
    name: string,
    author: string,
    price: number
}

interface Quiz {
    Qname: string,
    questions: number
}

class startQuiz <T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

