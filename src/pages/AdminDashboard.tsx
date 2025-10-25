import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/api";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function AdminDashboard() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (email && password) {
      api
        .getCustomers(email, password)
        .then(setCustomers)
        .catch(console.error);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    navigate("/login");
  };

  const handleDelete = async (id) => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (email && password) {
      try {
        await api.deleteCustomer(id, email, password);
        setCustomers(customers.filter((c) => c.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  // ✅ Export CSV
  const handleExportCSV = () => {
    if (!customers.length) return alert("No customers to export");

    const headers = ["ID", "Name", "Mobile", "Email", "Points"];
    const rows = customers.map((c) => [
      c.id,
      c.cus_name,
      c.mobile,
      c.email,
      c.points,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "customers.csv");
  };

  // ✅ Export Excel
  const handleExportExcel = () => {
    if (!customers.length) return alert("No customers to export");

    const worksheet = XLSX.utils.json_to_sheet(
      customers.map((c) => ({
        ID: c.id,
        Name: c.cus_name,
        Mobile: c.mobile,
        Email: c.email,
        Points: c.points,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "customers.xlsx");
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      {/* ✅ Toolbar with Export Dropdown */}
      <div className="flex justify-end mb-4 space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              Export
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleExportCSV}>
              Export as CSV
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleExportExcel}>
              Export as Excel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button>Add Customer</Button>
      </div>

      {/* ✅ Customer Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.cus_name}</TableCell>
              <TableCell>{customer.mobile}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.points}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Update
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
