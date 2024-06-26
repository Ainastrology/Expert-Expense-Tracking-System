const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Convert amount to a number
    const numericAmount = Number(amount);

    // Create the income object
    const income = new IncomeSchema({
        title,
        amount: numericAmount,
        category,
        description,
        date
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (isNaN(numericAmount) || numericAmount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        await income.save();
        res.status(200).json({ message: 'Income Added Successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding income' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: 'Server Error!'});
    }
};

exports.deleteIncome = async (req, res) => {
    const {id} = req.params; // req.params are those object that we're gonna pass as an id so that it could be deleted
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: 'Income Deleted Successfully!'});
    })
    .catch((error) => {
        res.status(500).json({message: 'Server Error!'});
    })
};