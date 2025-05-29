const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.getById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = req.body;
    await Customer.create(newCustomer);
    res.status(201).json({ message: 'Customer created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const customerUpdates = req.body;
    await Customer.update(id, customerUpdates);
    res.json({ message: 'Customer updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    await Customer.delete(id);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
