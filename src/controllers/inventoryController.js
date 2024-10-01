const Inventory = require('../models/inventory');

exports.createInventoryItem = async (req, res) => {
  const { category, value, reference, quantity, brand, model, inventory_plate } = req.body;


  const finalReference = reference && reference.trim() !== "" ? reference : "sin referencia";

  const newItem = new Inventory({
    category: category || "",      
    value: value || "",           
    reference: finalReference,    
    quantity: quantity || 0,      
    brand: brand || "",            
    model: model || "",          
    inventory_plate: inventory_plate || "" 
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el elemento en el inventario', details: error.message });
  }
};



exports.updateInventoryItem = async (req, res) => {
  const itemId = req.params.id;
  const { category, value, reference, quantity, brand, model, inventory_plate } = req.body;

  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      itemId,
      {
        category: category || "",  
        value: value || "",       
        reference: reference || "", 
        quantity: quantity || 0,   
        brand: brand || "",        
        model: model || "",        
        inventory_plate: inventory_plate || "", 
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Elemento no encontrado' });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el elemento', error });
  }
};



exports.getAllInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los elementos del inventario' });
  }
};


exports.getInventoryItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Inventory.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Elemento no encontrado' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el elemento del inventario' });
  }
};


exports.deleteInventoryItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Inventory.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Elemento no encontrado' });
    }

    res.status(200).json({ message: 'Elemento eliminado con éxito', deletedItem });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el elemento del inventario' });
  }
};
