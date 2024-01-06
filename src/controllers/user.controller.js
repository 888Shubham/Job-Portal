import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
import ApplicantModel from "../models/applicant.model.js";

export default class UserController {
    getRegister(req, res) {
      res.render('register');
    }
  
    getLogin(req, res) {
      res.render('partials/loginForm', {Candidate:null, user: null, errorMessage: null });
    }
  
    postRegister(req, res) {
      const { name, email, password } = req.body;
      UserModel.add(name, email, password);
      res.redirect('/');
    }
  
    postLogin(req, res) {
      const { email, password } = req.body;
      const user = UserModel.isValidUser(email, password);
      //console.log(user);
     if (!user) {
     return res.render('partials/loginForm', { Candidate:null, user: null,
      errorMessage: 'Invalid Credentials',
       });
        }
      req.session.email = email;
      return res.render('partials/recruiterPage', { Candidate:null , user: req.session.email });
    }
    getApplicantData(req,res){
      const allApplicants = ApplicantModel.get();
      res.render('partials/applicantForms', {Candidate:null , user: req.session.email,  applicants: allApplicants})
    }
  
    logout(req, res){
      // on logout, destroy the session
      req.session.destroy((err)=>{
        if(err){
          console.log(err);
        }
        else{
          res.render('partials/loginForm', {Candidate:null, user: null, errorMessage: null });
        }
      });
    }
  }
  