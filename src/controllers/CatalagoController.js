class CatalogoController {
    showProducs() {
        return (req, res) => {
            res.json( 
            `<h2> Frutas </h2>
            Banana: R$ 0,50</br>
            Laranja: R$ 1,00</br>
            <h2> Bebidas </h2>
            Coca Cola': R$ 5,00</br>
            Leite: R$ 3,00</br>
            Agua: R$ 2,00</br>
            <h2> Pereciveis </h2>
            Sal: R$ 1,00</br>
            Açucar: R$ 2,00</br>
            Macarrão: R$ 6,00</br>
            <h2> Frios </h2>
            Bisteca: R$ 40,00</br>
            Frango: R$ 21,00</br>`)
        };
    }
}

const catalogoController = new CatalogoController();

module.exports = {
    catalogoController
};