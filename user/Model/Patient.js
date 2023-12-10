export default class Patient {
  constructor(
    uid,
    bloodGroup,
    city,
    contactNo,
    displayName,
    dob,
    email,
    gender,
    name,
    profileImage,
    age
  ) {
    this.uid = uid;
    this.bloodGroup = bloodGroup;
    this.city = city;
    this.contactNo = contactNo;
    this.displayName = displayName;
    this.dob = dob;
    this.email = email;
    this.gender = gender;
    this.name = name;
    this.profileImage = profileImage;
    this.age = age;
  }
}
