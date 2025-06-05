import Navbar from "../components/Navbar"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-100">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Selamat Datang di ParentCare</h1>
        <p className="text-center mb-6 text-gray-600">Platform konsultasi parenting digital untuk keluarga sehat.</p>
      </main>
    </div>
  );
}