const BASE_URL = "http://localhost:8083/api";

export const api = {
  login: async (email, password) => {
    const response = await fetch(`${BASE_URL}/customers`, {
      headers: {
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
    });
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    return { message: "Login successful" };
  },

  getCustomers: async (email, password) => {
    const response = await fetch(`${BASE_URL}/customers`, {
      headers: {
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }
    return response.json();
  },

  addCustomer: async (customer, email, password) => {
    const response = await fetch(`${BASE_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
      body: JSON.stringify(customer),
    });
    if (!response.ok) {
      throw new Error("Failed to add customer");
    }
    return response.json();
  },

  updateCustomer: async (id, customer, email, password) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
      body: JSON.stringify(customer),
    });
    if (!response.ok) {
      throw new Error("Failed to update customer");
    }
    return response.json();
  },

  deleteCustomer: async (id, email, password) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete customer");
    }
  },
};
