import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ShieldCheckIcon, UserIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto p-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">VacunApp</h1>
          <div className="space-x-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a VacunApp</h2>
          <p className="text-xl text-gray-600 mb-8">La plataforma integral para el control y seguimiento de vacunación</p>
          <Button size="lg" asChild>
            <Link href="/register">Regístrate Ahora</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="mr-2" />
                Para Pacientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Agenda tus citas de vacunación fácilmente y mantén un registro de tu historial de vacunas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserIcon className="mr-2" />
                Para Médicos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Gestiona tu agenda de vacunación y lleva un control detallado de las vacunas administradas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheckIcon className="mr-2" />
                Para Administradores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Obtén una visión general del proceso de vacunación y accede a estadísticas detalladas.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acceso Rápido</h3>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/patient-dashboard">Panel de Paciente</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/doctor-dashboard">Panel de Médico</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin-dashboard">Panel de Administrador</Link>
            </Button>
          </div>
        </section>
        <p>
          .
        </p>
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Por qué elegir VacunApp?</h3>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li className="flex items-center">
              <ShieldCheckIcon className="mr-2 text-green-500" />
              Seguridad y privacidad garantizadas
            </li>
            <li className="flex items-center">
              <CalendarIcon className="mr-2 text-blue-500" />
              Fácil programación de citas
            </li>
            <li className="flex items-center">
              <UserIcon className="mr-2 text-purple-500" />
              Seguimiento personalizado de vacunación
            </li>
          </ul>
       
        </section>
      </main>

      <footer className="bg-gray-100 mt-12 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2023 VacunApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}