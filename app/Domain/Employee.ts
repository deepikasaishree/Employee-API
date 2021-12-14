import { DateTime } from 'luxon'

export default class EmployeeDomain {
  private readonly id: number
  private readonly employeeName: string
  private readonly mobile: string
  private readonly email: string
  private readonly dob: DateTime
  private readonly department: string
  private readonly createdAt: DateTime
  private readonly updatedAt: DateTime

  constructor(
    id: number,
    employeeName: string,
    mobile: string,
    email: string,
    dob: DateTime,
    department: string,
    createdAt: DateTime,
    updatedAt: DateTime
  ) {
    this.id = id
    this.employeeName = employeeName
    this.mobile = mobile
    this.email = email
    this.dob = dob
    this.department = department
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public static createFromJson({
    id,
    employeeName,
    mobile,
    email,
    dob,
    department,
    createdAt,
    updatedAt,
  }) {
    return new EmployeeDomain(
      id,
      employeeName,
      mobile,
      email,
      dob,
      department,
      createdAt,
      updatedAt
    )
  }

  public asJson() {
    return {
      id: this.id,
      employeeName: this.employeeName,
      mobile: this.mobile,
      email: this.email,
      dob: this.dob,
      department: this.department,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
