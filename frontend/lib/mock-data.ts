export type DeliveryStatus = "In Progress" | "Completed" | "Pending"

export type Delivery = {
  id: string
  title: string
  pickup: string
  dropoff: string
  price: string
  date: string
  status: DeliveryStatus
}

export type Job = {
  id: string
  title: string
  address: string
  dropoff: string
  distance: string
  pay: string
}

export const recentDeliveries: Delivery[] = [
  {
    id: "1",
    title: "Grocery Delivery",
    pickup: "123 Market St, Springfield",
    dropoff: "456 Oak Ave, Springfield",
    price: "$15.50",
    date: "Today, 2:30 PM",
    status: "In Progress",
  },
  {
    id: "2",
    title: "Document Delivery",
    pickup: "789 Business Rd, Springfield",
    dropoff: "321 Main St, Springfield",
    price: "$8.75",
    date: "May 12, 11:20 AM",
    status: "Completed",
  },
  {
    id: "3",
    title: "Electronics Delivery",
    pickup: "55 Tech Way, Springfield",
    dropoff: "900 Park St, Springfield",
    price: "$22.40",
    date: "May 10, 3:45 PM",
    status: "Completed",
  },
]

export const availableJobs: Job[] = [
  {
    id: "1",
    title: "Grocery Delivery",
    address: "123 Market St, Springfield",
    dropoff: "456 Oak Ave, Springfield",
    distance: "2.4 mi",
    pay: "$12.50",
  },
  {
    id: "2",
    title: "Pharmacy Delivery",
    address: "88 Health Dr, Springfield",
    dropoff: "321 Pine St, Springfield",
    distance: "3.1 mi",
    pay: "$9.75",
  },
  {
    id: "3",
    title: "Document Delivery",
    address: "789 Business Rd, Springfield",
    dropoff: "664 Lake St, Springfield",
    distance: "1.8 mi",
    pay: "$7.25",
  },
  {
    id: "4",
    title: "Food Delivery",
    address: "15 Center St, Springfield",
    dropoff: "120 West St, Springfield",
    distance: "2.7 mi",
    pay: "$11.00",
  },
]
