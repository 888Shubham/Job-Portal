
class ProductModel {
  static products = [];

  constructor(name, tech, location, LPA, skills) {
    this.id = this.constructor.products.length + 1;
    this.name = name;
    this.tech = tech;
    this.location = location;
    this.LPA = LPA;
    this.skills = Array.isArray(skills) ? skills : [];
    this.timeStamp = new Date(); // Add timeStamp property

    this.constructor.products.push(this);
  }

  static get() {
    return this.products;
  }

  static getById(productId) {
    const product = this.products.find((p) => p.id === parseInt(productId, 10));
    return product || null;
  }

  static update(productObj) {
    // co//nsole.log("projectId", productObj.id);
    // console.log("project", productObj);
    const index = this.products.findIndex((p) => p.id === parseInt(productObj.id, 10));
    //console.log("index:",index);
    if (index !== -1) {
      this.products[index] = productObj;
      // console.log(this.products[index]);
    }
  }

  static delete(productId) {
    const index = this.products.findIndex((p) => p.id === parseInt(productId, 10));
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

// Create instances of ProductModel
new ProductModel(
  'Coding Ninja',
  'SDE',
  'Gurgaon, Haryana',
  '12-20',
  ['React', 'Node.js', 'JavaScript', 'Rust']
);
new ProductModel(
  'Flipkart',
  'SDE',
  'Gurgaon, Haryana',
  '7-10',
  ['Node.js', 'C++', 'Rust']
);

new ProductModel(
  'Google',
  'SDE',
  'Bangalore, KA',
  '10-17',
  ['Node.js', 'C++', 'Rust', 'React']
);

// Add more instances if needed...

export default ProductModel;

