class DataValidation {
    static validate = (req, res, next) => {
        const product = req.body;

        if (!product.id) {
            return res.status(400).json({
                status: 400,
                error: 'O produto precisa de um ID!'
            });
        }

        next();
    }
}

module.exports = DataValidation;