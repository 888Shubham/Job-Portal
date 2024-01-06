export default class ApplicantModel {
  static applicants = [];
  static jobApplicantCount = {}; // Counter for the number of applicants per job

  constructor(id, name, email, phone, jobId, resume) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.jobId = jobId;
    this.resume = resume;

    // Increment the applicant count for the specific job
    if (!ApplicantModel.jobApplicantCount[jobId]) {
      ApplicantModel.jobApplicantCount[jobId] = 1;
    } else {
      ApplicantModel.jobApplicantCount[jobId]++;
    }
    this.applicantNumber = ApplicantModel.jobApplicantCount[jobId];
  }

  static get() {
    return this.applicants;
  }

  static getByJobId(jobId) {
    return this.applicants.filter((applicant) => applicant.jobId === jobId);
  }

  static add(name, email, phone, jobId, resume) {
    const newApplicant = new ApplicantModel(
      this.applicants.length + 1,
      name,
      email,
      phone,
      jobId,
      resume
    );
    this.applicants.push(newApplicant);
    return newApplicant;
  }
}
