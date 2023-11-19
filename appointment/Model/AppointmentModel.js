export default class Forum {
  constructor(
    id,
    AppDate,
    AppDay,
    AppType,
    fees,
    patientId,
    doctorId,
    status,
    complain,
    Timestamp
  ) {
    this.id = id;
    this.AppointmentDate = AppDate;
    this.AppointmentDay = AppDay;
    this.AppointmentType = AppType;
    this.AppointmnetFee = fees;
    this.PatientId = patientId;
    this.DoctorId = doctorId;
    this.Status = status;
    this.Complain = complain;
    this.Timestamp = Timestamp;
  }
}
