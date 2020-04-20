import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointment {
  provider: string;
  date: Date;
}

export default class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): boolean {
    const exists = this.appointments.some(appointment =>
      isEqual(appointment.date, date),
    );
    return exists;
  }

  public create({ provider, date }: CreateAppointment): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);
    return appointment;
  }
}
