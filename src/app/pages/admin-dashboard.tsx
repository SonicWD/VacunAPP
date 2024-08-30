import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {
  // Datos de ejemplo - en una implementación real, estos vendrían de una API
  const overviewData = [
    { category: 'Pacientes Registrados', count: 1000 },
    { category: 'Citas Pendientes', count: 150 },
    { category: 'Vacunas Administradas', count: 850 },
    { category: 'Médicos Activos', count: 20 },
  ]

  const vaccinationData = [
    { name: 'COVID-19', administradas: 400, pendientes: 100 },
    { name: 'Influenza', administradas: 300, pendientes: 50 },
    { name: 'Hepatitis B', administradas: 150, pendientes: 30 },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel del Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Resumen General</CardTitle>
            <CardDescription>Estadísticas generales del sistema de vacunación</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {overviewData.map((item) => (
                  <TableRow key={item.category}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-right">{item.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas de Vacunación</CardTitle>
            <CardDescription>Distribución de vacunas administradas y pendientes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vaccinationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="administradas" fill="#8884d8" />
                <Bar dataKey="pendientes" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}