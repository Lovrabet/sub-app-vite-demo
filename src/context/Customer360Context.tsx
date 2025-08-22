import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import {
  Company,
  CustomerInfo,
  SalesOpportunity,
  Order,
  CustomerMetrics,
  Customer360Service,
} from '@/services/customer360Mock';

interface Customer360ContextType {
  selectedCompany: Company | null;
  selectedOpportunity: SalesOpportunity | null;
  customerInfo: CustomerInfo | null;
  opportunities: SalesOpportunity[];
  orders: Order[];
  metrics: CustomerMetrics | null;
  loading: {
    customer: boolean;
    opportunities: boolean;
    orders: boolean;
    metrics: boolean;
  };
  
  selectCompany: (company: Company) => void;
  selectOpportunity: (opportunity: SalesOpportunity | null) => void;
  refreshData: () => void;
}

const Customer360Context = createContext<Customer360ContextType | undefined>(undefined);

export const useCustomer360 = () => {
  const context = useContext(Customer360Context);
  if (!context) {
    throw new Error('useCustomer360 must be used within Customer360Provider');
  }
  return context;
};

interface Customer360ProviderProps {
  children: ReactNode;
}

export const Customer360Provider: React.FC<Customer360ProviderProps> = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<SalesOpportunity | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [opportunities, setOpportunities] = useState<SalesOpportunity[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [metrics, setMetrics] = useState<CustomerMetrics | null>(null);
  const [loading, setLoading] = useState({
    customer: false,
    opportunities: false,
    orders: false,
    metrics: false,
  });

  const loadCustomerData = useCallback(async (companyId: string) => {
    setLoading(prev => ({ ...prev, customer: true }));
    try {
      const info = await Customer360Service.getCustomerInfo(companyId);
      setCustomerInfo(info);
    } finally {
      setLoading(prev => ({ ...prev, customer: false }));
    }
  }, []);

  const loadOpportunities = useCallback(async (companyId: string) => {
    setLoading(prev => ({ ...prev, opportunities: true }));
    try {
      const opps = await Customer360Service.getOpportunities(companyId);
      setOpportunities(opps);
      // 只在第一次加载时选中第一个
      setSelectedOpportunity(prev => {
        if (!prev && opps.length > 0) {
          return opps[0];
        }
        return prev;
      });
    } finally {
      setLoading(prev => ({ ...prev, opportunities: false }));
    }
  }, []);

  const loadOrders = useCallback(async (companyId: string) => {
    setLoading(prev => ({ ...prev, orders: true }));
    try {
      const ords = await Customer360Service.getOrders(companyId);
      setOrders(ords);
    } finally {
      setLoading(prev => ({ ...prev, orders: false }));
    }
  }, []);

  const loadMetrics = useCallback(async (companyId: string) => {
    setLoading(prev => ({ ...prev, metrics: true }));
    try {
      const metr = await Customer360Service.getCustomerMetrics(companyId);
      setMetrics(metr);
    } finally {
      setLoading(prev => ({ ...prev, metrics: false }));
    }
  }, []);

  const selectCompany = useCallback((company: Company) => {
    setSelectedCompany(company);
    setSelectedOpportunity(null);
    
    loadCustomerData(company.id);
    loadOpportunities(company.id);
    loadOrders(company.id);
    loadMetrics(company.id);
  }, [loadCustomerData, loadOpportunities, loadOrders, loadMetrics]);

  const selectOpportunity = useCallback((opportunity: SalesOpportunity | null) => {
    setSelectedOpportunity(opportunity);
  }, []);

  const refreshData = useCallback(() => {
    if (selectedCompany) {
      selectCompany(selectedCompany);
    }
  }, [selectedCompany, selectCompany]);

  const value: Customer360ContextType = useMemo(() => ({
    selectedCompany,
    selectedOpportunity,
    customerInfo,
    opportunities,
    orders,
    metrics,
    loading,
    selectCompany,
    selectOpportunity,
    refreshData,
  }), [
    selectedCompany,
    selectedOpportunity,
    customerInfo,
    opportunities,
    orders,
    metrics,
    loading,
    selectCompany,
    selectOpportunity,
    refreshData,
  ]);

  return (
    <Customer360Context.Provider value={value}>
      {children}
    </Customer360Context.Provider>
  );
};