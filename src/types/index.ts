export interface Product {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  minStock: number;
  category: string;
  lastUpdated: string;
  marketingEnabled?: boolean;
  productType?: string;
  targetAudience?: string[];
}

export interface Order {
  id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customer: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  createdAt: string;
  total: number;
}

export interface DashboardStats {
  totalProducts: number;
  lowStockItems: number;
  pendingOrders: number;
  monthlyRevenue: number;
}

export interface CustomerGroup {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  groupIds: string[];
  createdAt: string;
  lastPurchase?: string;
  totalPurchases: number;
}

export interface Truck {
  id: string;
  licensePlate: string;
  model: string;
  year: number;
  capacity: string;
  status: 'available' | 'in_route' | 'maintenance';
  driver: {
    name: string;
    license: string;
    phone: string;
    email: string;
  };
  lastMaintenance: string;
  nextMaintenance: string;
  fuelType: 'diesel' | 'gas' | 'electric';
  fuelEfficiency: number; // km/L
  mileage: number;
  documents: {
    insurance: string;
    inspection: string;
    registration: string;
  };
}