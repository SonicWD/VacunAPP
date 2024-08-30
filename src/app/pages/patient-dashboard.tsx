import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PatientDashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Datos de ejemplo - en una implementación real, estos vendrían de una API
  const appointments = [
    { id: 1, date: '2023-06-15', vaccine: 'COVID-19', status: 'Pendiente' },
    { id: 2, date: '2023-07-01', vaccine: 'Influenza', status: 'Completada' },
  ]

  const handleScheduleAppointment = () => {
    // Lógica para agendar una cita
    console.log('Cita agendada para:', selectedDate)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel del Paciente</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Agendar Vacuna</CardTitle>
            <CardDescription>Seleccione una fecha para su próxima vacuna</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleScheduleAppointment}>Agendar Cita</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mis Citas</CardTitle>
            <CardDescription>Historial y citas pendientes de vacunación</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Vacuna</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.vaccine}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}