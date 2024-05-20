const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Convert amount to a number
    const numericAmount = Number(amount);

    // Create the income object
    const expense = new ExpenseSchema({
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

        await expense.save();
        res.status(200).json({ message: 'Expense Added Successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding expense' });
    }
};

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({message: 'Server Error!'});
    }
};

exports.deleteExpense = async (req, res) => {
    const {id} = req.params; // req.params are those object that we're gonna pass as an id so that it could be deleted
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
        res.status(200).json({message: 'Expense Deleted Successfully!'});
    })
    .catch((error) => {
        res.status(500).json({message: 'Server Error!'});
    })
};