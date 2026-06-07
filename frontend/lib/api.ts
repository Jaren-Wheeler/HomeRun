/**
 * Centralized API client for backend communication.
 *
 * Handles:
 * - GET, POST, PUT, DELETE requests
 * - base backend URL
 * - request error handling
 *
 * Used to avoid repeating fetch logic
 * throughout React components.
 */


const API_URL = process.env.BACKEND_URL; // backend connection url

// API client object to centralize all API call strucutre in the frontend
export const api = {

    // GET
    async get(endpoint: string) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    },

    // POST
    async post(endpoint: string, data: unknown) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // tells the backend that data is sent via json
            },
            body: JSON.stringify(data) // represents the actual data sent. Stringify converts JS object into json text
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    },

    // PUT
    async put(endpoint: string, data: unknown) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    },

    // DELETE
    async delete(endpoint: string) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    }
};