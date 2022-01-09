import { ApplicationReference } from 'src/enums/application-reference.enum';

export class CreateApplicationDTO {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  previousUniversity: string;
  course: string;
  referencedBy: ApplicationReference;
}
