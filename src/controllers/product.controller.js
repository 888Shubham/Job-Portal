import { uploadFile } from "../middlewares/file-upload.middleware.js";
import ProductModel from "../models/product.model.js";
import ApplicantModel from "../models/applicant.model.js";
import {sendMail} from "../middlewares/nodeMailer.js";

class ProductsController {
    getHome(req, res){
        res.render('home' ,{ Candidate : null,user: null });
    }
    
    getProduct(req,res){
        let product = ProductModel.get();
        // console.log(product);
        res.render('partials/jobDesc', {Candidate: true , user: null, products: product});
        

    }
    getProductDesc(req, res){
        const productId = req.params.productId;
        // console.log(productId);
        req.session.productId = productId;

        const productData = ProductModel.getById(productId);
        const newApplicant = null;
        // console.log(productData);
        res.render("partials/jobDetail", { Candidate: true , user: null, products: [productData] , applicant: newApplicant});
     
    }
    addProduct(req, res){
        const companyName = req.body.companyName;
    const tech = req.body.tech;
    const location = req.body.location;
    const lpa = req.body.ctc;
    const skills = req.body.skills.split(',').map(skill => skill.trim());
    const newProduct = new ProductModel(companyName, tech, location, lpa, skills);
    console.log(newProduct);

    let product = ProductModel.get();
    res.render('partials/recruiterPostJob', { Candidate: false, user: req.session.email, products: product });
    }
    applyForJob(req, res) {
        const { name, email, contact } = req.body;
        const productId = req.session.productId;
        const productData = ProductModel.getById(productId);
        const resumeName = req.file.filename;
        const newApplicant = ApplicantModel.add(name, email, contact, productId, resumeName);
        const applicantEmail = email;
       const emailSubject = 'Application Confirmation';
       const emailText = `Dear ${name},\n\nThank you for applying to ${productData.name}. Your application has been received.`;

       sendMail(applicantEmail, emailSubject, emailText); 

        let product = ProductModel.get();
        res.render('partials/jobDetail', {Candidate: true , user: null, products: [productData],  applicant: newApplicant});
        delete req.session.productId;
        
    }
    getUpdateProductView(req, res, next) {
        // 1. if product exists then return view
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if (productFound) {
          res.render('partials/update-product', {Candidate: false, user: req.session.email,
            product: productFound,
          });
        }
        // 2. else return errors.
        else {
          res.status(401).send('Product not found');
        }
      }
    
      postUpdateProduct(req, res) {
        console.log("update:",req.body);
        const productId = req.body.id;
       const productObj = ProductModel.getById(productId);
        const updatedSkills = req.body.updatedSkills.split(',').map(skill => skill.trim());
        // Update other fields
    productObj.name = req.body.name;
    productObj.tech = req.body.tech;
    productObj.location = req.body.location;
    productObj.LPA = req.body.LPA;
       productObj.skills = updatedSkills;
       console.log("productObj", productObj);
      //  ProductModel.update(productObj);
        ProductModel.update(productObj);
        var product = ProductModel.get();
        // console.log("products",product )
        res.render('partials/recruiterPostJob', { Candidate: false, user: req.session.email, products: product });
      }
    
      deleteProduct(req, res) {
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if (!productFound) {
          return res
            .status(401)
            .send('Product not found');
        }
        ProductModel.delete(id);
        var product = ProductModel.get();
        res.render('partials/recruiterPostJob', { Candidate: false, user: req.session.email, products: product });
      }
      getPostJob(req,res){
        var product = ProductModel.get();
        res.render('partials/recruiterPostJob', { Candidate: false, user: req.session.email, products: product });
      }

}
export default ProductsController;