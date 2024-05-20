const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        await income.save();
        return res.status(200).json({ message: 'Income Added Successfully!' });
    } catch (error) {
        // return res.status(500).json({ message: 'An error occurred while adding income' });
    }
    console.log(income)
};









// const IncomeSchema = require("../models/IncomeModel");


// exports.addIncome = async (req, res) =>{
//     const {title, amount, category, description, date} = req.body;

//     const income = IncomeSchema({
//         title, 
//         amount, 
//         category, 
//         description, 
//         date
//     })

//     try {
//         //validations!!
//         if(!title || !category || !description || !date){
//             return res.status(400).json({message: 'All fields are required!'})
//         }
//         if(!amount === 'number' || amount <= 0){
//             return res.status(400).json({message: 'Amount must be a positive number!'})
//         }
//         await income.save()
//         return res.status(200).json({message: 'Income Added Successfully!'})
//     } catch (error) {
        
//     }


//     console.log(income)
// }
