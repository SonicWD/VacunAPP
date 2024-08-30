import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DoctorDashboard() {
  const [selectedZone, setSelectedZone] = useState('')

  // Datos de ejemplo - en una implementación real, estos vendrían de una API
  const patients = [
    { id: 1, name: 'Juan Pérez', vaccine: 'COVID-19', date: '2023-06-15', status: 'Pendiente' },
    { id: 2, name: 'María García', vaccine: 'Influenza', date: '2023-06-15', status: 'Completada' },
  ]

  const zones = ['Zona A', 'Zona B', 'Zona C']

  const handleVaccinate = (patientId) => {
    // Lógica para marcar una vacuna como administrada
    console.log('Vacuna administrada al paciente:', patientId)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel del Médico</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Agenda de Vacunación</CardTitle>
            <CardDescription>Seleccione una zona para ver los pacientes asignados</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedZone}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione una zona" />
              </SelectTrigger>
              <SelectContent>
                {zones.map((zone) => (
                  <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedZone && (
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Vacuna</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.vaccine}</TableCell>
                      <TableCell>{patient.date}</TableCell>
                      <TableCell>{patient.status}</TableCell>
                      <TableCell>
                        {patient.status === 'Pendiente' && (
                          <Button onClick={() => handleVaccinate(patient.id)}>Vacunar</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Control de Vacunas</CardTitle>
            <CardDescription>Inventario y estado de las vacunas</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Aquí iría un componente para mostrar el inventario de vacunas */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}